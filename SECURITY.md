# Security Policy

## Reporting a Vulnerability

Please report vulnerabilities privately to the Disboard Software maintainers.

- Do not open public issues for sensitive vulnerabilities.
- Include reproduction steps, impact, and suggested remediation if possible.

## Security Baseline

- Session tokens are persisted in database and revoked on sign-out.
- Passwords are stored as bcrypt hashes.
- Upload pipeline uses MinIO with controlled bucket access.
- CI includes CodeQL analysis.
- Commit history and PRs should be reviewed for secret exposure before merge.
- Secret scanning baseline:
  - GitHub Advanced Security may not be enabled in all environments.
  - Local and CI policy relies on strict `.gitignore`, environment templates, and review discipline.
  - A dedicated secret scanning workflow can be added when platform capability is enabled.

## Response Expectations

- Initial triage within 3 business days.
- Mitigation plan shared after impact confirmation.
- Patch release timelines depend on severity.
