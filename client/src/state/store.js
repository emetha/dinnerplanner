import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import sidebarReducer from "./ducks/sidebar/reducers";
import apiReducer from "./ducks/api/reducers";
import authReducer from "./ducks/auth/reducers";
import snackbarReducer from "./ducks/snackbar/reducers";

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  api: apiReducer,
  auth: authReducer,
  snackbar: snackbarReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
