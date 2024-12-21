FROM node:22.12.0

WORKDIR /app
  
  # Install pnpm using npm
RUN npm install -g pnpm@9.15.0
  
  # Copy workspace configuration
COPY eslint.config.js ./
COPY index.html ./
COPY package.json ./
COPY tsconfig.app.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
  
  # Copy project files
COPY src/ ./src/

  # Install dependencies
RUN pnpm install

  # Set working directory to client app
WORKDIR /app/apps/client
  
  # Vite's default port
EXPOSE 5173
  
  # Start development server
CMD ["pnpm", "dev"]