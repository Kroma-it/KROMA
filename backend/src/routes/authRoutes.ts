import { Router } from 'express';
import {
  loginOrRegister,
  googleLogin,
  getMe,
  updateProfile,
  loginOrRegisterSchema,
  googleAuthSchema,
  updateProfileSchema
} from '../controllers/authController.js';
import { validateBody } from '../middleware/validateMiddleware.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

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
