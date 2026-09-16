import { Router } from 'express';
import { createOrder, getMyOrders, createOrderSchema } from '../controllers/orderController';
import { validateBody } from '../middleware/validateMiddleware';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// Créer une commande (Projet sur mesure ou Pack)
router.post('/', validateBody(createOrderSchema), createOrder);

// Obtenir mes commandes
router.get('/my-orders', authenticateToken, getMyOrders);

export default router;
