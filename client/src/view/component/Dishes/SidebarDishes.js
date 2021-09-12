import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveRecipe from "../../container/Recipe/RemoveRecipe";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: "inherit",
    position: "relative",
    overflow: "auto",
    maxHeight: 500,
    height: "fit-content",
  },
}));

const SidebarDishes = ({ servings, menu }) => {
  const classes = useStyles();

  const DishesList = ({ menu }) => {
    return menu.map((dish, index) => {
      return (
        <ListItem key={`sidebar-dish-${index}`}>
          <ListItemAvatar>
            <Avatar alt={dish.title} src={dish.image} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                noWrap
                component="p"
                variant="body2"
                color="textPrimary"
              >
                {`${dish.title}`}
              </Typography>
            }
            secondary={
              <Typography
                noWrap
                component="p"
                variant="body2"
                color="textSecondary"
              >
                {`${Math.ceil(dish.pricePerServing) * servings} SEK`}
              </Typography>
            }
          />
          <ListItemSecondaryAction>
            <RemoveRecipe
              id={dish.id}
              icon={<DeleteIcon />}
              tooltipTitle="Remove dish from menu!"
            />
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  };

  return (
    <List className={classes.root}>
      <ListItem key={`sidebar-dish-start`}>
        <ListItemText
          primary={
            <Typography
              component="span"
              variant="subtitle1"
              color="textPrimary"
            >
              DISHES:
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <DishesList menu={menu} />
    </List>
  );
};

export default SidebarDishes;
