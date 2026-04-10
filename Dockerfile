FROM node:25-slim AS builder
WORKDIR /usr/src/app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

FROM node:25-slim
WORKDIR /usr/src/app
RUN corepack enable
COPY --from=builder /usr/src/app /usr/src/app
CMD ["pnpm","exec","quartz","build","--serve"]
