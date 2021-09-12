import { combineReducers } from "redux";
import types from "./types";
import storage from "../../../constants/StorageConstants";

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const inputReducer = (
  state = {
    servings: localStorage.getItem(storage.SERVINGS) || 0,
  },
  action
) => {
  switch (action.type) {
    case types.UPDATE_SERVINGS: {
      const servings = action.payload;
      return {
        ...state,
        servings: servings,
      };
    }
    default:
      return state;
  }
};

const drawerReducer = (
  state = {
    toggle: false,
  },
  action
) => {
  switch (action.type) {
    case types.TOGGLE_DRAWER: {
      const open = action.payload;
      return {
        ...state,
        toggle: open,
      };
    }
    default:
      return state;
  }
};

const sidebarReducer = combineReducers({
  input: inputReducer,
  drawer: drawerReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default sidebarReducer;
