/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack
*/

import actions from "./actions";

const unauthedRedirect = (status) => (dispatch) => {
  dispatch(actions.unauthedRedirect(status));
};

const authSuccess = (status) => (dispatch) => {
  dispatch(actions.authSuccess(status));
};

const authError = (error) => (dispatch) => {
  dispatch(actions.authError(error));
};

const authOperations = { unauthedRedirect, authSuccess, authError };

export default authOperations;
