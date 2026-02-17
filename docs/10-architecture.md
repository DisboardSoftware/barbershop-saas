# Architecture (C4-style, text)

## Level 1: System Context

- Actors: customers, barbershop staff, administrators
- System: barbershop SaaS product built from this blueprint
- External systems (planned): payment provider, notification provider

## Level 2: Containers

- Frontend container: React SPA served by Nginx
- Backend container: Express API with domain/application logic
- PostgreSQL: transactional persistence
- MinIO: object storage for media

## Level 3: Components (backend)

- Auth routes + middleware: sign-in, session validation, sign-out
- Tenant scope middleware: request-level tenant boundary enforcement
- RBAC middleware: role-based endpoint gating
- User service: user creation/listing
- Session service: token lifecycle and expiration control
- Media service: upload to S3-compatible backend

## Runtime flow

1. Browser calls `/api/*` through Nginx reverse proxy.
2. Backend validates bearer token against `Session` table.
3. Tenant scope is resolved from authenticated user.
4. Route-specific RBAC validates requested action.
5. Data persisted through Prisma to PostgreSQL with tenant scoping.
