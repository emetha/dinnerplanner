import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import Authentication from "../../component/Layout/Authentication";

const SignIn = ({ label, variant = "text", color = "inherit" }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const firebase = useFirebase();

  const createNewUser = ({ email, password }) => {
    firebase
      .createUser({ email, password })
      .then(() => {
        setOpen(false);
        setError("");
      })
      .catch((error) => {
        let errorMessage = error.message;
        setError(errorMessage);
        setOpen(true);
      });
  };

  return (
    <Authentication
      title="Sign In"
      label={label}
      color={color}
      error={error}
      variant={variant}
      open={open}
      email={email}
      password={password}
      handleOnClickAuthentication={() =>
        createNewUser({ email: email, password: password })
      }
      handleClose={handleClose}
      handleClickOpen={handleClickOpen}
      handleOnChangePassword={(event) => setPassword(event.target.value)}
      handleOnChangeEmail={(event) => setEmail(event.target.value)}
    />
  );
};
export default SignIn;
