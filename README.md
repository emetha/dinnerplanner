# Dinner Planner

This is a project that I worked with in my DH2642 Interaction Programming and the Dynamic Web course. After the course, to learn more about Redux, I refactored the code to use Redux and updated the application's views to use Material UI for a better UI experience. Furthermore, Firebase firestore and authentication was added for a more scalable approach when storing data. In addition, to hide the spoonacular API key: NodeJs, Express, and Google Cloud Functions were used to create a proxy server. 

The Dinner Planner web application allows users to:
1. Signin/Login to the application.
2. Search for recipes from Spoonacular.
3. Save the recipes (i.e. the cost, instructions, ingredients, etc.)
4. Review the saved recipes and allow user to delete recipe if unwanted.
5. Download the saved recipes as a PDF for later printing.

## Overall Structure

```bash
.
├── functions                   # Google Cloud Functions (contains the code for GCP development) 
├── client                      # Client code / Our code for frontend development.
│   │
│   └── src 
│       │ 
│       ├── assets              # Contains the assets used in the client app. 
│       ├── configuration       # Contains the configurations (i.e. firebase config, development/production endpoints) 
│       ├── constants           # Constants used in the client app.
│       ├── state               # Contains the Redux state management (i.e. actions, reducers, selectors), follows the Redux-Ducks file structure approach.
│       └── view                # Contains the React component and containers.                 
│                     
└── README.md
```

## Getting Started

Here I will describe the steps to start developing in the client side as well as the server/firebase side. 

### Client Side Development

To start development of the React app (if you have just cloned the repository, otherwise skip to step 3):

1. First, make sure that you have npm installed on your system (follow the instructions at [Installing Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).
2. Run `npm install` through the terminal in the root of the repository. Let it install all the dependencies.
3. Run `npm start` through the terminal. This will start the webserver and the application should pop up in your browser ready for use.

You should now be able to develope the React App. 

### Server Side Development

Here the steps in developing with the Google Cloud Functions are described. We make use of the Firebase emulators:
1. First, check if Firebase CLI is installed by running `firebase --version`. If it is installed, skip to step 4.
2. Install Firebase CLI following the instructions [here](https://firebase.google.com/docs/cli#install_the_firebase_cli). 
3. Run `firebase login` to login to firebase CLi. 
4. If you haven't already done so, initialize the current working directory as a Firebase project by running `firebase init`.
5. Set up the Emulator Suite by running `firebase init emulators`. Select emulators of interest (in our case we are using `functions`, `firestore`, `authentication`, and `hosting)`.
6. Once set up, go to the functions folder and run `firebase functions:config:get > .runtimeconfig.json`. This will allow you to use the spoonacular API key and endpoint. If this is not yet set up, use the command `firebase functions:config:set some-service.environment-value=insert-value` (i.e.`firebase functions:config:set spoonacular.key=123abc`).
7. Lastly, run `firebase emulators:start` to start development. 

### Deployment

To deploy our web app, we first need to:
1. Go to the root directory.
2. Run `npm run build`. This will create a production build of our React web app. 
3. Run `firebase deploy` to deploy our web app, or firebase functions. 


