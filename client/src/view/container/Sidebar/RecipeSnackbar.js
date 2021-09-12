import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  snackbarOperations,
  snackbarSelectors,
} from "../../../state/ducks/snackbar";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const RecipeSnackbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const snackData = snackbarSelectors.getSnackData(state);
  const open = snackbarSelectors.getSnackbarOpen(state);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackbarOperations.closeActiveSnack());
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={() => handleClose()}>
      <Alert onClose={() => handleClose()} severity={snackData?.severity}>
        {snackData?.message}
      </Alert>
    </Snackbar>
  );
};

export default RecipeSnackbar;
