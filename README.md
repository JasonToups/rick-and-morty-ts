# Rick and Morty API

This site uses the Rick and Morty API to render a database of characters, locations and episodes.

The finished site can be found at:

https://jasontoups.github.io/rick-and-morty-ts/

# Project Requirements

Bootstrap a Create React Application perferably with Typescript.

ex:

```
npx create-react-app my-app --template typescript
```

or

```
yarn create react-app my-app --template typescript
```

Ensure that you are using the [latest LTS node release](https://nodejs.org/en/about/releases/).

Use the Rick and Morty REST API here: https://rickandmortyapi.com/documentation.

Do not use one of the Rick and Morty libraries listed on the page, please use a REST client of you choice, ex: Axios.

Take a look at the API docs for characters: https://rickandmortyapi.com/documentation/#character

The following is a prioritized list of features.

1. Design and build out a functioning character listing page with pagination.
2. Users can filter the results
3. The app is responsive
4. Bonus points if you take advantage of the location and episode endpoints to build your Rick and Morty user experience

# Todos

## API Call for All Characters with Axios

1. DONE - On page load, an api call should be made to get all of the characters from the database.
2. DONE - Save the api response in state on the Rendered Cards component.

## API Call for Filtered Results with Axios

1. The results of the filtered call.

## Cards

1. IN PROGRESS - Create single card component to pass props into it to populate the card fields. I don't think we need state on this, since we want to update the fields on the card after it renders.

## Rendered Cards

1. IN PROGRESS - Create the rendered cards container that will take the response from the API calls and render the results. Should pass api results into the container. This will be handled with state.

## Metadata

1. Update the header with the whole logo, and see if I can grab the Rick & Morty icon from the api site. for the favicon

# API Results

## Characters

API Endpoint:
https://rickandmortyapi.com/api/character/

```
{
  "info": {
    "count": 671,
    "pages": 34,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        ...(episode array continued)
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    ...(results array continued)
```

## Locations

API endpoint: https://rickandmortyapi.com/api/location/

```
{
  "info": {
    "count": 108,
    "pages": 6,
    "next": "https://rickandmortyapi.com/api/location/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Earth (C-137)",
      "type": "Planet",
      "dimension": "Dimension C-137",
      "residents": [
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/45",
        ...(episodes array continued)
      ],
      "url": "https://rickandmortyapi.com/api/location/1",
      "created": "2017-11-10T12:42:04.162Z"
    },
    ...(results array continued)
```

## Episodes

Api endpoint: https://rickandmortyapi.com/api/episode/

```
{
  "info": {
    "count": 41,
    "pages": 3,
    "next": "https://rickandmortyapi.com/api/episode/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Pilot",
      "air_date": "December 2, 2013",
      "episode": "S01E01",
      "characters": [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/35",
        ...(characters array continued)
      ],
      "url": "https://rickandmortyapi.com/api/episode/1",
      "created": "2017-11-10T12:56:33.798Z"
    },
    ...(results array continued)
```

# Tech Requirements

## Design and build out a functioning character listing page with pagination.

There should be a list of characters on page load, and if we have an infinite scroll, then users could scroll indefinitely through the pagination.

The character listing card should have the image of the character, their name and all info that appears from the api return to the side.
Under both there should be two accordion sections for location and episodes array.

## Users can filter the results

There should be a search bar on the page header somewhere users can search for their characters.

I could do a search that possibly submits a request for every keypress. I have to see how long it takes to get the results back.

Otherwise, I can just use a submit button.

## The app is responsive

This shouldn’t be an issue. I could use CSS grid along with column overflow to wrap the results when they reach the edge of the page.

I could do a media query to control the width of the cards, possibly.

## Bonus points if you take advantage of the location and episode endpoints to build your Rick and Morty user experience

I would like to see more info about the location and episodes of the character, so I could make a request from the characters api, get the return, then loop through the return and make a request for the location and episodes from the api return of the characters.

## Handling Populating the Location Information

On the Character API return, we see the origin property has the display name of the planet with name, and the next property is url. We can make a direct api request for location information from this url and display it directly.

## Handling Populating the Episodes

On the Character API return, there is an array of episodes urls. The names of the episodes are not included.
So we could loop through the episodes array, and display the names of the episodes. When the user clicks on the episode name, and accordion pops down and displays the rest of the information.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

This uses [gh-pages](https://www.npmjs.com/package/gh-pages) to create a build and deploys the build from the gh-pages branch to the github page.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
