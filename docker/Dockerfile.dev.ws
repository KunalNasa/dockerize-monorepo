FROM oven/bun:1 AS base

WORKDIR /app

COPY ./package.json ./package.json
COPY ./bun.lock ./bun.lock
COPY ./turbo.json ./turbo.json
COPY ./packages ./packages
COPY ./apps/ws-server/package.json ./apps/ws-server/package.json

RUN bun install

COPY ./apps/ws-server ./apps/ws-server

EXPOSE 3000

CMD [ "bun", "run", "docker-dev:ws-server" ]

