# Quickstart with React JS and MapLibre GL JS

Quick way to star a web map application with MapLibre GL JS using Create React App.

A simple fullscreen map application as an example on how to use MapTiler maps together with React and MapLibre GL JS for your own React app.

## Getting Started

1. Clone this repo 
 
  ```sh
    git clone https://github.com/maptiler/quickstart-react-maplibre-gl-js.git my-react-map
  ```

2. Navigate to the newly created project folder **my-react-map**
  ```sh
    cd my-react-map
  ```

3. Install dependencies
  ```sh
    npm install
  ```

4. :warning: Open the App.js file and replace **YOUR_MAPTILER_API_KEY_HERE** with your actual [MapTiler API key](https://cloud.maptiler.com/account/keys/).

  :information_source: If you don't have an API KEY you can create it for **FREE** at https://www.maptiler.com/cloud/

5. Start your local environment
  ```sh
    npm start
  ```

6. You will find your app on address http://localhost:3000/. Now you should see the map in your browser.

## Build With

* [React.js](https://reactjs.org/)
* [MapLibre GL JS](https://maplibre.org/)
* [MapTiler](https://www.maptiler.com/)
* [react-map-gl](https://visgl.github.io/react-map-gl/docs/get-started/get-started#using-with-a-mapbox-gl-fork)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more at [How to display MapLibre GL JS map using React JS](https://documentation.maptiler.com/hc/en-us/articles/4405444890897-How-to-display-MapLibre-GL-JS-map-using-React-JS).