import { combineReducers } from "redux";
import types from "./types";

const initialState = {
  status: "",
};

const role = (state = initialState, action) => {
  switch (action.type) {
    case types.UNAUTHED_REDIRECT: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case types.AUTH_SUCCESS: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case types.AUTH_ERROR: {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
};

const apiReducer = combineReducers({
  role,
});

export default apiReducer;
