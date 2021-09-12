import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Tooltip } from "@material-ui/core/";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dishesOperations, dishesSelectors } from "../../../state/ducks/dishes";
import { snackbarSelectors } from "../../../state/ducks/snackbar";

import Presentation from "../../component/Layout/Presentation";
import AddRecipe from "../Recipe/AddRecipe";
import Page from "../../component/Layout/Page";
import DetailsDish from "../../component/Details/DetailsDish";
import StatusLoader from "../../component/Status/StatusLoader";
import StatusDataFailure from "../../component/Status/StatusDataFailure";
import RecipeSnackbar from "../Sidebar/RecipeSnackbar";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const ViewDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const dishID = dishesSelectors.getSelectedDishDetailsID(state);
  const fetchedDish = dishesSelectors.getFetchedDish(state);
  const status = dishesSelectors.getStatus(state);
  const openSnackbar = snackbarSelectors.getSnackbarOpen(state);

  useEffect(() => {
    dispatch(dishesOperations.fetchDish(dishID));
  }, [dispatch]);

  const PageHeader = ({ fetchedDish }) => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box m={2}>
          <AddRecipe
            label="ADD DISH"
            recipe={fetchedDish}
            tooltipTitle="Add dish to menu!"
          />
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

  const PageContent = ({ fetchedDish }) => {
    return (
      <div>
        <DetailsDish dish={fetchedDish} />
      </div>
    );
  };

  return (
    <Presentation
      status={status}
      loadingPresentation={<StatusLoader />}
      loadedPresentation={
        <Page
          pageTitle="DISH DETAILS"
          headerChild={<PageHeader fetchedDish={fetchedDish} />}
          contentChild={<PageContent fetchedDish={fetchedDish} />}
          showMenuButton={true}
        />
      }
      errorPresentation={<StatusDataFailure />}
    />
  );
};

export default ViewDetails;
