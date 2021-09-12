/* SELECTOR FUNCTIONS
These are pure functions that get the app state as a parameter and return some data from it, needed in the components.
Together with the operations, the selectors are part of the public interface of the 'duck'.
These functions make sense when you have a more complex app state.
*/

const getSnackData = (state) => {
  return state.snackbarReducer.snack.data;
};

const getSnackbarOpen = (state) => {
  return state.snackbarReducer.snack.open;
};

const snackbarSelectors = {
  getSnackbarOpen,
  getSnackData,
};

export default snackbarSelectors;
