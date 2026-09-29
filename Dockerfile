# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.18.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

# Install dependencies
FROM base AS deps

COPY package.json package-lock.json ./
RUN npm ci

# Build Next.js application
FROM base AS build

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS final

ENV NODE_ENV=production

COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public

EXPOSE 3000

CMD ["npm", "start"]