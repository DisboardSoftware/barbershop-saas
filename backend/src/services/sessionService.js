const { nanoid } = require('nanoid');
const prisma = require('../db/prisma');
const env = require('../config/env');

const createSession = async (userId) => {
  const token = nanoid(48);
  const expiresAt = new Date(Date.now() + env.sessionTokenTtlDays * 24 * 60 * 60 * 1000);

  const session = await prisma.session.create({
    data: {
      token,
      userId,
      expiresAt
    }
  });

  return session;
};

const findValidSessionByToken = async (token) => {
  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true }
  });

  if (!session) return null;
  if (session.expiresAt < new Date()) {
    await prisma.session.delete({ where: { id: session.id } });
    return null;
  }

  return session;
};

const revokeSessionByToken = async (token) => {
  await prisma.session.deleteMany({ where: { token } });
};

module.exports = {
  createSession,
  findValidSessionByToken,
  revokeSessionByToken
};
