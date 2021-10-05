import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import MenuHeader from "../../container/Authentication/MenuHeader";
import AuthHeader from "../../container/Authentication/AuthHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { title, showMenuButton, children } = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {showMenuButton ? <MenuHeader /> : null}
        <Box className={classes.grow} display={{ xs: "none", sm: "block" }}>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box px={3} display="flex" alignItems="center">
          {children}
        </Box>
        <AuthHeader />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
