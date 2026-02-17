const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const env = require('./config/env');
const { requestId } = require('./middleware/requestId');
const { authRateLimit } = require('./middleware/rateLimit');
const healthRoutes = require('./routes/health');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const mediaRoutes = require('./routes/media');
const errorHandler = require('./middleware/error');

const app = express();

app.use(cors({ origin: env.corsOrigin, credentials: true }));
app.use(requestId);
morgan.token('request-id', (req) => req.requestId || '-');
app.use(
  morgan(
    ':method :url :status :response-time ms - :res[content-length] req_id=:request-id ip=:remote-addr'
  )
);
app.use(express.json());

app.use('/api', healthRoutes);
app.use('/api', authRateLimit, authRoutes);
app.use('/api', userRoutes);
app.use('/api', mediaRoutes);

app.use(errorHandler);

module.exports = app;
