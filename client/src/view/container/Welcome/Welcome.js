import React from "react";
import { Typography, Button, Box, Grid } from "@material-ui/core";
import Page from "../../component/Layout/Page";
import { NavLink } from "react-router-dom";
import StatusLoader from "../../component/Status/StatusLoader";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "../Authentication/SignIn";
import { VisibleOnlyAdmin, VisibleForAuthenticatedUser } from "../../../auth";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Welcome = () => {
  const classes = useStyles();

  const CreateDinnerLink = () => (
    <NavLink className={classes.link} to="/search">
      <Button variant="contained" color="primary" size="large">
        Create new dinner
      </Button>
    </NavLink>
  );

  const SignInButton = () => <SignIn label="Sign In" variant="contained" />;

  const WelcomeCreateDinner = () => (
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
        <CreateDinnerLink />
      </Grid>
    </Grid>
  );

  const WelcomeNotAdmin = () => (
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
            Sorry!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={8} md={6}>
        <Typography paragraph variant="h5" align="center">
          Only approved users (i.e. admins) are allowed to access this app!
        </Typography>
      </Grid>
    </Grid>
  );

  const WelcomeSignIn = () => (
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
        <SignInButton />
      </Grid>
    </Grid>
  );

  const WelcomePageCreateDinner = () => (
    <Page
      pageTitle="DINNER PLANNER"
      contentChild={<WelcomeCreateDinner />}
      showMenuButton={false}
    />
  );

  const WelcomePageSignIn = () => (
    <Page
      pageTitle="DINNER PLANNER"
      contentChild={<WelcomeSignIn />}
      showMenuButton={false}
    />
  );

  const WelcomePageNotAdmin = () => (
    <Page
      pageTitle="DINNER PLANNER"
      contentChild={<WelcomeNotAdmin />}
      showMenuButton={false}
    />
  );

  // const PageVisibleForAuthenticatedAdmin = VisibleForAuthenticatedUser(
  //   VisibleOnlyAdmin(WelcomePageCreateDinner, WelcomePageNotAdmin),
  //   WelcomePageSignIn
  // );

  // return <PageVisibleForAuthenticatedAdmin />;
  return <WelcomePageCreateDinner></WelcomePageCreateDinner>;
};

export default Welcome;
