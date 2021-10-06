import React, { useState, useEffect } from "react";
import { useFirebase } from "react-redux-firebase";
import Authentication from "../../component/Layout/Authentication";

const LogIn = ({ label = "Login", variant = "text", color = "inherit" }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const firebase = useFirebase();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loginUser = ({ email, password }) => {
    firebase
      .login({ email, password })
      .then(() => {
        setOpen(false);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setOpen(true);
      });

    setOpen(false);
  };

  return (
    <Authentication
      title="LogIn"
      label={label}
      color={color}
      error={error}
      variant={variant}
      open={open}
      email={email}
      password={password}
      handleOnClickAuthentication={() =>
        loginUser({ email: email, password: password })
      }
      handleClose={handleClose}
      handleClickOpen={handleClickOpen}
      handleOnChangePassword={(event) => setPassword(event.target.value)}
      handleOnChangeEmail={(event) => setEmail(event.target.value)}
    />
  );
};

export default LogIn;
