# NODE-JS-PRO-2-HW

## HW-05: Docker

Fastify API (`GET /health`, `GET /users`) + Postgres.

### Запуск

```bash
docker compose up -d
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/health
```

Очікується `200`. Зупинка: `docker compose down` (без `-v` — дані в томі лишаються).

### Розміри образів

| Образ | SIZE |
|-------|------|
| `hw05-api-bad` (`Dockerfile.bad`, `node:22`) | **1.15 GB** |
| `hw05-api` (`Dockerfile`, multi-stage + `node:22-slim`) | **243 MB** |

Різниця: повний `node:22` тягне зайвий toolchain, а slim + multi-stage з `npm ci --omit=dev` лишає в фіналі лише runtime і prod-залежності.

### Persistence

```bash
docker compose exec db psql -U app -d app -c "CREATE TABLE hw05_check(id int);"
docker compose down
docker compose up -d
docker compose exec db psql -U app -d app -c "\dt"
```

Після `down` без `-v` таблиця `hw05_check` на місці (том `pgdata`).
