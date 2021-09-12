import types from "./types";

export const updateServings = (servings) => ({
  type: types.UPDATE_SERVINGS,
  payload: servings,
});

export const toggleDrawer = (open) => ({
  type: types.TOGGLE_DRAWER,
  payload: open,
});

export default {
  updateServings,
  toggleDrawer,
};
