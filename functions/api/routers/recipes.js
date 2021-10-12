const express = require("express");
const recipesController = require("../controllers/recipes.js");

const recipesRouter = express.Router();

recipesRouter.get("/", recipesController.getRecipes);
recipesRouter.get("/:id", recipesController.getRecipe);

module.exports = recipesRouter;
