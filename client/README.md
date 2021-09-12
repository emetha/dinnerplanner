# Dinner Planner React

This is a project that I worked with in my DH2642 Interaction Programming and the Dynamic Web course. After the course, to learn more about Redux, I refactored the code to use Redux and updated the application's views to use Material UI for a better UI experience. 

## How to get started

1. First, make sure that you have npm installed on your system (follow the instructions
   at [Installing Node](https://docs.npmjs.com/getting-started/installing-node). 

2. Run `npm install` through the terminal in the root of the repository. Let it
   install all the dependencies.

3. Run `npm start` through the terminal. This will start the webserver and the application should pop up in your
   browser ready for use. 

## Understanding the startup code

* `src/state` - this is where the Redux code is found. Contains the reducers, actions, selectors, thunks, etc. to manage the `dishes` and `menu` states. 
* `src/index.js` - this is where React is started. 
* `src/App.js` - root component, contains the different routes in our application. 
* `src/view` - contains the container and presentational components. 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
