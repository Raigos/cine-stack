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
COPY apps/wrapper/ ./apps/wrapper/

RUN pnpm install

WORKDIR /app/apps/wrapper

RUN pnpm build

EXPOSE ${PORT:-3000}

CMD ["sh", "-c", "PORT=${PORT:-3000} pnpm start:prod"]