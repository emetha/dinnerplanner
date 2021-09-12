import { Grid, Toolbar } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Sidebar from "../../container/Sidebar/Sidebar";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Page = ({
  headerChild,
  contentChild,
  pageTitle,
  children,
  showMenuButton,
}) => {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12}>
        <main className={classes.content}>
          <Toolbar />
          <Grid container spacing={2} direction="row">
            <Grid item xs={2}>
              <Header title={pageTitle} showMenuButton={showMenuButton}>
                {headerChild ? headerChild : children}
              </Header>
            </Grid>
            <Grid item xs={12}>
              {contentChild}
            </Grid>
          </Grid>
        </main>
      </Grid>
    </Grid>
  );
};

export default Page;
