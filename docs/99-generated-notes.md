# Generated Notes

This repository now contains a hardened compliance baseline for Barbershop SaaS Blueprint under Disboard Software governance.

## What was generated/updated

- Conventional Commits enforcement (`commitlint`, `husky`, `lint-staged`)
- Release governance (`CHANGELOG.md`, `RELEASE_CHECKLIST.md`, branching/release docs)
- CI hard gates (`validate`, `prisma`, `smoke`, conventional PR title check)
- Dependency hygiene (`dependabot`, env examples, stricter gitignore)
- Tenant-ready data model (Prisma `Tenant` + tenant-scoped models)
- Tenant runtime middleware and request correlation logging
- Operational and incident documentation
- Standards compliance matrix mapped to shared-infrastructure principles

## Local run

1. `cp .env.development.example .env`
2. `docker compose up --build`
3. Open `http://localhost:8080`
4. Run smoke: `node scripts/mvp-smoke.js`

Default local admin credentials:
- Email: `admin@local.test`
- Password: `admin123`
