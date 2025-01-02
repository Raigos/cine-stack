FROM node:22.12.0

WORKDIR /app

# Install pnpm using npm with specific version
RUN npm install -g pnpm@9.15.0

# Copy workspace config first
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY packages/shared/ ./packages/shared/

# Copy the entire client app directory
COPY apps/client/ ./apps/client/

# Install dependencies
RUN pnpm install

# Set working directory to client app
WORKDIR /app/apps/client

# Vite's default port
EXPOSE 5173

# Start development server
CMD ["pnpm", "dev"]