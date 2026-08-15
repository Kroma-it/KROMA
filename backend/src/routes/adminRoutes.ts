import { Router } from 'express';
import {
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
  getNotifications,
  getSubscribers,
  toggleFeedbackApproval,
  getAllFeedbacks,
  deleteFeedback,
  getAllUsers,
  updateUserRole,
  deleteUser,
  getStats,
  updateOrderStatusSchema,
  updateUserRoleSchema
} from '../controllers/adminController.js';
import { authenticateToken, requireAdmin } from '../middleware/authMiddleware.js';
import { validateBody } from '../middleware/validateMiddleware.js';

const router = Router();

router.use(authenticateToken, requireAdmin);

// Stats globales
router.get('/stats', getStats);

// Utilisateurs
router.get('/users', getAllUsers);
router.patch('/users/:id/role', validateBody(updateUserRoleSchema), updateUserRole);
router.delete('/users/:id', deleteUser);

// Commandes
router.get('/orders', getAllOrders);
router.patch('/orders/:id/status', validateBody(updateOrderStatusSchema), updateOrderStatus);
router.delete('/orders/:id', deleteOrder);

// Avis
router.get('/feedbacks', getAllFeedbacks);
router.patch('/feedbacks/:id/approve', toggleFeedbackApproval);
router.delete('/feedbacks/:id', deleteFeedback);

// Notifications
router.get('/notifications', getNotifications);

// Newsletter
router.get('/subscribers', getSubscribers);

export default router;
