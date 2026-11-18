# syntax=docker/dockerfile:1.7

# Install dependencies from the lockfile first so source edits keep this layer cached.
FROM oven/bun:1.3.4-alpine AS dependencies
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Build with the Node.js version required by the Angular CLI. The Bun image's
# bundled Node.js may lag behind Angular's minimum supported patch version.
FROM node:24.15-alpine AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY package.json ./
COPY . .
RUN node ./node_modules/@angular/cli/bin/ng.js build --configuration production

# Serve only the compiled static files; nginx-unprivileged listens on port 8080.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ultra-cours-angular/browser/ /usr/share/nginx/html/
EXPOSE 8080
USER 101
CMD ["nginx", "-g", "daemon off;"]
