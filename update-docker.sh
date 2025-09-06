#!/bin/bash

# Container stoppen, falls er läuft
echo "Stoppe vorhandenen Container..."
docker stop emu-wc-container 2>/dev/null || true

# Container entfernen
echo "Entferne vorhandenen Container..."
docker rm emu-wc-container 2>/dev/null || true

# Image neu bauen
echo "Baue Docker-Image neu..."
docker build -t emu-wc-image .

# Container starten
echo "Starte neuen Container..."
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules --name emu-wc-container emu-wc-image
