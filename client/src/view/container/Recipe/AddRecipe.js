import { useFirestore } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { Button, Tooltip } from "@material-ui/core/";
import { snackbarOperations } from "../../../state/ducks/snackbar";
import constants from "../../../constants/SnackbarConstants";

const AddRecipe = ({ recipe, label, tooltipTitle }) => {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.firebase.auth.uid);

  const handleOnClick = (recipe) => {
    if (recipe) {
      const docRef = firestore
        .collection("users")
        .doc(uid)
        .collection("menu")
        .doc(recipe.id.toString());

      docRef
        .get()
        .then((docSnapShot) => {
          if (docSnapShot.exists) {
            dispatch(
              snackbarOperations.requestSnack({
                message: "Recipe is already in menu!",
                severity: constants.SUCCESS_SNACKBAR_TYPE,
              })
            );
          } else {
            docRef.set({ ...recipe, uid: uid });
            dispatch(
              snackbarOperations.requestSnack({
                message: "Recipe has been added!",
                severity: constants.SUCCESS_SNACKBAR_TYPE,
              })
            );
          }
        })
        .catch((err) => {
          console.error(err);
          dispatch(
            snackbarOperations.requestSnack({
              message: "Something went wrong.",
              severity: constants.ERROR_SNACKBAR_TYPE,
            })
          );
        });
    }
  };

  return (
    <Tooltip title={tooltipTitle} aria-label="add">
      <Button
        variant="contained"
        size="medium"
        color="secondary"
        onClick={() => handleOnClick(recipe)}
      >
        {label}
      </Button>
    </Tooltip>
  );
};

export default AddRecipe;
