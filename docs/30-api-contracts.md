# API Contracts

Base path: `/api`

## Health

### GET `/health`
Response:
```json
{ "ok": true, "ts": "2026-01-01T00:00:00.000Z" }
```

## Auth

### POST `/auth/sign-in`
Request:
```json
{ "email": "admin@local.test", "password": "admin123" }
```
Response:
```json
{
  "token": "session_token",
  "user": {
    "id": "...",
    "tenantId": "local-tenant",
    "email": "admin@local.test",
    "role": "super_admin"
  }
}
```

### POST `/auth/sign-out`
Headers: `Authorization: Bearer <token>`
Response:
```json
{ "ok": true }
```

### GET `/auth/me`
Headers: `Authorization: Bearer <token>`
Response:
```json
{
  "user": {
    "id": "...",
    "tenantId": "local-tenant",
    "email": "admin@local.test",
    "role": "super_admin"
  }
}
```

## Users

### GET `/users`
Role: `super_admin` or `admin`, tenant-scoped.

### POST `/users`
Role: `super_admin` or `admin`, tenant-scoped.
Request:
```json
{ "email": "manager@local.test", "password": "strongpass", "role": "admin" }
```

## Media

### POST `/media/upload`
Role: `super_admin | admin | collaborator`, tenant-scoped.
Content-Type: `multipart/form-data`
Field: `file`
Response:
```json
{ "id": "...", "tenantId": "...", "key": "...", "url": "http://..." }
```

## Error contract

- Standard error payload includes `error`.
- Backend includes `requestId` on middleware-handled errors.
