# Vue / Nuxt Test Assignment

This is a demo test assignment. It is not related to the actual, future work.

This assignment will be used to evaluate your skills as a Vue, Nuxt and TypeScript developer.

You may use any third party components, plugins or tools, as you wish, at your discretion.

Entire NPM is at your disposal.

Please make sure to display your TypeScript abilities via interfaces or types, where applicable.

Approximate time to complete the assignment is 2 hours.

# Before you start

Please clone this repository to your machine.

Please keep the original git history and continue your commits. This way it will be easy to see
the diff between the original code and your work.

# Objective

Create a simple web application to present the weather information from the [Dark Sky API](https://darksky.net/dev/docs).

See the [following wireframe](https://wireframe.cc/d0gMNU) for a visual approximation.

# Application Specification

This application has only one screen. This screen holds all of the components described below.

## City Search

The screen has a search input field to search for cities. This search box has auto-complete functionality.

You may hard code the list of cities (minimum of 10) or use any flat file database (e.g. JSON, NPM module).

When user searches for a city, selects it and clicks "Add" button, the city is added to the Weather Dashboard.

## Weather Dashboard

The second part of the screen is a weather dashboard that displays the current weather for cities
chosen by the user.

User may choose zero or more cities to display on the dashboard.

The dashboard consists entirely of a list of Weather Cards.

## Weather Card

The Weather Card is a UI piece that displays the **current** weather for a single city.

The Weather Card should contain the following information:

* City name
* Summary (e.g. "Mostly Cloudy")
* Icon (e.g. "partly-cloudy-night")
* Current Temperature

## State

The application should save the selected cities in `localStorage` and should survive a window reload.

The weather data should not be saved to the state, and should be re-fetched when the window is reloaded.

# What will be evaluated

* Ability to architect
* Bug-free code
* Ability to follow directions
* Coding style
* Ability to comment and document code

# What will not be evaluated

* Design skills
* UI skills

# Assignment Submission

Please commit your work to git, and host it on your own GitHub or GitLab repository.

Please share your repository URL with us.

Successful submission should build and pass all linter tests:

```sh
npm run lint
npm run build
```

# Dark Sky API Key

This API key has a limit of 1,000 requests per day.

Please try to be conscious of that, as there might be a couple of developers using it at the same time.

If you run out of requests, you may register for your own API key for free.

```
d386ebd12a182116dc3d25b074bfbcf4
```
