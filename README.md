# Hacker News Clone

## Overview

This is a Hacker News clone which runs as a single page application and fetches data from the [Hacker News API](https://github.com/HackerNews/API).

The UX is that of an infinite scrolling page with 10 initial posts visible and 10 more added each time the user scrolls to the end of the screen. The user can switch between top posts and new posts using a simple navigation and the app is fully responsive.

## Design and technical choices

I chose to develop this application using React and used [Create React App](https://github.com/facebook/create-react-app) to bootstrap it.

I used [Material UI](https://mui.com/) to reduce the amount of design decisions and speed up development. While I was able to rely on a lot of the built in design & layout features of Material UI, there was still some custom CSS required, primarily for layout.

This also allowed me to focus on creating a good UX and ensure time for adequate testing.

Where possible I have tried to maintain an abstraction on top of Material UI using higher-level wrapper components so that in theory, Material UI could be swapped out for a custom solution or alternative component library. This also has the effect of creating a more readable component hierarchy with less boilerplate.

## Testing

The tests cover some unit and integration points with the UI using [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

I spent more time setting up an end-to-end test suite which utilises [Micorsoft Playwright](https://playwright.dev/) to run browsers tests.

I felt like these tests allowed me to cover more crucial behaviour from the user's perspective across multiple browsers.

Playwright has very powerful API, a great debugging experience and in the case of this application, allowed me to isolate the browsing experience with ease, preventing the live API from being hit during tests in addition to being lightweight to run three browsers contexts at a time.

The test coverage could definitely be improved but I have tried to demonstrate a broad approach to testing.

## Data

The API is designed in such a way to require a significant amount of HTTP requests on any page load. As there is no way to retrieve posts in bulk, each post has to be requested on an individual basis.

The application initially fetches a list of 500 unique posts IDs (not configurable) and for each ID, fetches the corresponding post data, in batches of 10.

The application would benefit significantly from a client side caching solution as post content does not change too much with exceptions for things like comment count. Due to time constraints I had to forgo this addition and as a result a tonne of avoidable http requests are made when switching from top posts to new posts.

## Running and testing the application

The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and comes with some standard npm scripts for running the app locally and for running tests.

Before running any scripts, please install dependencies with `npm install` first.

The browsers required for end to end tests will also be installed during the postinstall process.

Then, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the unit + integration test runner in the interactive watch mode.

### `npm run test:e2e`

Launches end to end tests in headless mode. These tests will not work without a running application, so please run `npm start` first.

### `npm run test:e2e:headed`

Launches end to end tests in headed mode. These tests will not work without a running application, so please run `npm start` first.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
