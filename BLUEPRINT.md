# Project Blueprint - Barbershop SaaS (Public)

## 1. Purpose
This document provides a sanitized, market-facing technical blueprint for a barbershop SaaS platform.
It balances architectural transparency with strict removal of private or sensitive details.

## 2. System Snapshot
- Architecture style: modular monolith (single backend + SPA frontend)
- Domain focus: appointment and operations management for barbershop businesses
- Key capabilities (representative):
  - Authentication and role-based access control
  - Scheduling and availability workflows
  - Public booking entry points
  - Reporting and operational visibility
  - Audit and notification foundations

## 3. Technology Stack
- Frontend: React, Nginx static runtime with `/api` reverse proxy
- Backend: Node.js 20, Express 4, Prisma ORM
- Data: PostgreSQL 16
- Object storage: MinIO (S3-compatible)
- Local orchestration: Docker Compose

## 4. Runtime Topology
```text
User Browser
  -> Frontend (Nginx, port 3002)
      -> /api/* reverse proxy
          -> Backend (Express, port 3001)
              -> PostgreSQL (port 5432)
              -> MinIO (port 9000)
```

## 5. Deployment Model
- Local stack is containerized via `docker-compose.yml`
- Frontend is built and served from Nginx
- Backend reads env-only configuration (no hardcoded credentials)
- Persistent volumes:
  - `postgres_data`
  - `minio_data`

## 6. API Surface (Baseline)
Current sample endpoints:
- `GET /api`
- `GET /api/health`

Planned domain groups (not implemented in this public baseline):
- Authentication/session
- Company/branch/user management
- Appointments/services/collaborators
- Public booking flow
- Reports/finance dashboards
- Notifications/audit logs

## 7. Data Model Overview
Representative entities expected in production:
- `User`, `Session`
- `Company`, `Branch`
- `Collaborator`, `Service`, `Appointment`
- `AuditLog`, `Notification`

Current public Prisma schema includes minimal models for bootstrap and health of migrations.

## 8. Security Controls (Baseline + Target)
Baseline implemented in this repository:
- Env-driven configuration only
- Basic CORS allowlist
- Health endpoint for operational checks
- No embedded secrets

Target controls for production hardening:
- Strict RBAC middleware per route group
- Session lifecycle controls and revocation telemetry
- Password policy and lockout thresholds
- API/IP rate limiting
- Security headers + TLS termination strategy
- Centralized secrets management (Vault/SSM/SM)

## 9. Operations
- Startup:
```bash
docker compose up --build
```
- Health check:
```bash
curl http://localhost:3001/api/health
```
- Smoke test:
```bash
node scripts/mvp-smoke.js
```
- Backup/restore:
```bash
bash scripts/backup-postgres.sh
bash scripts/restore-postgres.sh ./backups/<file>.sql
```

## 10. Configuration Surface
Backend environment groups:
- App/network: `NODE_ENV`, `PORT`, `CORS_ORIGINS`
- Database: `DATABASE_URL`
- Storage: `MINIO_ENDPOINT`, `MINIO_PORT`, `MINIO_USE_SSL`, `MINIO_ACCESS_KEY`, `MINIO_SECRET_KEY`, `MINIO_BUCKET`

Frontend environment:
- `REACT_APP_API_URL`

## 11. Known Gaps / Backlog
- Domain endpoints are intentionally stubbed.
- CI/CD workflows are not included in this minimal baseline.
- Observability stack (metrics/traces/log shipping) is not included.

## 12. Sanitization Checklist
Credentials and secrets:
- Remove hardcoded passwords, API keys, tokens, and private certificates.
- Keep placeholders only (`<CHANGE_ME>`, `<REDACTED>`).

Identity and metadata:
- Replace real names, emails, phone numbers, and business identifiers.
- Keep all examples fictional.

Infrastructure details:
- Remove private hostnames, VPN paths, internal bucket names, and private network maps.

Data hygiene:
- Do not publish production dumps, screenshots, or logs containing customer data.

Documentation hygiene:
- Ensure README, scripts, and compose files contain sanitized values only.

## 13. Public Repository Structure
- `README.md`
- `BLUEPRINT.md`
- `SECURITY.md`
- `CONTRIBUTING.md`
- `docker-compose.yml`
- `docker-compose.public.yml`
- `backend/`
- `frontend/`
- `scripts/`
- `docs/`
