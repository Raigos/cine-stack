FROM node:22.12.0

WORKDIR /app

# Install pnpm using npm
RUN npm install -g pnpm@9.15.0

# Copy root level configuration first
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./

# Copy all apps and packages
COPY apps/ ./apps/
COPY docs/ ./docs/
COPY packages/ ./packages/

# Install dependencies for all workspaces
RUN pnpm install --lockfile-only

# Build all applications and packages
RUN pnpm -r build

# Expose both ports (3000 for backend, 5173 for frontend)
EXPOSE 3000 5173

# Use a process manager or your custom start script
CMD ["pnpm", "dev:all"]