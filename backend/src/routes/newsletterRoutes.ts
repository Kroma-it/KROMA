import { Router } from 'express';
import { subscribeNewsletter, subscribeNewsletterSchema } from '../controllers/newsletterController.js';
import { validateBody } from '../middleware/validateMiddleware.js';

const router = Router();

router.post('/subscribe', validateBody(subscribeNewsletterSchema), subscribeNewsletter);

export default router;
