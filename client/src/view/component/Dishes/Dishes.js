import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import _ from "lodash";
import Recipe from "../../container/Recipe/Recipe";
import image from "../../../assets/undraw/undraw_empty_cart_co35.svg";

const Dishes = ({ dishes = [] }) => {
  const dishesList = dishes.map((dish) => {
    return (
      <Grid item key={`search-dish-${dish.id}`}>
        <Recipe dish={dish} />
      </Grid>
    );
  });

  return dishes.length === 0 ? (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h2">NO DISHES FOUND...</Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={image} alt="No dishes found" />
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h2">FIND A DISH </Typography>
        <Divider />
      </Grid>
      {dishesList}
    </Grid>
  );
};

export default Dishes;
