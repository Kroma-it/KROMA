import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../config/prisma';

export const subscribeNewsletterSchema = z.object({
  email: z.string().email('Adresse e-mail invalide')
});

export async function subscribeNewsletter(req: Request, res: Response): Promise<void> {
  try {
    const { email } = req.body;
    const cleanEmail = email.toLowerCase().trim();

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email: cleanEmail }
    });

    if (existing) {
      if (!existing.isSubscribed) {
        await prisma.newsletterSubscriber.update({
          where: { id: existing.id },
          data: { isSubscribed: true }
        });
      }
      res.json({ message: 'Vous êtes déjà inscrit à la newsletter KROMA !' });
      return;
    }

    await prisma.newsletterSubscriber.create({
      data: { email: cleanEmail }
    });

    res.status(201).json({ message: 'Inscription à la newsletter réussie !' });
  } catch (error) {
    console.error('Newsletter error:', error);
    res.status(500).json({ error: 'Erreur lors de l’inscription à la newsletter.' });
  }
}
