#
# build stage
#

FROM node:lts-alpine as build-stage

ENV NODE_ENV=production

WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install -s --only=dev
COPY . .
RUN npm run build:storybook -- --quiet

#
# production stage
#

FROM busybox as production-stage
COPY --from=build-stage /app/dist /app
