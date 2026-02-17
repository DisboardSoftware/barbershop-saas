const app = require('./src/app');
const env = require('./src/config/env');
const logger = require('./src/utils/logger');

app.listen(env.apiPort, () => {
  logger.info(`Backend listening on port ${env.apiPort}`);
});
