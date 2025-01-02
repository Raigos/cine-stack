FROM node:22.12.0

WORKDIR /app

# Install pnpm using npm
RUN npm install -g pnpm@9.15.0

# Copy workspace config
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY packages/shared/ ./packages/shared/

# Copy the entire backend app directory
COPY apps/wrapper/ ./apps/wrapper/

# Install dependencies
RUN pnpm install

WORKDIR /app/apps/wrapper

# Build the application
RUN pnpm build

# Expose the port NestJS runs on
EXPOSE 3000

# Start the server using dev with watching
CMD ["pnpm", "start:dev"]