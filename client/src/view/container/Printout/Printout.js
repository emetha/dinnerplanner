import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { sidebarSelectors } from "../../../state/ducks/sidebar";
import GeneratePDF from "./GeneratePDF";
import {
  Grid,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Page from "../../component/Layout/Page";
import DetailsDishTitle from "../../component/Details/DetailsDishTitle";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  darkColor: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Printout = () => {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const menu = sidebarSelectors.getFullMenu(state);

  const PageHeader = () => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box m={2}>
          <GeneratePDF />
        </Box>
        <Box m={2}>
          <Tooltip title="Go back to overview" aria-label="search">
            <Button size="medium">
              <NavLink className={classes.link} to={`/overview`}>
                Overview
              </NavLink>
            </Button>
          </Tooltip>
        </Box>
      </Box>
    );
  };

  const PageContent = ({ menu }) => {
    const classes = useStyles();
    return (
      <Box id="page">
        {menu.map((dish, index) => {
          return (
            <Box m={4} key={`${index}-printout`}>
              <Grid
                container
                spacing={1}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item lg={6} xs={12}>
                  <DetailsDishTitle
                    title={dish.title}
                    pricePerServing={dish.pricePerServing}
                    readyInMinutes={dish.readyInMinutes}
                    aggregateLikes={dish.aggregateLikes}
                  />
                </Grid>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item lg={3} xs={12}>
                    <Box p={2} display="flex" flexDirection="column">
                      <Typography
                        component={"span"}
                        variant="h4"
                        align="justify"
                      >
                        INGREDIENTS
                      </Typography>
                      <List>
                        {dish.extendedIngredients.map((ingredient, index) => {
                          return (
                            <ListItem key={`dish-details-ingredients-${index}`}>
                              <ListItemIcon>
                                <CheckBoxOutlineBlankIcon />
                              </ListItemIcon>
                              <ListItemText primary={ingredient.original} />
                            </ListItem>
                          );
                        })}
                      </List>
                    </Box>
                  </Grid>
                  <Grid item lg={5} xs={12}>
                    <Box p={2} display="flex" flexDirection="column">
                      <Typography
                        component={"span"}
                        variant="h4"
                        align="justify"
                        gutterBottom
                      >
                        INSTRUCTIONS
                      </Typography>
                      <Typography
                        component={"span"}
                        variant="body1"
                        align="justify"
                      >
                        {ReactHtmlParser(dish.instructions)}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Divider className={classes.darkColor} variant="fullWidth" />
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Page
      pageTitle="PRINTOUT"
      headerChild={<PageHeader />}
      contentChild={<PageContent menu={menu} />}
      showMenuButton={false}
    />
  );
};

export default Printout;
