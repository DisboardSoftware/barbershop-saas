#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: bash scripts/restore-postgres.sh ./backups/<file>.sql"
  exit 1
fi

BACKUP_FILE="$1"
if [[ ! -f "$BACKUP_FILE" ]]; then
  echo "Backup file not found: $BACKUP_FILE"
  exit 1
fi

POSTGRES_DB="${POSTGRES_DB:-barbershop_crm}"
POSTGRES_USER="${POSTGRES_USER:-app_user}"

echo "Restoring backup from: $BACKUP_FILE"
docker compose exec -T postgres psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" < "$BACKUP_FILE"

echo "Restore completed"
