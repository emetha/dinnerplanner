import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import sidebarReducer from "./ducks/sidebar/reducers";
import dishesReducer from "./ducks/dishes/reducers";
import snackbarReducer from "./ducks/snackbar/reducers";

export const rootReducer = combineReducers({
  sidebarReducer: sidebarReducer,
  dishesReducer: dishesReducer,
  snackbarReducer: snackbarReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
