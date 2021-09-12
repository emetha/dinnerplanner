import types from "./types";

export const fetchDishesSuccess = (dishes) => ({
  type: types.FETCH_DISHES_SUCCEEDED,
  payload: dishes,
});

export const fetchDishesFailure = (error) => ({
  type: types.FETCH_DISHES_FAILED,
  payload: error,
});

export const fetchDishesRequest = () => ({
  type: types.FETCH_DISHES_REQUESTED,
});

export const fetchDishSuccess = (dish) => ({
  type: types.FETCH_DISH_SUCCEEDED,
  payload: dish,
});

export const fetchDishFailure = (error) => ({
  type: types.FETCH_DISH_FAILED,
  payload: error,
});

export const fetchDishRequest = () => ({
  type: types.FETCH_DISH_REQUESTED,
});

export const selectedDishDetails = (id) => ({
  type: types.SELECTED_DISH_DETAILS,
  payload: id,
});

export default {
  fetchDishRequest,
  fetchDishesRequest,
  fetchDishFailure,
  fetchDishesFailure,
  fetchDishSuccess,
  fetchDishesSuccess,
  selectedDishDetails,
};
