import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import orderRoutes from './routes/orderRoutes';
import newsletterRoutes from './routes/newsletterRoutes';
import feedbackRoutes from './routes/feedbackRoutes';
import adminRoutes from './routes/adminRoutes';

const app = express();

// FRONTEND_URL accepte plusieurs origines séparées par des virgules
const allowedOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

// Middlewares globaux
app.use(cors({
  origin: allowedOrigins.length > 0 ? allowedOrigins : '*',
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Route de santé (Healthcheck)
app.get('/api/v1/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'KROMA Backend API',
    time: new Date().toISOString()
  });
});

// Enregistrement des routes API
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/newsletter', newsletterRoutes);
app.use('/api/v1/feedbacks', feedbackRoutes);
app.use('/api/v1/admin', adminRoutes);

// Middleware 404
app.use((_req, res) => {
  res.status(404).json({ error: 'Route introuvable.' });
});

// Middleware d'erreur globale
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ error: 'Erreur interne du serveur.' });
});

export default app;
