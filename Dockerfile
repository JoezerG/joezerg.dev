FROM node:16.13.1 AS builder
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM arm32v7/nginx:alpine AS server

COPY --from=builder /usr/src/app/public /usr/share/nginx/html/

HEALTHCHECK CMD [ "wget", "-q", "localhost" ]
