import { Router } from 'express';
import {
  loginOrRegister,
  googleLogin,
  getMe,
  updateProfile,
  loginOrRegisterSchema,
  googleAuthSchema,
  updateProfileSchema
} from '../controllers/authController';
import { validateBody } from '../middleware/validateMiddleware';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// Login / Register hybride (email + pass)
router.post('/login', validateBody(loginOrRegisterSchema), loginOrRegister);

// Google Auth
router.post('/google', validateBody(googleAuthSchema), googleLogin);

// Obtenir profil utilisateur
router.get('/me', authenticateToken, getMe);

// Mettre à jour son profil (Prénom / Nom / Avatar)
router.put('/profile', authenticateToken, validateBody(updateProfileSchema), updateProfile);

export default router;
