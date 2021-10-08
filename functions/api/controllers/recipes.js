const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const axios = require("axios");
const admin = require("firebase-admin");

verifyAdminOnAuthorization = async (req, res, fetchApiCallback) => {
  functions.logger.log("Check if request is authorized with Firebase ID token");

  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    functions.logger.error(
      "No Firebase ID token was passed as a Bearer token in the Authorization header.",
      "Make sure you authorize your request by providing the following HTTP header:",
      "Authorization: Bearer <Firebase ID Token>"
    );
    res.status(403).send("Unauthorized");
    return;
  }

  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    functions.logger.log('Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    res.status(403).send("Unauthorized");
    return;
  }

  try {
    return admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedIdToken) => {
        const uid = decodedIdToken.uid;
        functions.logger.log(`ID Token for ${uid} has been correctly decoded`);
        return admin.firestore().collection("users").doc(uid).get();
      })
      .then((userSnap) => {
        functions.logger.log(`User exists!`);
        if (userSnap.exists) {
          const role = userSnap.data().role;
          const email = userSnap.data().email;

          if (role === "admin") {
            functions.logger.log(
              `User with email ${email} has been verified to be an admin`
            );
            fetchApiCallback(req, res);
          } else {
            functions.logger.log(`User with email ${email} is not an admin`);
            res.status(401).send("User is not authorized to use this feature!");
            return;
          }
        } else {
          functions.logger.log(`User does not exist!`);
          res.status(401).send("User is not authorized to use this feature!");
          return;
        }
      });
  } catch (error) {
    functions.logger.error("Error while verifying Firebase ID token:", error);
    res.status(401).send("Unauthorized");
    return;
  }
};

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
    verifyAdminOnAuthorization(req, res, () => {
      axios
        .request(options)
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((e) => {
          functions.logger.error("Spoonacular Rapid API error: ", e);
          res.sendStatus(500); // ¯\_(ツ)_/¯
        });
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
    verifyAdminOnAuthorization(req, res, () => {
      axios
        .request(options)
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((e) => {
          functions.logger.error("Spoonacular Rapid API error: ", e);
          res.sendStatus(500); // ¯\_(ツ)_/¯
        });
    });
  });
};
