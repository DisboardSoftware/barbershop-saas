const logger = require('../utils/logger');

function errorHandler(err, req, res, _next) {
  logger.error(err.message, { requestId: req.requestId, stack: err.stack });
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Internal server error',
    requestId: req.requestId
  });
}

module.exports = errorHandler;
