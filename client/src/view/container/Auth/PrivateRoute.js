import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { sidebarSelectors } from "../../../state/ducks/sidebar";

const PrivateRoute = ({ children, ...remainingProps }) => {
  const state = useSelector((state) => state);
  const auth = sidebarSelectors.getAuth(state);
  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
