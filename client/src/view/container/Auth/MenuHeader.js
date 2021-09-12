import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { isEmpty } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  sidebarOperations,
  sidebarSelectors,
} from "../../../state/ducks/sidebar";

const MenuHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const auth = sidebarSelectors.getAuth(state);

  const handleDrawerToggle = () => {
    dispatch(sidebarOperations.toggleDrawer(true));
  };

  return isEmpty(auth) ? null : (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={() => handleDrawerToggle()}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuHeader;
