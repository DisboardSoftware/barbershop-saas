const bcrypt = require('bcryptjs');
const prisma = require('../db/prisma');

const listUsers = async (tenantId) => {
  return prisma.user.findMany({
    where: { tenantId },
    select: {
      id: true,
      tenantId: true,
      email: true,
      role: true,
      createdAt: true
    },
    orderBy: { createdAt: 'desc' }
  });
};

const createUser = async ({ tenantId, email, password, role }) => {
  const passwordHash = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      tenantId,
      email,
      passwordHash,
      role
    },
    select: {
      id: true,
      tenantId: true,
      email: true,
      role: true,
      createdAt: true
    }
  });
};

const findByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

module.exports = {
  listUsers,
  createUser,
  findByEmail
};
