import { Router } from 'express';
import {
  getAllOrders,
  updateOrderStatus,
  getNotifications,
  getSubscribers,
  toggleFeedbackApproval,
  updateOrderStatusSchema
} from '../controllers/adminController.js';
import { authenticateToken, requireAdmin } from '../middleware/authMiddleware.js';
import { validateBody } from '../middleware/validateMiddleware.js';

const router = Router();

// Protéger toutes les routes admin
router.use(authenticateToken, requireAdmin);

// Gestion des commandes
router.get('/orders', getAllOrders);
router.patch('/orders/:id/status', validateBody(updateOrderStatusSchema), updateOrderStatus);

// Notifications & statistiques
router.get('/notifications', getNotifications);

// Abonnés newsletter
router.get('/subscribers', getSubscribers);

// Modération des avis
router.patch('/feedbacks/:id/approve', toggleFeedbackApproval);

export default router;
