import React from "react";
import { Typography, Button, Box, Grid } from "@material-ui/core";
import Page from "../../component/Layout/Page";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "../Authentication/SignIn";
import { VisibleOnlyAdmin, VisibleForAuthenticatedUser } from "../../../auth";
import WelcomeDescription from "../../component/Welcome/WelcomeDescription";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Welcome = () => {
  const classes = useStyles();

  const AuthorizedAdminContent = () => (
    <Page pageTitle="DINNER PLANNER" showMenuButton={false}>
      <WelcomeDescription>
        <NavLink className={classes.link} to="/search">
          <Button variant="contained" color="primary" size="large">
            Create new dinner
          </Button>
        </NavLink>
      </WelcomeDescription>
    </Page>
  );

  const NotAuthorizedContent = () => (
    <Page pageTitle="DINNER PLANNER" showMenuButton={false}>
      <WelcomeDescription>
        <SignIn label="Sign In" variant="contained" />
      </WelcomeDescription>
    </Page>
  );

  const NotAdminContent = () => (
    <Page pageTitle="DINNER PLANNER" showMenuButton={false}>
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
    </Page>
  );

  const ContentVisibleForAuthenticatedAdmin = VisibleForAuthenticatedUser(
    VisibleOnlyAdmin(AuthorizedAdminContent, NotAdminContent),
    NotAuthorizedContent
  );

  return <ContentVisibleForAuthenticatedAdmin />;
};

export default Welcome;
