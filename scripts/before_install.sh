#!/bin/bash
set -e

echo "Stopping existing frontend container..."

docker stop reactcon || true
docker rm -f reactcon || true

echo "Cleaning Docker system..."
docker system prune -af || true

