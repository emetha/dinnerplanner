/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack
*/

import { SERVINGS } from "../../../constants/StorageConstants";
import actions from "./actions";

const updateServings = (servings) => (dispatch) => {
  localStorage.setItem(SERVINGS, servings);
  dispatch(actions.updateServings(servings));
};

const toggleDrawer = (open) => (dispatch) => {
  dispatch(actions.toggleDrawer(open));
};

const sidebarOperations = {
  updateServings,
  toggleDrawer,
};

export default sidebarOperations;