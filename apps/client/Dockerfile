FROM node:22.12.0

# Accept Railway's environment variables at build time
ARG PORT
ARG RAILWAY_ENVIRONMENT
ARG RAILWAY_SERVICE_NAME

WORKDIR /app

RUN npm install -g pnpm@9.15.0

COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY packages/shared/ ./packages/shared/
COPY apps/client/ ./apps/client/

RUN pnpm install

WORKDIR /app/apps/client

EXPOSE ${PORT:-5173}

CMD ["sh", "-c", "pnpm run dev --host 0.0.0.0 --port ${PORT:-5173}"]