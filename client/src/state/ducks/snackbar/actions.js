import types from "./types";

export const newSnack = (data) => ({
  type: types.NEW_SNACK,
  payload: data,
});

export const showActiveSnack = () => ({
  type: types.SHOW_ACTIVE_SNACK,
});

export const closeActiveSnack = () => ({
  type: types.CLOSE_ACTIVE_SNACK,
});

export default {
  newSnack,
  showActiveSnack,
  closeActiveSnack,
};
