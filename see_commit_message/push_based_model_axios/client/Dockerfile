ARG NODE_VERSION=18-alpine
FROM node:${NODE_VERSION} AS build

WORKDIR /app
COPY . .
ARG VITE_SERVER_LINK
ENV VITE_SERVER_LINK=$VITE_SERVER_LINK
RUN npm ci && npm run build

FROM node:${NODE_VERSION}
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
