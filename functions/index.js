const express = require("express");
const functions = require("firebase-functions");
const recipesRouter = require("./api/routers/recipes.js");

const app = express();

app.use(express.json());

// Routes
app.use("/recipes", recipesRouter);

exports.api = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});
