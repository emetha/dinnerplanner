/* SELECTOR FUNCTIONS
These are pure functions that get the app state as a parameter and return some data from it, needed in the components.
Together with the operations, the selectors are part of the public interface of the 'duck'.
These functions make sense when you have a more complex app state.
*/

const getFetchedDishes = (state) => {
  return state.dishesReducer.dishes.fetchedDishes;
};

const getFetchedDish = (state) => {
  return state.dishesReducer.dishes.fetchedDish;
};

const getErrorMessage = (state) => {
  return state.dishesReducer.dishes.error;
};

const getStatus = (state) => {
  return state.dishesReducer.dishes.status;
};

const getSelectedDishDetailsID = (state) => {
  return state.dishesReducer.dishes.dishDetailsID;
};

export default {
  getFetchedDishes,
  getFetchedDish,
  getErrorMessage,
  getStatus,
  getSelectedDishDetailsID,
};
