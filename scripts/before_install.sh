#!/bin/bash
set -e

echo "Stopping existing frontend container..."

docker stop ecommerce-frontend || true
docker rm ecommerce-frontend || true

echo "Cleaning Docker system..."
docker system prune -af || true

