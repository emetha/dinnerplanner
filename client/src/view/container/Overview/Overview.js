import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactHtmlParser from "react-html-parser";
import { NavLink } from "react-router-dom";
import Page from "../../component/Layout/Page";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  AccordionActions,
  Avatar,
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tooltip,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { sidebarSelectors } from "../../../state/ducks/sidebar";
import { useFirestoreConnect } from "react-redux-firebase";
import RemoveRecipe from "../Recipe/RemoveRecipe";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  accordion: {
    backgroundColor: theme.palette.primary.light,
  },
  divider: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Overview = () => {
  const state = useSelector((state) => state);
  const uid = sidebarSelectors.getUID(state);
  const totalPrice = sidebarSelectors.getTotalMenuPrice(state);
  const menu = sidebarSelectors.getFullMenu(state);

  useFirestoreConnect({
    collection: `users/${uid}/menu`,
    storeAs: "menu",
  });

  const classes = useStyles();

  const MenuList = ({ menu }) => {
    return menu.map((dish, index) => {
      return (
        <Accordion
          className={classes.accordion}
          key={`${index}-menulist-${dish.id}`}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="accordion-menu-content"
            id="accordion-menu-header"
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={dish.title} src={dish.image} />
              </ListItemAvatar>
              <ListItemText
                primary={dish.title}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {dish.pricePerServing} SEK/Serving
                  </Typography>
                }
              />
            </ListItem>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="body2" className={classes.link}>
                {ReactHtmlParser(dish.summary)}
              </Typography>
            </Box>
          </AccordionDetails>
          <AccordionActions>
            <Box>
              <RemoveRecipe
                id={dish.id}
                uid={uid}
                label="Remove Dish"
                tooltipTitle="Remove dish from menu!"
              />
            </Box>
          </AccordionActions>
        </Accordion>
      );
    });
  };

  const PageContent = ({ menu }) => {
    return (
      <Box p={3}>
        <Typography variant="h2">{`TOTAL PRICE: ${totalPrice} SEK`}</Typography>
        <List>
          <MenuList menu={menu} />
        </List>
      </Box>
    );
  };

  const PageHeader = () => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box m={2}>
          <Tooltip title="Print the selected recipes" aria-label="print">
            <Button size="medium" color="secondary" variant="contained">
              <NavLink className={classes.link} to={`/printout`}>
                PRINT RECIPES!
              </NavLink>
            </Button>
          </Tooltip>
        </Box>
        <Box m={2}>
          <Tooltip title="Go back to search" aria-label="search">
            <Button size="medium">
              <NavLink className={classes.link} to={`/search`}>
                SEARCH
              </NavLink>
            </Button>
          </Tooltip>
        </Box>
      </Box>
    );
  };

  return (
    <Page
      pageTitle="OVERVIEW"
      contentChild={<PageContent menu={menu} />}
      headerChild={<PageHeader />}
      showMenuButton={false}
    />
  );
};

export default Overview;
