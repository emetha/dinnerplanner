import React from "react";
import { Typography, Button, Box, Grid } from "@material-ui/core";
import Page from "../../component/Layout/Page";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { sidebarSelectors } from "../../../state/ducks/sidebar";
import StatusLoader from "../../component/Status/StatusLoader";
import { makeStyles } from "@material-ui/core/styles";
import LogIn from "../Auth/LogIn";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const auth = sidebarSelectors.getAuth(state);
  const pageContent = (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <Grid item xs={11}>
        <Box m={5}>
          <Typography paragraph variant="h2" align="center">
            Welcome to the Dinner Planner!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={8} md={6}>
        <Typography paragraph variant="h5" align="center">
          This is a web application created using React and Redux. The views
          were generated with Material UI components and data is stored using
          Firebase. The application allows the user to search and print recipes
          recovered from Spoonacular.
        </Typography>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography paragraph variant="subtitle1" align="center">
          Click the button below to start planning dinner!
        </Typography>
      </Grid>
      <Grid item xs={6} md={4}>
        {isEmpty(auth) ? (
          <LogIn label="Sign In with Google" variant="contained" />
        ) : (
          <NavLink className={classes.link} to="/search">
            <Button variant="contained" color="primary" size="large">
              Create new dinner
            </Button>
          </NavLink>
        )}
      </Grid>
    </Grid>
  );

  return isLoaded(auth) ? (
    <Page
      pageTitle="DINNER PLANNER"
      contentChild={pageContent}
      showMenuButton={false}
    />
  ) : (
    <StatusLoader />
  );
};

export default Welcome;
