# Standards

This document defines technical standards for the Barbershop SaaS Blueprint repository (`barbershop-saas-blueprint`) operated by Disboard Software.

Governance lineage:
- Exceeds Group defines platform standards.
- Disboard Software implements and enforces standards.
- Barbershop SaaS Blueprint applies standards in a product-accelerator baseline.

## Folder conventions

- `frontend/`: React 19 application and UI layer.
- `backend/`: Express 4 API, Prisma ORM, business logic.
- `infra/`: infrastructure assets (Nginx, Docker/Terraform notes).
- `scripts/`: operational and validation automation.
- `docs/`: architecture, governance, runbooks, policies.

## API conventions

- API base path is `/api`.
- Current endpoints are unversioned.
- Versioning strategy placeholder: adopt `/api/v1` for non-backward-compatible changes.
- Error responses include stable `error` message and `requestId` where available.

## Environment variable conventions

- Use uppercase snake case (e.g., `SESSION_TOKEN_TTL_DAYS`).
- Prefix by domain where relevant (`POSTGRES_*`, `MINIO_*`).
- Sensitive values are never committed.
- Example files are required for all active environments.

## Ports policy

- `frontend`: exposed on `8080` by default.
- `backend`: exposed on `3001`.
- `postgres`: exposed on `5432`.
- `minio api`: exposed on `9000`.
- `minio console`: exposed on `9001`.

## Log format expectations

- Backend logs are structured JSON.
- Every request carries correlation id (`x-request-id`).
- Log entries include timestamp, level, message, and contextual metadata.
