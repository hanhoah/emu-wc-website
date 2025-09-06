#!/bin/bash

# Stop the container if it's running
echo "Stopping existing container..."
docker stop emu-wc-container 2>/dev/null || true

# Remove the container
echo "Removing existing container..."
docker rm emu-wc-container 2>/dev/null || true

# Build the new image with pnpm Dockerfile
echo "Building Docker image with pnpm..."
docker build -t emu-wc-image -f Dockerfile.pnpm .

# Start the container with additional resources and configurations
echo "Starting new container..."
docker run \
  -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  -v /app/.next \
  --name emu-wc-container \
  --memory=4g \
  --cpus=2 \
  emu-wc-image