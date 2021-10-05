/* SELECTOR FUNCTIONS
These are pure functions that get the app state as a parameter and return some data from it, needed in the components.
Together with the operations, the selectors are part of the public interface of the 'duck'.
These functions make sense when you have a more complex app state.
*/

const getFetchedDishes = (state) => {
  return state.api.spoonacular.fetchedDishes;
};

const getFetchedDish = (state) => {
  return state.api.spoonacular.fetchedDish;
};

const getErrorMessage = (state) => {
  return state.api.spoonacular.error;
};

const getStatus = (state) => {
  return state.api.spoonacular.status;
};

const getSelectedDishDetailsID = (state) => {
  return state.api.spoonacular.dishDetailsID;
};

const apiSelectors = {
  getFetchedDishes,
  getFetchedDish,
  getErrorMessage,
  getStatus,
  getSelectedDishDetailsID,
};

export default apiSelectors;
