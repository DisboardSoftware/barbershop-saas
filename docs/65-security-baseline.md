# Security Baseline

## Authentication and sessions

- Bearer session tokens are persisted in database (`Session` table).
- Session expiration is enforced server-side.
- Session revocation occurs at sign-out.

## Password handling

- Passwords are hashed with `bcryptjs` before persistence.
- Plaintext passwords are never logged.

## RBAC enforcement

- Route-level role checks are mandatory.
- Access decisions are tenant-aware.

## CORS policy

- CORS origin is configured by environment (`CORS_ORIGIN`).
- Default local origin is `http://localhost:8080`.

## File upload constraints

- Uploads are handled through Multer memory storage.
- Maximum upload size is controlled by `UPLOAD_MAX_BYTES`.
- Uploads require authenticated role access.

## Rate limiting

- Authentication endpoints are protected by rate limiting middleware.
- Policy values should be tuned per environment.

## Secret management

- Secrets are provided through environment variables.
- `.env*` files are excluded from version control.
- Use secret manager integration for non-local environments (TODO).
