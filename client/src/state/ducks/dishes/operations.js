/* OPERATIONS = REDUX THUNKS
This file defines the public interface of the duck -- what can be dispatched from components
Simple operations are just about forwarding an action creator, ex: simpleQuack
Complex operations involve returning a thunk that dispatches multiple actions in a certain order, ex: complexQuack
*/

import actions from "./actions";
import axios from "axios";

const fetchDishesRequest = actions.fetchDishesRequest;
const fetchDishesFailure = actions.fetchDishesFailure;
const fetchDishesSuccess = actions.fetchDishesSuccess;

const fetchDishRequest = actions.fetchDishRequest;
const fetchDishFailure = actions.fetchDishFailure;
const fetchDishSuccess = actions.fetchDishSuccess;

const selectedDishDetails = actions.selectedDishDetails;

const fetchDish = (id) => (dispatch) => {

  dispatch(fetchDishRequest());

  const options = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${dishId}/information`,
    headers: {
      "x-rapidapi-host": `${process.env.ENDPOINT}`,
      "x-rapidapi-key": `${process.env.API_KEY}`,
    },
  };

  axios
    .request(options)
    .then((response) => {
      return dispatch(fetchDishSuccess(response.data));
    })
    .catch((e) => dispatch(fetchDishFailure(e.message)));
};

const fetchDishes = (type, query) => (dispatch) => {

  dispatch(fetchDishesRequest());

   const options = {
     method: "GET",
     url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
     params: {
       query: query,
       number: "25",
       offset: "0",
       type: type,
     },
     headers: {
       "x-rapidapi-host": `${process.env.ENDPOINT}`,
       "x-rapidapi-key": `${process.env.API_KEY}`,
     },
   };

  axios
    .request(options)
    .then((response) => {
      return dispatch(fetchDishesSuccess(response.data.results));
    })
    .catch((e) => dispatch(fetchDishesFailure(e.message)));
};

export default { fetchDish, fetchDishes, selectedDishDetails };
