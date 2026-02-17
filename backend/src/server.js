import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 3001);
const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:3002')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('CORS origin not allowed'));
    },
    credentials: true
  })
);

app.use(express.json());

app.get('/api', (_req, res) => {
  res.json({
    service: 'barbershop-saas-blueprint-backend',
    status: 'ok',
    version: '0.1.0'
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// TODO: Add auth endpoints (/api/auth/*) with RBAC and secure session lifecycle.
// TODO: Add appointment and availability endpoints (/api/appointments, /api/availability).
// TODO: Add public booking and reporting endpoints according to BLUEPRINT.md domain groups.

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on port ${port}`);
});
