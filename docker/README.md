# Docker Images

This uses `docker-compose` to build images.

## Build

To build Docker images:

```sh
npm run build:docker
```

This produces two images:

1. Nuxt app in SPA mode.
   * Tag: `$NAME:$VERSION`
   * Example: `nuxt:1.0.0`
1. Compiled Storybook into a static site.
   * Tag: `$NAME-storybook:$VERSION`
   * Example: `nuxt-storybook:1.0.0`

Where:
* `$NAME` is the `name` value from `package.json`.
  * If `name` is not set it defaults to `nuxt`.
* `$VERSION` is the `version` value from `package.json`

## Run

### To run the Nuxt app:

```
NUXT_IMAGE_NAME_VERSION="nuxt:latest" docker-compose up nuxt
```

The app will be available at: http://localhost:3000

### To run the Storybook:

```
NUXT_IMAGE_NAME_VERSION="nuxt-storybook:latest" docker-compose up storybook
```

The app will be available at: http://localhost:9000

### To shutdown and remove volumes

To completely clear cached volumes, use the following command:

```
docker-compose down --volumes
```

Otherwise data from previous volumes will be use on subsequent restarts.