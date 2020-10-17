FROM node:12.18-alpine AS builder
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine AS server

COPY --from=builder /usr/src/app/public /usr/share/nginx/html/

HEALTHCHECK CMD [ "wget", "-q", "localhost" ]
