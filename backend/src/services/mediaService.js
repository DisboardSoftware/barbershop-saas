const { Client } = require('minio');
const prisma = require('../db/prisma');
const env = require('../config/env');

const minioClient = new Client({
  endPoint: env.minio.endpoint,
  port: env.minio.port,
  useSSL: env.minio.useSSL,
  accessKey: env.minio.accessKey,
  secretKey: env.minio.secretKey
});

let bucketEnsured = false;

const ensureBucket = async () => {
  if (bucketEnsured) return;
  const exists = await minioClient.bucketExists(env.minio.bucket);
  if (!exists) {
    await minioClient.makeBucket(env.minio.bucket, 'us-east-1');
  }
  bucketEnsured = true;
};

const uploadFile = async ({ file, userId, tenantId }) => {
  await ensureBucket();

  const objectKey = `${Date.now()}-${file.originalname}`.replace(/\s+/g, '-');
  await minioClient.putObject(env.minio.bucket, objectKey, file.buffer, file.size, {
    'Content-Type': file.mimetype
  });

  const url = `${env.minio.useSSL ? 'https' : 'http'}://${env.minio.endpoint}:${env.minio.port}/${env.minio.bucket}/${objectKey}`;

  return prisma.media.create({
    data: {
      tenantId,
      key: objectKey,
      bucket: env.minio.bucket,
      mimeType: file.mimetype,
      size: file.size,
      url,
      userId
    }
  });
};

module.exports = {
  uploadFile
};
