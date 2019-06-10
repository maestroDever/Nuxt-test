#!/bin/sh

set -x

## run jq command inside docker, in case there is no local version
## Command: https://stedolan.github.io/jq/
## Docker Image: https://github.com/stedolan/jq
JQ="docker run -i --rm stedolan/jq"

export PACKAGE_NAME=$($JQ -r '.name // "nuxt"' < package.json)
export PACKAGE_VERSION=$($JQ -r '.version // "1.0.0"' < package.json)

export NUXT_IMAGE_NAME="$PACKAGE_NAME"
export NUXT_IMAGE_NAME_VERSION="$NUXT_IMAGE_NAME:$PACKAGE_VERSION"

export STORYBOOK_IMAGE_NAME="$NUXT_IMAGE_NAME-storybook"
export STORYBOOK_IMAGE_NAME_VERSION="$STORYBOOK_IMAGE_NAME:$PACKAGE_VERSION"

docker-compose --project-name="$PACKAGE_NAME" build --parallel

## apply "latest" tags to the images
docker tag "$NUXT_IMAGE_NAME_VERSION" "$NUXT_IMAGE_NAME:latest"
docker tag "$STORYBOOK_IMAGE_NAME_VERSION" "$STORYBOOK_IMAGE_NAME:latest"
