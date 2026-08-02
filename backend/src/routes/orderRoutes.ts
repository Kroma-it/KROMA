import { Router } from 'express';
import { createOrder, getMyOrders, createOrderSchema } from '../controllers/orderController.js';
import { validateBody } from '../middleware/validateMiddleware.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

// Créer une commande (Projet sur mesure ou Pack)
router.post('/', validateBody(createOrderSchema), createOrder);

// Obtenir mes commandes
router.get('/my-orders', authenticateToken, getMyOrders);

export default router;
