import React from "react";
import SidebarMenu from "../../component/Layout/SidebarMenu";
import { useSelector, useDispatch } from "react-redux";
import {
  sidebarOperations,
  sidebarSelectors,
} from "../../../state/ducks/sidebar";
import { useFirestoreConnect } from "react-redux-firebase";

const Sidebar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const uid = useSelector((state) => state.firebase.auth.uid);

  const menu = sidebarSelectors.getFullMenu(state);
  const servings = sidebarSelectors.getNumberOfServings(state);
  const totalPrice = sidebarSelectors.getTotalMenuPrice(state);
  const drawerOpen = sidebarSelectors.getDrawerToggle(state);

  useFirestoreConnect({
    collection: `users/${uid}/menu`,
    storeAs: "menu",
  });

  const onNumberOfServingsChanged = (e) => {
    dispatch(sidebarOperations.updateServings(e.target.value));
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(sidebarOperations.toggleDrawer(open));
  };

  return (
    <SidebarMenu
      menu={menu}
      servings={servings}
      totalPrice={totalPrice}
      changeServings={onNumberOfServingsChanged}
      drawerOpen={drawerOpen}
      handleDrawerToggle={toggleDrawer}
      anchor="left"
    />
  );
};

export default Sidebar;
