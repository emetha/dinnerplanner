/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack
*/

import actions from "./actions";

const showActiveSnack = actions.showActiveSnack;
const closeActiveSnack = actions.closeActiveSnack;
const newSnack = actions.newSnack;

const requestSnack =
  ({ severity, message }) =>
  (dispatch) => {
    dispatch(newSnack({ message: message, severity: severity }));
  };

export default {
  closeActiveSnack,
  requestSnack,
  showActiveSnack,
};
