/* SELECTOR FUNCTIONS
These are pure functions that get the app state as a parameter and return some data from it, needed in the components.
Together with the operations, the selectors are part of the public interface of the 'duck'.
These functions make sense when you have a more complex app state.
*/

const getFullMenu = (state) => {
  const menu = state.sidebarReducer.firestore.data.menu || [];
  return Object.values(menu).filter((dish) => dish !== null);
};

const getNumberOfServings = (state) => {
  return state.sidebarReducer.input.servings;
};

const getAuth = (state) => {
  return state.sidebarReducer.firebase.auth;
};

const getTotalMenuPrice = (state) => {
  const menu = getFullMenu(state);
  const servings = getNumberOfServings(state);

  return Object.values(menu).reduce(
    (total, dish) => Math.ceil(dish.pricePerServing) * servings + total,
    0
  );
};

const getUID = (state) => {
  return getAuth(state).uid;
};

const getDrawerToggle = (state) => {
  return state.sidebarReducer.drawer.toggle;
};

export default {
  getNumberOfServings,
  getTotalMenuPrice,
  getFullMenu,
  getUID,
  getAuth,
  getDrawerToggle,
};
