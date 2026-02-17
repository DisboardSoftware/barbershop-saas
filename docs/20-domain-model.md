# Domain Model

## Core entities

- Tenant: organizational boundary for data isolation.
- User: authenticated actor with role and tenant association.
- Barber: service provider profile (planned).
- Service: cataloged offering scoped to tenant.
- Schedule: availability definition (planned).
- Appointment: booking instance scoped to tenant.
- Payment/Invoice: billing and revenue tracking (planned).
- Media: uploaded assets associated with tenant.
- Session: persisted bearer token for authenticated access.

## Scoping rules

- Every business record must be tenant-scoped.
- `User.tenantId` is mandatory.
- `Service.tenantId` and `Appointment.tenantId` are mandatory.
- Request handling uses authenticated user tenant context to scope queries.
- Cross-tenant data reads/writes are forbidden by policy.

## Current implementation status

Implemented now:
- Tenant
- User
- Session
- Media
- Service (schema placeholder)
- Appointment (schema placeholder)

Documented for phased implementation:
- Barber, Schedule, Payment/Invoice
