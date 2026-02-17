# Standards Compliance Matrix

Reference baseline: https://github.com/DisboardSoftware/shared-infrastructure

## Shared-infrastructure principles mapping

| Principle | Implementation | Proof |
|---|---|---|
| Modular architecture and scalability | Monorepo with separated frontend/backend/infra and service boundaries | `frontend/`, `backend/`, `infra/`, `docs/10-architecture.md` |
| Standardization and shared practices | Documented engineering conventions and governance lineage | `docs/05-standards.md`, `README.md` |
| Security by design and compliance | Session auth in DB, RBAC, rate limiting, CORS, secret handling policy | `backend/src/routes/auth.js`, `backend/src/middleware/rbac.js`, `backend/src/middleware/rateLimit.js`, `docs/65-security-baseline.md`, `SECURITY.md` |
| Automation and Infrastructure as Code | Docker Compose orchestration, CI pipelines, operational scripts | `docker-compose.yml`, `.github/workflows/ci.yml`, `scripts/` |
| Cost optimization and observability | Minimal logging contract + SLI/SLO placeholders and scalability-ready docs | `backend/src/utils/logger.js`, `docs/60-observability.md`, `docs/61-sli-slo.md` |
| Knowledge sharing and governance | Structured docs, runbooks, incident and release procedures | `docs/`, `RELEASE_CHECKLIST.md`, `docs/80-ops-runbook.md`, `docs/85-incident-response.md` |

## Additional governance enforcement (hardcore)

| Enforcement item | Implementation | Proof |
|---|---|---|
| Naming and repository semantics | Unified naming for project/repo/org/governance chain | `README.md`, `docs/05-standards.md` |
| Branching and release discipline | Changelog + release checklist + branching policy | `CHANGELOG.md`, `RELEASE_CHECKLIST.md`, `docs/75-branching-and-releases.md` |
| Conventional commit policy | commitlint + husky + lint-staged | `commitlint.config.cjs`, `.husky/commit-msg`, `.husky/pre-commit`, `.lintstagedrc.cjs` |
| PR standards and ownership | Enhanced PR template + CODEOWNERS critical paths | `.github/PULL_REQUEST_TEMPLATE.md`, `.github/CODEOWNERS` |
| Mandatory quality gates | CI jobs for validate/prisma/smoke and conventional PR checks | `.github/workflows/ci.yml` |
| Dependency and secret hygiene | Dependabot + env examples + strict gitignore rules | `.github/dependabot.yml`, `.env*.example`, `.gitignore` |
| Tenant-ready enforcement | Tenant model and tenantScope middleware for scoped access | `backend/prisma/schema.prisma`, `backend/src/middleware/tenantScope.js` |
| Incident and operational posture | Ops and incident runbooks | `docs/80-ops-runbook.md`, `docs/85-incident-response.md` |
| Observability contract | Request correlation and structured logs | `backend/src/middleware/requestId.js`, `backend/src/utils/logger.js`, `docs/60-observability.md` |
