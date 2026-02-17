#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <backup-file.sql>"
  exit 1
fi

BACKUP_FILE="$1"
if [[ ! -f "$BACKUP_FILE" ]]; then
  echo "Backup file not found: $BACKUP_FILE"
  exit 1
fi

DB_USER="${POSTGRES_USER:-barbershop}"
DB_NAME="${POSTGRES_DB:-barbershop_saas}"

docker compose exec -T postgres psql -U "$DB_USER" "$DB_NAME" < "$BACKUP_FILE"

echo "Restore completed from $BACKUP_FILE"
