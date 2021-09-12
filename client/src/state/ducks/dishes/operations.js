/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack
*/

import actions from "./actions";
import axios from "axios";
import endpoints from "../../../configuration/endpoints";

const fetchDishesRequest = actions.fetchDishesRequest;
const fetchDishesFailure = actions.fetchDishesFailure;
const fetchDishesSuccess = actions.fetchDishesSuccess;

const fetchDishRequest = actions.fetchDishRequest;
const fetchDishFailure = actions.fetchDishFailure;
const fetchDishSuccess = actions.fetchDishSuccess;

const selectedDishDetails = actions.selectedDishDetails;

const fetchDish = (id) => (dispatch) => {

  let url = `${endpoints.api}/recipes/${id}`;

  dispatch(fetchDishRequest());

  axios
    .get(url)
    .then((response) => {
      return dispatch(fetchDishSuccess(response.data));
    })
    .catch((e) => dispatch(fetchDishFailure(e.message)));
};

const fetchDishes = (type, query) => (dispatch) => {
  let url = `${endpoints.api}/recipes?query=${query}&type=${type}`;

  dispatch(fetchDishesRequest());

  axios
    .get(url)
    .then((response) => {
      return dispatch(fetchDishesSuccess(response.data.results));
    })
    .catch((e) => dispatch(fetchDishesFailure(e.message)));
};

export default { fetchDish, fetchDishes, selectedDishDetails };
