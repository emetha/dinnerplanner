/* eslint-disable indent */
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const recipesRouter = require("./api/routers/recipes.js");
const usersController = require("./api/controllers/users.js");

const corsOptions = {
  origin: "*",
  methods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

admin.initializeApp();
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use("/recipes", recipesRouter);
exports.api = functions.https.onRequest(app);

// Triggers
exports.makeAdminIfApproved = functions.auth
  .user()
  .onCreate(usersController.makeAdminIfApproved);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});
