import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../config/prisma.js';

export const updateOrderStatusSchema = z.object({
  status: z.enum(['PENDING', 'VALIDATED', 'REJECTED'])
});

export const updateUserRoleSchema = z.object({
  role: z.enum(['USER', 'ADMIN'])
});

export async function getAllOrders(req: Request, res: Response): Promise<void> {
  try {
    const { status } = req.query;
    const where: any = {};
    if (status && typeof status === 'string') where.status = status;

    const orders = await prisma.order.findMany({
      where,
      include: {
        user: { select: { id: true, email: true, firstName: true, lastName: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'Erreur recuperation des commandes admin.' });
  }
}

export async function updateOrderStatus(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id);
    const { status } = req.body;

    const updatedOrder = await prisma.order.update({ where: { id }, data: { status } });

    await prisma.notification.updateMany({
      where: { orderId: id },
      data: { isRead: true }
    });

    res.json({ message: `Commande #${id.substring(0, 8)} mise a jour: ${status}`, order: updatedOrder });
  } catch (error) {
    res.status(500).json({ error: 'Erreur modification statut commande.' });
  }
}

export async function deleteOrder(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id);
    await prisma.order.delete({ where: { id } });
    res.json({ message: 'Commande supprimee.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur suppression commande.' });
  }
}

export async function getNotifications(_req: Request, res: Response): Promise<void> {
  try {
    const notifications = await prisma.notification.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50
    });
    const unreadCount = await prisma.notification.count({ where: { isRead: false } });
    res.json({ notifications, unreadCount });
  } catch (error) {
    res.status(500).json({ error: 'Erreur recuperation des notifications.' });
  }
}

export async function getSubscribers(_req: Request, res: Response): Promise<void> {
  try {
    const subscribers = await prisma.newsletterSubscriber.findMany({
      orderBy: { subscribedAt: 'desc' }
    });
    res.json({ subscribers });
  } catch (error) {
    res.status(500).json({ error: 'Erreur recuperation des abonnes.' });
  }
}

export async function toggleFeedbackApproval(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id);
    const { isApproved } = req.body;
    const feedback = await prisma.feedback.update({
      where: { id },
      data: { isApproved: Boolean(isApproved) }
    });
    res.json({ message: 'Statut avis mis a jour.', feedback });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise a jour avis.' });
  }
}

export async function getAllFeedbacks(_req: Request, res: Response): Promise<void> {
  try {
    const feedbacks = await prisma.feedback.findMany({
      include: {
        user: { select: { id: true, firstName: true, lastName: true, email: true, avatarUrl: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ feedbacks });
  } catch (error) {
    res.status(500).json({ error: 'Erreur recuperation des avis.' });
  }
}

export async function deleteFeedback(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id);
    await prisma.feedback.delete({ where: { id } });
    res.json({ message: 'Avis supprime.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur suppression avis.' });
  }
}

export async function getAllUsers(_req: Request, res: Response): Promise<void> {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        avatarUrl: true,
        role: true,
        isProfileComplete: true,
        createdAt: true,
        _count: { select: { orders: true, feedbacks: true } }
      }
    });
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Erreur recuperation utilisateurs.' });
  }
}

export async function updateUserRole(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id);
    const { role } = req.body;
    const user = await prisma.user.update({
      where: { id },
      data: { role },
      select: { id: true, email: true, firstName: true, lastName: true, role: true }
    });
    res.json({ message: 'Role mis a jour.', user });
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise a jour role.' });
  }
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id);
    await prisma.user.delete({ where: { id } });
    res.json({ message: 'Utilisateur supprime.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur suppression utilisateur.' });
  }
}

export async function getStats(_req: Request, res: Response): Promise<void> {
  try {
    const [users, orders, pendingOrders, validatedOrders, feedbacks, pendingFeedbacks, subscribers] = await Promise.all([
      prisma.user.count(),
      prisma.order.count(),
      prisma.order.count({ where: { status: 'PENDING' } }),
      prisma.order.count({ where: { status: 'VALIDATED' } }),
      prisma.feedback.count(),
      prisma.feedback.count({ where: { isApproved: false } }),
      prisma.newsletterSubscriber.count({ where: { isSubscribed: true } })
    ]);
    res.json({ users, orders, pendingOrders, validatedOrders, feedbacks, pendingFeedbacks, subscribers });
  } catch (error) {
    res.status(500).json({ error: 'Erreur recuperation statistiques.' });
  }
}
