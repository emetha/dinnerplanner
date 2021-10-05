import React from "react";
import { useFirebase } from "react-redux-firebase";
import { Button } from "@material-ui/core";

const LogOut = ({ label = "Logout", variant = "text", color = "inherit" }) => {
  const firebase = useFirebase();

  const logoutUser = () => {
    firebase.logout();
  };
  return (
    <Button
      variant={variant}
      color={color}
      onClick={(event) => {
        event.preventDefault();
        logoutUser();
      }}
    >
      {label}
    </Button>
  );
};
export default LogOut;
