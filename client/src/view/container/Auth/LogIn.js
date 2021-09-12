import React from "react";
import { useFirebase } from "react-redux-firebase";
import { Button } from "@material-ui/core";

const LogIn = ({ label = "Login", variant = "text", color = "inherit" }) => {
  const firebase = useFirebase();
  const Login = () => {
    firebase.login({ provider: "google", type: "redirect" });
  };
  return (
    <Button
      variant={variant}
      color={color}
      onClick={(event) => {
        event.preventDefault();
        Login();
      }}
    >
      {label}
    </Button>
  );
};
export default LogIn;
