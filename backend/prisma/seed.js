const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@local.test';
  const password = 'admin123';
  const passwordHash = await bcrypt.hash(password, 10);

  const tenant = await prisma.tenant.upsert({
    where: { id: 'local-tenant' },
    update: { name: 'Local Demo Tenant' },
    create: {
      id: 'local-tenant',
      name: 'Local Demo Tenant'
    }
  });

  await prisma.user.upsert({
    where: { email },
    create: {
      tenantId: tenant.id,
      email,
      passwordHash,
      role: 'super_admin'
    },
    update: {
      tenantId: tenant.id,
      passwordHash,
      role: 'super_admin'
    }
  });

  console.log('Seeded local super admin: admin@local.test / admin123 (tenant: local-tenant)');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
