import { combineReducers } from "redux";
import types from "./types";

const snack = (
  state = {
    data: {},
    open: false,
  },
  action
) => {
  switch (action.type) {
    case types.NEW_SNACK: {
      const data = action.payload;
      return {
        ...state,
        data: data,
        open: true,
      };
    }
    case types.CLOSE_ACTIVE_SNACK: {
      return {
        ...state,
        open: false,
      };
    }
    case types.SHOW_ACTIVE_SNACK: {
      return {
        ...state,
        open: true,
      };
    }
    default:
      return state;
  }
};

const snackbarReducer = combineReducers({
  snack,
});

export default snackbarReducer;
