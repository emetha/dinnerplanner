import { combineReducers } from "redux";
import types from "./types";
import status from "../../../constants/StatusConstants";

const initialState = {
  fetchedDish: {},
  fetchedDishes: [],
  error: "",
  status: status.LOADED,
  dishDetailsID: "",
};

const dishes = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DISH_SUCCEEDED: {
      return {
        ...state,
        fetchedDish: action.payload,
        status: status.LOADED,
      };
    }
    case types.FETCH_DISHES_SUCCEEDED: {
      return {
        ...state,
        fetchedDishes: action.payload,
        status: status.LOADED,
      };
    }
    case types.FETCH_DISH_REQUESTED: {
      return {
        ...state,
        status: status.LOADING,
      };
    }
    case types.FETCH_DISHES_REQUESTED: {
      return {
        ...state,
        status: status.LOADING,
      };
    }
    case types.FETCH_DISH_FAILED: {
      return {
        ...state,
        error: action.payload,
        status: status.ERROR,
      };
    }
    case types.FETCH_DISHES_FAILED: {
      return {
        ...state,
        error: action.payload,
        status: status.ERROR,
      };
    }
    case types.SELECTED_DISH_DETAILS: {
      return {
        ...state,
        dishDetailsID: action.payload,
      };
    }
    default:
      return state;
  }
};

const dishesReducer = combineReducers({
  dishes,
});

export default dishesReducer;
