import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import DetailsDishTags from "./DetailsDishTags";
import DetailsDishTitle from "./DetailsDishTitle";
import DetailsDishAvatar from "./DetailsDishAvatar";
import DetailsDishNuitrition from "./DetailsDishNuitrition";

const useStyles = makeStyles((theme) => ({
  darkColor: {
    color: theme.palette.primary.dark,
  },
}));

const DetailsDishInformation = ({ dish }) => {
  const classes = useStyles();
  const chips = [
    { title: "Gluten Free", exist: dish.glutenFree },
    { title: "Cheap", exist: dish.cheap },
    { title: "Diary Free", exist: dish.dairyFree },
    { title: "Ketogenic", exist: dish.ketogenic },
    { title: "Vegan", exist: dish.vegan },
    { title: "Vegetarian", exist: dish.vegetarian },
    { title: "Very Healthy", exist: dish.veryHealthy },
    { title: "Very Popular", exist: dish.veryPopular },
    { title: "Low Food Map", exist: dish.lowFodmap },
  ];

  return (
    <Box borderRight={1} className={classes.darkColor} p={2}>
      <DetailsDishTitle
        title={dish.title}
        pricePerServing={dish.pricePerServing}
        readyInMinutes={dish.readyInMinutes}
        aggregateLikes={dish.aggregateLikes}
      />
      <DetailsDishAvatar image={dish.image} title={dish.title} />
      <DetailsDishNuitrition
        calories={dish.calories}
        protein={dish.protein}
        fat={dish.fat}
      />
      <DetailsDishTags chips={chips} />
    </Box>
  );
};

export default DetailsDishInformation;
