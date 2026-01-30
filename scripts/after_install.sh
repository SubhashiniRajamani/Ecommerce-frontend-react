#!/bin/bash
set -e

AWS_REGION=us-east-1
AWS_ACCOUNT_ID=313530061217
IMAGE_NAME=ecommerce-frontend

echo "Logging in to ECR..."
aws ecr get-login-password --region $AWS_REGION | \
docker login --username AWS --password-stdin \
$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

echo "Pulling latest frontend image..."
docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_NAME:latest

echo "Running frontend container..."
docker run -d \
  --name ecommerce-frontend \
  -p 3000:80 \
  --restart always \
  $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_NAME:latest

