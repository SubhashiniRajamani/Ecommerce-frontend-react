#!/bin/bash
set -e

echo "Stopping existing frontend container..."

docker stop ecommerce-frontend || true
docker rm -f ecommerce-frontend || true
docker rmi app || true

echo "Cleaning Docker system..."
docker system prune -af || true

cd /var/www/Ecommerce-frontend-react-main
rm -rf * .*
