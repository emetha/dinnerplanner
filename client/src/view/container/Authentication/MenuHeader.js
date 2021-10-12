import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import { sidebarOperations } from "../../../state/ducks/sidebar";

const MenuHeader = () => {
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(sidebarOperations.toggleDrawer(true));
  };

  const DrawerButton = () => (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={() => handleDrawerToggle()}
    >
      <MenuIcon />
    </IconButton>
  );

  return <DrawerButton />;
};

export default MenuHeader;
