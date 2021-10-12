import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import SelectDish from "./view/container/SelectDish/SelectDish";
import ViewDetails from "./view/container/ViewDetails/ViewDetails";
import StatusError404 from "./view/component/Status/StatusError404";
import Welcome from "./view/container/Welcome/Welcome";
import Printout from "./view/container/Printout/Printout";
import Overview from "./view/container/Overview/Overview";
import RecipeSnackbar from "./view/container/Sidebar/RecipeSnackbar";
import { UserIsAdmin, UserIsAuthenticated } from "./auth";

const App = () => {
  const [theme] = useState(
    createTheme({
      palette: {
        primary: {
          main: "#ff8a80",
          light: "#ffbcaf",
          dark: "#c85a54",
        },
      },
    })
  );

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline>
        <Container disableGutters maxWidth={false}>
          {/* We rended diffrent component based on the path */}
          <Router>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route
                path="/search"
                component={UserIsAuthenticated(UserIsAdmin(SelectDish))}
              />
              <Route
                path="/details/:dishID"
                component={UserIsAuthenticated(UserIsAdmin(ViewDetails))}
              />
              <Route
                path="/printout"
                component={UserIsAuthenticated(UserIsAdmin(Printout))}
              />
              <Route
                path="/overview"
                component={UserIsAuthenticated(UserIsAdmin(Overview))}
              />
              <Route component={StatusError404} />
            </Switch>
          </Router>
          <RecipeSnackbar />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
};
export default App;
