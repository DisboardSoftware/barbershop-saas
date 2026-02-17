# Backup and Restore (PostgreSQL)

## Backup
```bash
bash scripts/backup-postgres.sh
```

Output files are written to `./backups` by default.

## Restore
```bash
bash scripts/restore-postgres.sh ./backups/<file>.sql
```

## Notes
- Run against local development environment only.
- Do not store production backups in this repository.
- Treat backups as sensitive artifacts.
