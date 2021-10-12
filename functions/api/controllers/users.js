/**
 * Makes users admin's if their email is in the admins list
 */

const admin = require("firebase-admin");
const functions = require("firebase-functions");

function checkIfApproved(email) {
  return admin.firestore().collection("admins").doc(email).get();
}

exports.makeAdminIfApproved = async (user) => {
  const email = user.email; // The email of the user.
  const uid = user.uid; // The uid of the user.
  const userCollection = "users";

  try {
    const approvedUserSnap = await checkIfApproved(email);
    if (approvedUserSnap.exists) {
      // User is approved
      return admin
        .firestore()
        .collection(userCollection)
        .doc(uid)
        .get()
        .then((userSnap) => {
          if (userSnap.exists) {
            if (userSnap.data["role"] === "admin") {
              functions.logger.log(`User ${uid} is already an admin`);
            } else {
              functions.logger.log(
                `User account ${uid} exists and approved, but is not an admin`
              );
              return admin
                .firestore()
                .collection(userCollection)
                .doc(uid)
                .set({ email: email, role: "admin" });
            }
          } else {
            functions.logger.log(`Creating admin account for ${uid}`);
            return admin
              .firestore()
              .collection(userCollection)
              .doc(uid)
              .set({ email: email, role: "admin" });
          }
        });
    } else {
      functions.logger.log(`Creating user account for ${uid}`);
      return admin
        .firestore()
        .collection(userCollection)
        .doc(uid)
        .set({ email: email, role: "user" });
    }
  } catch (error) {
    functions.logger.error(
      `Error while creating an admin account for user ${uid}: ${error}`
    );
  }
};
