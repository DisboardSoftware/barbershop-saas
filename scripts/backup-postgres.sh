#!/usr/bin/env bash
set -euo pipefail

mkdir -p backups
TS="$(date +%Y%m%d-%H%M%S)"
OUT="backups/postgres-${TS}.sql"

DB_USER="${POSTGRES_USER:-barbershop}"
DB_NAME="${POSTGRES_DB:-barbershop_saas}"

docker compose exec -T postgres pg_dump -U "$DB_USER" "$DB_NAME" > "$OUT"

echo "Backup created at $OUT"
