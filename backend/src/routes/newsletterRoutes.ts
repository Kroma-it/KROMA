import { Router } from 'express';
import { subscribeNewsletter, subscribeNewsletterSchema } from '../controllers/newsletterController';
import { validateBody } from '../middleware/validateMiddleware';

const router = Router();

router.post('/subscribe', validateBody(subscribeNewsletterSchema), subscribeNewsletter);

export default router;
