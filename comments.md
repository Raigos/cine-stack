# Root level pnpm-workspace.yaml

packages:

- "apps/*"
- "packages/*"

# Root level package.json

{
"name": "cine-stack",
"version": "1.0.0",
"description": "A cinema management application monorepo showcasing full-stack development with modern web
technologies.",
"private": true,
"scripts": {
"dev": "pnpm -r dev",
"build": "pnpm -r build",
"test": "pnpm -r test"
},
"author": "Raigo Tuulik",
"license": "CC-BY-NC-4.0"
}

# Docker Compose file (docker-compose.yml)

services:
client:
build:
context: .
dockerfile: apps/client/Dockerfile
ports:

- "3000:3000"
  volumes:
- ./apps/client:/app/client
- ./packages:/app/packages

wrapper:
build:
context: .
dockerfile: apps/wrapper/Dockerfile
ports:

- "4000:4000"
  volumes:
- ./apps/wrapper:/app/wrapper
- ./packages:/app/packages

# Example Dockerfile for client (apps/client/Dockerfile)

FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy workspace config and package.json files

COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY pnpm-lock.yaml ./

# Copy source code

COPY apps/client ./apps/client
COPY packages ./packages

# Install dependencies

RUN pnpm install --frozen-lockfile

WORKDIR /app/apps/client
CMD ["pnpm", "dev"]

# Example Dockerfile for wrapper (apps/wrapper/Dockerfile)

FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy workspace config and package.json files

COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY pnpm-lock.yaml ./

# Copy source code

COPY apps/wrapper ./apps/wrapper
COPY packages ./packages

# Install dependencies

RUN pnpm install --frozen-lockfile

WORKDIR /app/apps/wrapper
CMD ["pnpm", "dev"]

# packages/shared/package.json

{
"name": "@cine-stack/shared",
"version": "1.0.0",
"description": "Shared utilities, types for the cine-stack application.",
"main": "index.js",
"private": true,
"author": "Raigo Tuulik",
"license": "CC-BY-NC-4.0"
}

# apps/client/package.json

{
"name": "@cine-stack/client",
"version": "1.0.0",
"description": "Frontend web application for cinema management, allowing users to list movies by number and search by
title.",
"private": true,
"author": "Raigo Tuulik",
"license": "CC-BY-NC-4.0"
}

# apps/wrapper/package.json

{
"name": "@cine-stack/wrapper",
"version": "1.0.0",
"description": "Backend service wrapper handling movie listings and title search operations for the cinema management
system.",
"private": true,
"author": "Raigo Tuulik",
"license": "CC-BY-NC-4.0"
}