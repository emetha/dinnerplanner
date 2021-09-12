const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const axios = require("axios");

exports.getRecipes = (req, res) => {
  const searchQuery = req.query.query;
  const searchType = req.query.type;

  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
    params: {
      query: searchQuery,
      number: "25",
      offset: "0",
      type: searchType,
    },
    headers: {
      "x-rapidapi-host": `${functions.config().spoonacular.endpoint}`,
      "x-rapidapi-key": `${functions.config().spoonacular.key}`,
    },
  };

  cors(req, res, () => {
    axios
        .request(options)
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((e) => {
          console.log("Spoonacular Rapid API error: ", e);
          res.sendStatus(500); // ¯\_(ツ)_/¯
        });
  });
};

exports.getRecipe = (req, res) => {
  const dishId = req.params.id;

  const options = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${dishId}/information`,
    headers: {
      "x-rapidapi-host": `${functions.config().spoonacular.endpoint}`,
      "x-rapidapi-key": `${functions.config().spoonacular.key}`,
    },
  };

  cors(req, res, () => {
    axios
        .request(options)
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((e) => {
          console.log("Spoonacular Rapid API error: ", e);
          res.sendStatus(500); // ¯\_(ツ)_/¯
        });
  });
};
