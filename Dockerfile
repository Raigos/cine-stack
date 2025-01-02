FROM node:22-alpine

WORKDIR /app

COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY packages/shared ./packages/shared
COPY apps/wrapper ./apps/wrapper

RUN npm install -g pnpm
RUN pnpm install

WORKDIR /app/apps/wrapper
CMD ["pnpm", "start"]