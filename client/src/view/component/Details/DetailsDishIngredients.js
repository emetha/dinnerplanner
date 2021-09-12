import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  color: {
    color: "#F60357",
  },
  darkColor: {
    color: theme.palette.primary.dark,
  },
}));

const DetailsDishIngredients = ({ ingredients = [] }) => {
  const classes = useStyles();
  return (
    <Box p={2}>
      <List>
        {ingredients.map((ingredient, index) => {
          return (
            <ListItem key={`dish-details-ingredients-${index}`}>
              <ListItemAvatar>
                <Avatar
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                />
              </ListItemAvatar>
              <ListItemText
                primary={ingredient.original}
                className={classes.darkColor}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default DetailsDishIngredients;
