# Observability

## Current baseline

- HTTP request logging via Morgan with request id correlation.
- Structured JSON logger for application events.
- Correlation ID propagation through `x-request-id` header.
- Centralized error middleware including `requestId` in responses.

## Minimal contract

- Every API request must have a `requestId`.
- Every error response must include `requestId`.
- Logs must include timestamp, level, message, and contextual metadata.

## Planned expansion

- Metrics: request latency, success/error rates, auth failures.
- Traces: OpenTelemetry-based service tracing.
- Dashboards and alerting policy.
