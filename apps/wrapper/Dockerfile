FROM node:22.12.0

WORKDIR /app
  
  # Install pnpm using npm
RUN npm install -g pnpm@9.15.0
  
  # Copy configuration files first
COPY eslint.config.mjs ./
COPY nest-cli.json ./
COPY package.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./
  
  # Copy source code and tests
COPY src/ ./src/

  # Install dependencies
RUN pnpm install

  # Build the application
RUN pnpm build
  
  # Expose the port NestJS runs on (typically 3000)
EXPOSE 3000
  
  # Start the server using dev with watching
CMD ["pnpm", "start:dev"]