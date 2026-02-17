# Release Process

## Versioning

Use SemVer:
- MAJOR for incompatible API/data changes
- MINOR for backward-compatible features
- PATCH for fixes

## Environments

- Local: Docker Compose
- Staging: planned
- Production: planned

## Database migration policy

- Prisma migrations are required for schema changes.
- Apply migration before app rollout.
- Rollback strategy:
  - restore from latest validated backup
  - deploy previous stable version
