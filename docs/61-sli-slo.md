# SLI/SLO (Placeholder)

## Availability

- Target SLO (placeholder): 99.5% monthly API availability.
- SLI source (future): uptime checks against `/api/health`.

## Latency

- Target SLO (placeholder): p95 API latency < 300ms for authenticated reads.
- SLI source (future): request duration metrics by endpoint.

## Error budget

- Placeholder budget: 0.5% monthly failure rate.
- Budget policy: freeze feature releases when budget is exhausted.

## Measurement strategy

Future implementation will use centralized metrics collection and dashboarding to track SLI performance and burn rates.
