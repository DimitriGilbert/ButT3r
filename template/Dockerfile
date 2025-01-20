##### DEPENDENCIES

# Node.js dependencies
FROM --platform=linux/amd64 node:20-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app
# COPY prisma ./
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* bun.lockb* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm i; \
    elif [ -f bun.lockb ]; then echo "Skipping node deps for Bun build" && exit 0; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Bun dependencies
FROM --platform=linux/amd64 oven/bun:alpine AS bun_deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN if [ -f bun.lockb ]; then bun install; \
    else echo "No bun.lockb found" && exit 0; \
    fi

##### BUILDER

FROM --platform=linux/amd64 oven/bun:alpine AS builder
WORKDIR /app
COPY . .

# Install and build based on package manager
RUN if [ -f bun.lockb ]; then \
        echo "Using Bun builder" && \
        bun install; \
    else \
        echo "Using Node.js builder" && \
        if [ -f yarn.lock ]; then yarn install; \
        elif [ -f package-lock.json ]; then npm install; \
        elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm i; \
        else echo "No lockfile found." && exit 1; \
        fi \
    fi

##### PRODUCTION

FROM --platform=linux/amd64 gcr.io/distroless/nodejs20-debian12 AS production
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public/
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next/static ./.next/static/

EXPOSE 3000
ENV PORT 3000
CMD ["server.js"]

##### DEVELOPMENT

FROM builder AS development
EXPOSE 3000
CMD if [ -f bun.lockb ]; then \
        bun run dev; \
    else \
        if [ -f yarn.lock ]; then yarn dev; \
        elif [ -f package-lock.json ]; then npm run dev; \
        elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
        fi \
    fi

FROM ${NODE_ENV:-development} AS final
