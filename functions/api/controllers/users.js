/**
 * Makes users admin's if their email is in the admins list
 */

const admin = require("firebase-admin");

exports.makeAdminIfApproved = async (user) => {
  const email = user.email; // The email of the user.
  try {
    const approvedUserSnap = await checkIfApproved(email);
    if (approvedUserSnap.exists) {
      // User is approved
      return admin
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((userSnap) => {
          if (userSnap.exists) {
            if (userSnap.data["role"] === "admin") {
              console.log("User is already an admin");
            } else {
              console.log("User account exists, but is not an admin");
              return admin
                .firestore()
                .collection("users")
                .doc(user.uid)
                .set({ email: email, role: "admin" });
            }
          } else {
            console.log("Creating admin account for " + email);
            return admin
              .firestore()
              .collection("users")
              .doc(user.uid)
              .set({ email: email, role: "admin" });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Creating user account for " + email);
      return admin
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({ email: email, role: "user" });
    }
  } catch (error) {
    console.error(error);
  }
};

function checkIfApproved(email) {
  return admin.firestore().collection("admins").doc(email).get();
}
