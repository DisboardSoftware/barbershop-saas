# Operations Runbook

## Start and stop

Start stack:
```bash
docker compose up --build
```

Stop stack:
```bash
docker compose down -v
```

## Backup and restore

Backup PostgreSQL:
```bash
npm run db:backup
```

Restore PostgreSQL:
```bash
npm run db:restore -- backups/<file>.sql
```

## MinIO key rotation (placeholder)

1. Create new access keys in secure secret manager.
2. Update runtime environment variables.
3. Roll containers with new credentials.
4. Validate upload and read paths.

## Migrations

Generate and validate Prisma schema:
```bash
npm run prisma:generate
npm run prisma:validate
```

Apply in running container startup (`prisma db push` in backend container).

## Common troubleshooting

- API unavailable:
  - check `docker compose ps`
  - inspect backend logs: `docker compose logs backend`
- DB connection errors:
  - verify `DATABASE_URL` and postgres health.
- Upload failures:
  - verify MinIO health and bucket configuration.
- Smoke failures:
  - run `/api/health` manually and verify seeded admin credentials.
