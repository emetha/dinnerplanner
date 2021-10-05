import types from "./types";

export const unauthedRedirect = (status) => ({
  type: types.UNAUTHED_REDIRECT,
  payload: status,
});

export const authSuccess = (status) => ({
  type: types.AUTH_SUCCESS,
  payload: status,
});

export const authError = (status) => ({
  type: types.AUTH_ERROR,
  payload: status,
});

const authActions = { unauthedRedirect, authSuccess, authError };

export default authActions;
