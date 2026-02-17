#!/usr/bin/env bash
set -euo pipefail

TIMESTAMP="$(date +%Y%m%d_%H%M%S)"
BACKUP_DIR="${BACKUP_DIR:-./backups}"
mkdir -p "$BACKUP_DIR"

POSTGRES_DB="${POSTGRES_DB:-barbershop_saas}"
POSTGRES_USER="${POSTGRES_USER:-app_user}"
OUTPUT_FILE="$BACKUP_DIR/postgres_${TIMESTAMP}.sql"

echo "Creating backup: $OUTPUT_FILE"
docker compose exec -T postgres pg_dump -U "$POSTGRES_USER" "$POSTGRES_DB" > "$OUTPUT_FILE"

echo "Backup completed: $OUTPUT_FILE"
