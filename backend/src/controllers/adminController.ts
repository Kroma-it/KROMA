import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../config/prisma.js';

export const updateOrderStatusSchema = z.object({
  status: z.enum(['PENDING', 'VALIDATED', 'REJECTED'])
});

export async function getAllOrders(req: Request, res: Response): Promise<void> {
  try {
    const { status } = req.query;

    const where: any = {};
    if (status && typeof status === 'string') {
      where.status = status;
    }

    const orders = await prisma.order.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'Erreur récupération des commandes admin.' });
  }
}

// Validation ou rejet d'une commande (Doc point 3)
export async function updateOrderStatus(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id);
    const { status } = req.body;

    const updatedOrder = await prisma.order.update({
      where: { id },
      data: { status }
    });

    // Marquer les notifications associées comme lues
    await prisma.notification.updateMany({
      where: { orderId: id },
      data: { isRead: true }
    });

    res.json({
      message: `Commande #${id.substring(0, 8)} changée vers le statut : ${status}`,
      order: updatedOrder
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur modification statut commande.' });
  }
}

// Obtenir toutes les notifications du dashboard
export async function getNotifications(_req: Request, res: Response): Promise<void> {
  try {
    const notifications = await prisma.notification.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50
    });

    const unreadCount = await prisma.notification.count({
      where: { isRead: false }
    });

    res.json({ notifications, unreadCount });
  } catch (error) {
    res.status(500).json({ error: 'Erreur récupération des notifications.' });
  }
}

// Obtenir la liste des abonnés newsletter
export async function getSubscribers(_req: Request, res: Response): Promise<void> {
  try {
    const subscribers = await prisma.newsletterSubscriber.findMany({
      orderBy: { subscribedAt: 'desc' }
    });

    res.json({ subscribers });
  } catch (error) {
    res.status(500).json({ error: 'Erreur récupération des abonnés.' });
  }
}

// Approuver ou désapprouver un avis
export async function toggleFeedbackApproval(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id);
    const { isApproved } = req.body;

    const feedback = await prisma.feedback.update({
      where: { id },
      data: { isApproved: Boolean(isApproved) }
    });

    res.json({ message: 'Statut de l’avis mis à jour avec succès.', feedback });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour avis.' });
  }
}
