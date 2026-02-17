# Barbershop SaaS Blueprint

This repository is a production-grade blueprint for building barbershop SaaS products under Disboard Software. It is intentionally a runnable foundation, not a finished product.

## What this blueprint includes

- Session-based authentication (Bearer token persisted in database, no JWT)
- RBAC foundation (`super_admin`, `admin`, `collaborator`, `recepcao`, `financeiro`)
- Tenant-ready domain model with mandatory tenant scoping primitives
- Scheduling foundation at architecture/domain level
- Billing placeholder strategy (Stripe-ready TODO)
- Observability placeholder strategy (logs/metrics/traces TODO)
- Full local stack with Docker Compose (PostgreSQL, MinIO, backend, frontend+Nginx)
- Governance gates (Conventional Commits, CI validate/prisma/smoke, CodeQL)

## Quickstart

1. Copy environment values:
   ```bash
   cp .env.example .env
   ```
2. Start everything:
   ```bash
   npm run dev
   ```
3. Open frontend:
   - `http://localhost:8080`
4. Run smoke checks (stack running):
   ```bash
   npm run smoke
   ```

Local default admin (local only):
- Email: `admin@local.test`
- Password: `admin123`

## Repository structure

- `frontend/`: React 19 + Router 7 + CRACO + Tailwind + shadcn/ui starter
- `backend/`: Express 4 + Prisma + PostgreSQL + MinIO integration
- `infra/`: Nginx and infra placeholders (Docker/Terraform notes)
- `docs/`: architecture, domain, API contracts, RBAC, billing, observability, release process
- `docs/standards-compliance.md`: standards mapping and compliance proof matrix
- `scripts/`: smoke and database operation scripts

## Governance mapping

- Exceeds Group defines standards and governance expectations.
- Disboard Software executes those standards as engineering practice.
- This blueprint accelerates downstream product repositories with a consistent baseline.

## Roadmap

- Expand appointment/scheduling bounded context APIs
- Implement billing integration and webhook handling
- Add OpenTelemetry instrumentation and dashboards
- Add production deployment examples (Kubernetes/Terraform)
