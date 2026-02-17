const dotenv = require('dotenv');

dotenv.config();

const parseBoolean = (value, fallback = false) => {
  if (value === undefined) return fallback;
  return ['1', 'true', 'yes'].includes(String(value).toLowerCase());
};

module.exports = {
  apiPort: Number(process.env.API_PORT || 3001),
  databaseUrl: process.env.DATABASE_URL,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:8080',
  sessionTokenTtlDays: Number(process.env.SESSION_TOKEN_TTL_DAYS || 30),
  uploadMaxBytes: Number(process.env.UPLOAD_MAX_BYTES || 5 * 1024 * 1024),
  minio: {
    endpoint: process.env.MINIO_ENDPOINT || 'minio',
    port: Number(process.env.MINIO_PORT || 9000),
    accessKey: process.env.MINIO_ACCESS_KEY || 'minioadmin',
    secretKey: process.env.MINIO_SECRET_KEY || 'minioadmin',
    bucket: process.env.MINIO_BUCKET || 'barbershop-media',
    useSSL: parseBoolean(process.env.MINIO_USE_SSL, false)
  }
};
