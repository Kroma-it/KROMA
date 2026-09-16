import { Response } from 'express';
import { z } from 'zod';
import prisma from '../config/prisma';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

export const createFeedbackSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(5, 'Le commentaire doit faire au moins 5 caractères')
});

export async function createFeedback(req: AuthenticatedRequest, res: Response): Promise<void> {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Non authentifié' });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.userId }
    });

    if (!user) {
      res.status(404).json({ error: 'Utilisateur introuvable' });
      return;
    }

    // Exigence du document DOC.md (point 2) : "Il faut que tous les champs soient remplis pour faire un feedback"
    if (!user.isProfileComplete || !user.firstName || !user.lastName) {
      res.status(400).json({
        error: 'Profil incomplet.',
        message: 'Vous devez compléter votre prénom et votre nom dans votre profil avant de pouvoir laisser un avis.'
      });
      return;
    }

    const { rating, comment } = req.body;

    const feedback = await prisma.feedback.create({
      data: {
        userId: user.id,
        rating,
        comment
      }
    });

    res.status(201).json({
      message: 'Merci ! Votre avis a été transmis et sera publié après modération.',
      feedback
    });
  } catch (error) {
    console.error('Feedback error:', error);
    res.status(500).json({ error: 'Erreur lors de l’envoi de votre avis.' });
  }
}

export async function getPublicFeedbacks(req: any, res: Response): Promise<void> {
  try {
    const page = Math.max(1, parseInt(String(req.query.page || '1')));
    const limit = Math.min(50, Math.max(1, parseInt(String(req.query.limit || '20'))));
    const skip = (page - 1) * limit;

    const [feedbacks, total] = await Promise.all([
      prisma.feedback.findMany({
        where: { isApproved: true },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              avatarUrl: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.feedback.count({ where: { isApproved: true } })
    ]);

    res.json({ feedbacks, total, page, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des avis.' });
  }
}

export async function getMyFeedbacks(req: AuthenticatedRequest, res: Response): Promise<void> {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Non authentifié' });
      return;
    }

    const feedbacks = await prisma.feedback.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ feedbacks });
  } catch (error) {
    console.error('Get my feedbacks error:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de vos avis.' });
  }
}

