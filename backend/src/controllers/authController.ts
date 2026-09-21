import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import prisma from '../config/prisma';
import { generateToken } from '../config/jwt';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

// Schemas Zod
export const loginOrRegisterSchema = z.object({
  email: z.string().email('Adresse e-mail invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères')
});

export const googleAuthSchema = z.object({
  email: z.string().email('Adresse e-mail invalide'),
  googleId: z.string().min(1, 'Google ID requis'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  avatarUrl: z.string().optional()
});

export const updateProfileSchema = z.object({
  firstName: z.string().min(1, 'Le prénom est requis'),
  lastName: z.string().min(1, 'Le nom est requis'),
  avatarUrl: z.string().optional()
});

// Helper pour déduire prénom / nom depuis l'email
function deriveNamesFromEmail(email: string): { firstName: string; lastName: string } {
  const username = email.split('@')[0];
  const parts = username.split(/[\._\-]/);
  
  if (parts.length >= 2) {
    const firstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    const lastName = parts.slice(1).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    return { firstName, lastName };
  }
  
  const firstName = username.charAt(0).toUpperCase() + username.slice(1);
  return { firstName, lastName: '' };
}

// Handler de connexion / inscription hybride
export async function loginOrRegister(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;
  const cleanEmail = email.toLowerCase().trim();

  try {
    let user = await prisma.user.findUnique({
      where: { email: cleanEmail }
    });

    if (!user) {
      // L'utilisateur n'existe pas -> Création automatique (Doc point 2)
      const hashedPassword = await bcrypt.hash(password, 10);
      const { firstName, lastName } = deriveNamesFromEmail(cleanEmail);

      user = await prisma.user.create({
        data: {
          email: cleanEmail,
          passwordHash: hashedPassword,
          firstName,
          lastName,
          isProfileComplete: Boolean(firstName && lastName),
          role: cleanEmail.includes('admin@kroma') ? 'ADMIN' : 'USER'
        }
      });
    } else {
      // L'utilisateur existe -> Vérification du mot de passe
      if (user.passwordHash) {
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
          res.status(400).json({ error: 'Mot de passe incorrect.' });
          return;
        }
      } else {
        // Utilisateur créé via Google sans mot de passe local défini
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await prisma.user.update({
          where: { id: user.id },
          data: { passwordHash: hashedPassword }
        });
      }
    }

    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role
    });

    res.json({
      message: 'Connexion réussie',
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.avatarUrl,
        isProfileComplete: user.isProfileComplete,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login/Register error:', error);
    res.status(500).json({ error: 'Erreur lors de l’authentification.' });
  }
}

// Handler de connexion / inscription Google
export async function googleLogin(req: Request, res: Response): Promise<void> {
  const { email, googleId, firstName, lastName, avatarUrl } = req.body;
  const cleanEmail = email.toLowerCase().trim();

  try {
    let user = await prisma.user.findFirst({
      where: {
        OR: [{ googleId }, { email: cleanEmail }]
      }
    });

    if (!user) {
      const derived = deriveNamesFromEmail(cleanEmail);
      const finalFirstName = firstName || derived.firstName;
      const finalLastName = lastName || derived.lastName;

      user = await prisma.user.create({
        data: {
          email: cleanEmail,
          googleId,
          firstName: finalFirstName,
          lastName: finalLastName,
          avatarUrl,
          isProfileComplete: Boolean(finalFirstName && finalLastName),
          role: cleanEmail.includes('admin@kroma') ? 'ADMIN' : 'USER'
        }
      });
    } else if (!user.googleId) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          googleId,
          avatarUrl: avatarUrl || user.avatarUrl
        }
      });
    }

    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role
    });

    res.json({
      message: 'Connexion Google réussie',
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.avatarUrl,
        isProfileComplete: user.isProfileComplete,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Google Auth error:', error);
    res.status(500).json({ error: 'Erreur lors de la connexion Google.' });
  }
}

// Obtenir le profil courant
export async function getMe(req: AuthenticatedRequest, res: Response): Promise<void> {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Non authentifié' });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        avatarUrl: true,
        isProfileComplete: true,
        role: true,
        createdAt: true
      }
    });

    if (!user) {
      res.status(404).json({ error: 'Utilisateur introuvable' });
      return;
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Erreur récupération profil' });
  }
}

// Mise à jour du profil (permet de compléter son nom/prénom)
export async function updateProfile(req: AuthenticatedRequest, res: Response): Promise<void> {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Non authentifié' });
      return;
    }

    const { firstName, lastName, avatarUrl } = req.body;
    const isProfileComplete = Boolean(firstName && lastName);

    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data: {
        firstName,
        lastName,
        avatarUrl,
        isProfileComplete
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        avatarUrl: true,
        isProfileComplete: true,
        role: true
      }
    });

    res.json({
      message: 'Profil mis à jour avec succès',
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour profil' });
  }
}
