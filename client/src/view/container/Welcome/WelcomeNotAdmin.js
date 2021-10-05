import React from "react";
import { Typography, Button, Box, Grid } from "@material-ui/core";
import Page from "../../component/Layout/Page";
import { NavLink } from "react-router-dom";
import StatusLoader from "../../component/Status/StatusLoader";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "../Authentication/SignIn";
import {
  VisibleOnlyAdmin,
  VisibleForLoadedAuthentication,
} from "../../../auth";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Welcome = () => {
  const classes = useStyles();

  const PageContent = () => (
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

  const WelcomePage = () => (
    <Page
      pageTitle="DINNER PLANNER"
      contentChild={<PageContent />}
      showMenuButton={false}
    />
  );

  return <WelcomePage />;
};

export default Welcome;
