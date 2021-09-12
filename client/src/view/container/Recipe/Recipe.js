import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dishesOperations } from "../../../state/ducks/dishes";
import {
  Card,
  CardHeader,
  Box,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  media: {
    height: 200,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    height: 350,
    width: 350,
    backgroundColor: theme.palette.primary.light,
  },
  header: {
    width: 310,
  },
}));

const Recipe = ({ dish }) => {
  const classes = useStyles();
  const url = "https://spoonacular.com/recipeImages/";
  const dispatch = useDispatch();

  const handleDishOnclick = (id) => {
    dispatch(dishesOperations.selectedDishDetails(id));
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        disableTypography
        title={
          <Box display="block">
            <Typography className={classes.header} noWrap variant="h6">
              {dish.title}
            </Typography>
          </Box>
        }
      />
      <CardMedia
        className={classes.media}
        image={`${url}${dish.image}`}
        title={dish.title}
      />
      <CardActions>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box m={2}>
            <Button
              variant="outlined"
              size="medium"
              color="secondary"
              onClick={() => handleDishOnclick(dish.id)}
            >
              <NavLink className={classes.link} to={`/details/${dish.id}`}>
                LEARN MORE
              </NavLink>
            </Button>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Recipe;
