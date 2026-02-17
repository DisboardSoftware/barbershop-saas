# Branching and Releases

## Branch model

- `main`: production-ready branch.
- `develop` (optional): integration branch when release cadence requires it.

## Branch naming

- `feat/*` for features
- `fix/*` for bug fixes
- `chore/*` for maintenance
- `docs/*` for documentation changes

## Tagging

- Use Semantic Version tags: `vMAJOR.MINOR.PATCH`.

## Release flow

1. Open pull request.
2. Pass mandatory CI gates.
3. Merge into `main`.
4. Create version tag.
5. Publish release notes from changelog.
