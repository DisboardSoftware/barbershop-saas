# RBAC

RBAC is enforced inside tenant context. Role permissions are evaluated after authentication and tenant scope resolution.

| Role | Description | Tenant context |
|---|---|---|
| `super_admin` | Highest privilege role | Full access within assigned tenant |
| `admin` | Tenant administrator | Management access within tenant |
| `collaborator` | Staff collaborator | Operational endpoints within tenant |
| `recepcao` | Reception desk role | Scheduling/customer operations within tenant |
| `financeiro` | Finance role | Billing/report operations within tenant |

## Current route enforcement

- User list/create: `super_admin`, `admin` with tenant-scoped queries.
- Media upload: `super_admin`, `admin`, `collaborator` with tenant-scoped writes.

## Enforcement order

1. Validate session token.
2. Resolve tenant from authenticated user.
3. Validate role permissions.
4. Execute tenant-scoped data access.
