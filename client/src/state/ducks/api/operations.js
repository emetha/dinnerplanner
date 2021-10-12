/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack
*/

import actions from "./actions";
import axios from "axios";
import endpoints from "../../../configuration/endpoints";
import firebase from "firebase/compat/app";

const fetchDishesRequest = actions.fetchDishesRequest;
const fetchDishesFailure = actions.fetchDishesFailure;
const fetchDishesSuccess = actions.fetchDishesSuccess;

const fetchDishRequest = actions.fetchDishRequest;
const fetchDishFailure = actions.fetchDishFailure;
const fetchDishSuccess = actions.fetchDishSuccess;

const selectedDishDetails = actions.selectedDishDetails;

const fetchDish = (id) => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let url = `${endpoints.api}/recipes/${id}`;
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then((token) => {
          dispatch(fetchDishRequest());
          axios
            .get(url, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              return dispatch(fetchDishSuccess(response.data));
            })
            .catch((e) => dispatch(fetchDishFailure(e.message)));
        });
    } else {
      console.error(`User is signed out...`);
    }
  });
};

const fetchDishes = (option, query) => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let url = `${endpoints.api}/recipes?query=${query}&type=${option}`;
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then((token) => {
          dispatch(fetchDishesRequest());
          axios
            .get(url, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              return dispatch(fetchDishesSuccess(response.data.results));
            })
            .catch((e) => dispatch(fetchDishesFailure(e.message)));
        });
    } else {
      console.error(`User is signed out...`);
    }
  });
};

const apiOperations = { fetchDish, fetchDishes, selectedDishDetails };

export default apiOperations;
