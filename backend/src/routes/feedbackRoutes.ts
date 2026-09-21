import { Router } from 'express';
import { createFeedback, getPublicFeedbacks, getMyFeedbacks, createFeedbackSchema } from '../controllers/feedbackController';
import { validateBody } from '../middleware/validateMiddleware';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// Obtenir la liste des avis validés (public)
router.get('/', getPublicFeedbacks);

// Obtenir ses propres avis (authentifié)
router.get('/my-feedbacks', authenticateToken, getMyFeedbacks);

// Laisser un avis (nécessite d'être connecté ET d'avoir complété son profil)
router.post('/', authenticateToken, validateBody(createFeedbackSchema), createFeedback);

export default router;
