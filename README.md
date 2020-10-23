# Rick and Morty API

This site uses the Rick and Morty API to render a database of characters, locations and episodes. 

# Requirements

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




----
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
