# ---------- Build stage ----------
FROM public.ecr.aws/docker/library/node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build


# ---------- Production stage ----------
FROM public.ecr.aws/nginx/nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
