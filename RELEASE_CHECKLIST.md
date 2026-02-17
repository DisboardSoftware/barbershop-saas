# Release Checklist

## Pre-release preparation

- [ ] Ensure target branch is up to date with `main`.
- [ ] Confirm all changes use Conventional Commits.
- [ ] Update `CHANGELOG.md` under `[Unreleased]`.

## Local validation

- [ ] Run `npm ci --legacy-peer-deps`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run test`.
- [ ] Run `npm run build`.
- [ ] Run `npm run prisma:generate` and `npm run prisma:validate`.
- [ ] Start stack with `docker compose up --build -d`.
- [ ] Run smoke test `node scripts/mvp-smoke.js`.
- [ ] Stop stack with `docker compose down -v`.

## Release publication

- [ ] Merge approved PR into `main`.
- [ ] Create SemVer tag: `vMAJOR.MINOR.PATCH`.
- [ ] Publish release notes based on changelog entries.
- [ ] Announce release and track rollout.
