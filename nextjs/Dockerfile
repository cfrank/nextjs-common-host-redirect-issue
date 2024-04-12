FROM node:21-alpine as base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
# Install dependencies from pnpm
COPY package.json package-lock.json* ./
RUN npm i


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

EXPOSE 8040

ENV PORT 8040

CMD HOSTNAME="0.0.0.0" npm run start
