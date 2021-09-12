import React from "react";
import { NavLink } from "react-router-dom";
import SidebarDishes from "../Dishes/SidebarDishes";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import {
  Divider,
  Typography,
  Button,
  Box,
  TextField,
  Drawer,
  IconButton,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const SidebarMenu = ({
  menu = [],
  servings = 0,
  totalPrice,
  changeServings,
  handleDrawerToggle,
  anchor,
  drawerOpen,
}) => {
  const classes = useStyles();

  const sidebarContent = (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={handleDrawerToggle(false)}
    >
      <Box m={3}>
        <Grid container justifyContent="center">
          <Grid item xs={11}>
            <Typography variant="h5" align="center">
              DINNER PLANNER
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton size="small" onClick={handleDrawerToggle(false)}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="fullWidth" />
      <Box display="flex" justifyContent="center" m={3}>
        <TextField
          id="outlined-number"
          label="Servings"
          type="number"
          margin="dense"
          InputProps={{
            inputProps: {
              min: 0,
            },
          }}
          variant="outlined"
          color="secondary"
          value={servings}
          onChange={changeServings}
        />
      </Box>
      <SidebarDishes menu={menu} servings={servings} />
      <Divider />
      <Box display="flex" justifyContent="center" m={2}>
        <Typography component="span" variant="body1" color="textPrimary">
          {`TOTAL: ${totalPrice} SEK`}
        </Typography>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="center" m={3}>
        <Button
          variant="outlined"
          color="primary"
          disabled={menu.length === 0 ? true : false}
        >
          <NavLink className={classes.link} to="/overview">
            Confirm Button
          </NavLink>
        </Button>
      </Box>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="sidebar content">
      <Drawer
        anchor={anchor}
        open={drawerOpen}
        onClose={handleDrawerToggle(false)}
      >
        {sidebarContent}
      </Drawer>
    </nav>
  );
};

export default SidebarMenu;
