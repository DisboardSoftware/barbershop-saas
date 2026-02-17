# Contributing

Thanks for your interest in improving this public blueprint.

## Scope
- Keep all examples sanitized and fictional.
- Do not add real credentials, personal data, or private infrastructure details.
- Prefer small, focused pull requests.

## Local Development
1. Copy env templates:
   - `cp .env.example .env`
   - `cp backend/.env.example backend/.env`
   - `cp frontend/.env.example frontend/.env`
2. Start stack:
   - `docker compose up --build`
3. Run smoke test:
   - `node scripts/mvp-smoke.js`

## Pull Request Checklist
- [ ] Docs updated when behavior changes.
- [ ] No secrets or production identifiers added.
- [ ] API and UI still pass local smoke checks.
- [ ] Compose config remains runnable for first-time users.
