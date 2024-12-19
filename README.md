# cine-stack

Test assignment for development position at Entain

## Docker

To run the project with Docker

#### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)   - get docker
- [Docker Compose](https://docs.docker.com/compose/install/) (usually comes with Docker Desktop)

#### First Time Setup

```bash
# Build containers  
docker compose build
```

```bash  
# Start the container 
docker compose up
```  

#### Later  you don't have to build and can just

```bash  
docker compose up
```

### Applications (`apps/`)

- `client/`: React-based frontend application
- `wrapper/`: Nest.js backend wrapper

### Packages (`packages/`)

- `shared/`: Common TypeScript types and validation logic used across applications

## Installation

### Prerequisites

- Node.js: `22.12.0` (recommended)
- pnpm: `9.15.0` (recommended)

```bash
# Check your Node version
node --version
```

```bash
# Check your Node version
node --version
```

### Local Development Setup

```bash
# Download the project
git clone https://github.com/Raigos/cinestack
# Go to project directory
cd cine-stack
# Install the project
pnpm  install
# Run both client and wrapper
pnpm dev:all
# Client should be running at
http://localhost:5173/
```
