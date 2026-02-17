# Barbershop CRM - Public Technical Showcase

Public-safe technical presentation of architecture, infrastructure, and engineering standards for a Barbershop CRM baseline.

## Executive Overview
- Architecture style: modular monolith backend + React SPA frontend
- Runtime model: Docker Compose with 4 services (`frontend`, `backend`, `postgres`, `minio`)
- Audience: engineering teams evaluating architecture and delivery quality
- Data policy: all sample values are fictional and sanitized

## Stack
- Frontend: React + Nginx reverse proxy
- Backend: Node.js + Express + Prisma
- Database: PostgreSQL 16
- Object storage: MinIO (S3-compatible)
- Orchestration: Docker Compose

## Quick Start
1. Prepare environment files:
```bash
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```
2. Start everything:
```bash
docker compose up --build
```
3. Validate health:
```bash
curl http://localhost:3001/api/health
node scripts/mvp-smoke.js
```

Default local endpoints:
- Frontend: `http://localhost:3002`
- API base: `http://localhost:3001/api`
- Health: `http://localhost:3001/api/health`
- PostgreSQL: `localhost:5432`
- MinIO API: `http://localhost:9000`
- MinIO Console: `http://localhost:9001`

## Baseline API
- `GET /api`
- `GET /api/health`

Business endpoints are intentionally left as TODO stubs in `backend/src/server.js`.

## Operations
- Backup Postgres: `bash scripts/backup-postgres.sh`
- Restore Postgres: `bash scripts/restore-postgres.sh ./backups/<file>.sql`
- Smoke test: `node scripts/mvp-smoke.js`

Detailed runbooks:
- `docs/BACKUP_RESTORE.md`
- `docs/MVP_GO_LIVE_CHECKLIST.md`

## Security and Sanitization
- See `SECURITY.md` for responsible disclosure workflow.
- Never commit secrets, production identifiers, or customer data.
- Keep placeholders only (`<CHANGE_ME>`, `<REDACTED>`) in public templates.

## Pre-Publication Checklist
- [ ] Replaced all `<CHANGE_ME>` placeholders for local runtime where needed.
- [ ] Verified no real secrets in `*.env`, compose files, scripts, or docs.
- [ ] Confirmed sample data is fictional.
- [ ] Reviewed `BLUEPRINT.md` sanitization section.
- [ ] Ran `rg -n "password|secret|token|api[_-]?key"` and validated findings.
