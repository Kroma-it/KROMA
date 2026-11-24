import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../config/prisma';
import { AuthenticatedRequest } from '../middleware/authMiddleware';
import { sendOrderNotificationEmail } from '../services/emailService';

const packServiceSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.string().optional(),
  features: z.array(z.string()).optional()
});

export const createOrderSchema = z.object({
  type: z.enum(['CUSTOM', 'PACK']),
  customerEmail: z.string().email('Adresse email invalide'),
  customerName: z.string().optional(),
  services: z.union([z.array(z.string()), packServiceSchema]),
  totalPrice: z.number().optional(),
  notes: z.string().optional()
});

export async function createOrder(req: AuthenticatedRequest, res: Response): Promise<void> {
  try {
    const { type, customerEmail, customerName, services, totalPrice, notes } = req.body;
    const cleanEmail = customerEmail.toLowerCase().trim();

    // Vérification ou recherche de l'utilisateur
    let userId = req.user?.userId;
    if (!userId) {
      let existingUser = await prisma.user.findUnique({ where: { email: cleanEmail } });
      if (!existingUser) {
        existingUser = await prisma.user.create({
          data: {
            email: cleanEmail,
            firstName: customerName || cleanEmail.split('@')[0],
            isProfileComplete: false
          }
        });
      }
      userId = existingUser.id;
    }

    const servicesString = typeof services === 'string' ? services : JSON.stringify(services);

    // Création de la commande
    const newOrder = await prisma.order.create({
      data: {
        userId,
        type,
        customerEmail: cleanEmail,
        customerName,
        services: servicesString,
        totalPrice: totalPrice || null,
        notes: notes || null,
        status: 'PENDING'
      }
    });

    // Création de la notification pour le dashboard Admin (Doc point 3)
    const adminMessage = `Nouvelle commande (${type}) de ${customerName || cleanEmail} - #${newOrder.id.substring(0, 8)}`;
    await prisma.notification.create({
      data: {
        orderId: newOrder.id,
        message: adminMessage
      }
    });

    const emailResult = await sendOrderNotificationEmail({
      orderId: newOrder.id,
      type,
      customerEmail: cleanEmail,
      customerName,
      services,
      totalPrice
    });

    if (emailResult.ok) {
      await prisma.order.update({
        where: { id: newOrder.id },
        data: { emailStatus: 'SENT', emailErrorCode: null, emailSentAt: new Date() }
      });
    } else {
      await prisma.order.update({
        where: { id: newOrder.id },
        data: { emailStatus: 'FAILED', emailErrorCode: emailResult.code }
      });
    }

    res.status(emailResult.ok ? 201 : 207).json({
      success: emailResult.ok,
      message: emailResult.ok
        ? 'Votre commande / projet a été envoyé avec succès.'
        : emailResult.message,
      order: newOrder,
      ...(emailResult.ok ? {} : {
        error: { code: emailResult.code, message: emailResult.message }
      })
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Erreur lors de l’envoi de la commande.' });
  }
}

// Obtenir les commandes de l'utilisateur connecté
export async function getMyOrders(req: AuthenticatedRequest, res: Response): Promise<void> {
  try {
    if (!req.user) {
      res.status(401).json({ error: 'Non authentifié' });
      return;
    }

    const orders = await prisma.order.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des commandes.' });
  }
}
