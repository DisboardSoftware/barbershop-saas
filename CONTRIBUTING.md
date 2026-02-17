# Contributing

## Development flow

1. Create a branch from `main`.
   - Branch prefixes: `feat/*`, `fix/*`, `chore/*`, `docs/*`.
2. Make focused, reviewable changes.
3. Run quality checks:
   ```bash
   npm run lint
   npm run test
   npm run build
   npm run prisma:validate
   npm run smoke
   ```
4. Open a pull request using the repository template.

## Standards

- Keep code and docs in English.
- Prefer small PRs with clear rationale.
- Include migration notes for schema changes.

## Commit style

Conventional Commits are enforced:

- `feat:`
- `fix:`
- `chore:`
- `docs:`
