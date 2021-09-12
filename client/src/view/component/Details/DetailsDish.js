import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import DetailsDishTabs from "./DetailsDishTabs";
import DetailsDishInformation from "./DetailsDishInformation";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const DetailDish = ({ dish }) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column">
      <Grid container className={classes.root}>
        <Grid item lg={6} xs={12}>
          <DetailsDishInformation dish={dish} />
        </Grid>
        <Grid item lg={6} xs={12}>
          <DetailsDishTabs
            ingredients={dish.extendedIngredients}
            instructions={dish.instructions}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailDish;
