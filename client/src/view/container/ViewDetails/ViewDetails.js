import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Tooltip } from "@material-ui/core/";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { apiOperations, apiSelectors } from "../../../state/ducks/api";

import Presentation from "../../component/Layout/Presentation";
import AddRecipe from "../Recipe/AddRecipe";
import Page from "../../component/Layout/Page";
import DetailsDish from "../../component/Details/DetailsDish";
import StatusLoader from "../../component/Status/StatusLoader";
import StatusDataFailure from "../../component/Status/StatusDataFailure";

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
  const dishID = apiSelectors.getSelectedDishDetailsID(state);
  const fetchedDish = apiSelectors.getFetchedDish(state);
  const status = apiSelectors.getStatus(state);

  useEffect(() => {
    dispatch(apiOperations.fetchDish(dishID));
  }, [dispatch, dishID]);

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
          showMenuButton={true}
        >
          <PageContent fetchedDish={fetchedDish} />
        </Page>
      }
      errorPresentation={<StatusDataFailure />}
    />
  );
};

export default ViewDetails;
