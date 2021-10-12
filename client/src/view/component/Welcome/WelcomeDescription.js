import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";

const WelcomeDescription = (props) => (
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
        This is a web application created using React and Redux. The views were
        generated with Material UI components and data is stored using Firebase.
        The application allows the user to search and print recipes recovered
        from Spoonacular.
      </Typography>
    </Grid>
    <Grid item xs={6} md={4}>
      <Typography paragraph variant="subtitle1" align="center">
        Click the button below to start planning dinner!
      </Typography>
    </Grid>
    <Grid item xs={6} md={4}>
      {props.children}
    </Grid>
  </Grid>
);

export default WelcomeDescription;
