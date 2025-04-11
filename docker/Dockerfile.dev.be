FROM oven/bun:1 AS base

WORKDIR /app

COPY ./package.json ./package.json
COPY ./bun.lock ./bun.lock
COPY ./turbo.json ./turbo.json
COPY ./packages ./packages
COPY ./apps/http-server/package.json ./apps/http-server/package.json

RUN bun install

COPY ./apps/http-server ./apps/http-server

EXPOSE 8080

CMD [ "bun", "run", "docker-dev:http-server" ]

