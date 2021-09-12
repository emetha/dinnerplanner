import { useFirestore } from "react-redux-firebase";
import { snackbarOperations } from "../../../state/ducks/snackbar";
import constants from "../../../constants/SnackbarConstants";
import { sidebarSelectors } from "../../../state/ducks/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton, Tooltip } from "@material-ui/core";

const RemoveRecipe = ({ id, icon, label, tooltipTitle }) => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const state = useSelector((state) => state);
  const uid = sidebarSelectors.getUID(state);

  const handleOnclick = (id) => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("menu")
      .doc(id.toString())
      .delete()
      .then(() => {
        dispatch(
          snackbarOperations.requestSnack({
            severity: constants.SUCCESS_SNACKBAR_TYPE,
            message: "Recipe has been removed.",
          })
        );
      })
      .catch((err) => {
        console.error(err);
        dispatch(
          snackbarOperations.requestSnack({
            severity: constants.ERROR_SNACKBAR_TYPE,
            message: "Something went wrong.",
          })
        );
      });
  };

  return icon ? (
    <Tooltip title={tooltipTitle} aria-label="remove">
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => {
          handleOnclick(id);
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title={tooltipTitle} aria-label="remove">
      <Button
        size="small"
        color="secondary"
        variant="contained"
        onClick={() => handleOnclick(id)}
      >
        {label}
      </Button>
    </Tooltip>
  );
};

export default RemoveRecipe;
