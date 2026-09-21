import express from 'express';
import cors from 'cors';
import prisma from './config/prisma';
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

// Route de santé (Healthcheck) : vérifie aussi la base et les variables d'environnement
// (noms et codes d'erreur uniquement, jamais de valeurs ni de messages détaillés)
app.get('/api/v1/health', async (_req, res) => {
  const missingEnv = ['DATABASE_URL', 'DIRECT_URL', 'JWT_SECRET'].filter((name) => !process.env[name]);

  let db: 'ok' | 'error' = 'ok';
  let dbErrorCode: string | undefined;
  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch (error: any) {
    db = 'error';
    dbErrorCode = error?.errorCode || error?.code || error?.name || 'UNKNOWN';
  }

  res.status(db === 'ok' ? 200 : 503).json({
    status: db === 'ok' ? 'ok' : 'degraded',
    service: 'KROMA Backend API',
    db,
    ...(dbErrorCode && { dbErrorCode }),
    ...(missingEnv.length > 0 && { missingEnv }),
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
