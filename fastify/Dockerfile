FROM node:21-alpine as base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm i

COPY . .

EXPOSE 8080

ENV FASTIFY_PORT=8080

CMD npm start
