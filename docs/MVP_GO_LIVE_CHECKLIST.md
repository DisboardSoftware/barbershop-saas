# MVP Go-Live Checklist

## Configuration
- [ ] `.env` files created from `.env.example`
- [ ] All `<CHANGE_ME>` placeholders replaced for runtime use
- [ ] CORS origins restricted appropriately

## Runtime Health
- [ ] `docker compose up --build` completes successfully
- [ ] Frontend loads on `http://localhost:3002`
- [ ] `GET /api/health` returns healthy
- [ ] `node scripts/mvp-smoke.js` passes

## Security and Publication
- [ ] No secrets committed
- [ ] No real user/customer/company data included
- [ ] `SECURITY.md` contact is valid
- [ ] `BLUEPRINT.md` sanitization checklist reviewed
