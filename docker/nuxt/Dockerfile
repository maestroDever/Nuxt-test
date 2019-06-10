#
# build stage
#

FROM node:lts-alpine as build-stage

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --spa

#
# production stage
#

FROM busybox as production-stage
COPY --from=build-stage /app/dist /app
