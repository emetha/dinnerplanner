import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  darkColor: {
    color: theme.palette.primary.dark,
  },
  lightColor: {
    color: theme.palette.primary.light,
  },
}));

const DetailsDishNuitrition = ({ protein, calories, fat }) => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={2}>
          <Box
            m={2}
            alignItems="center"
            display="flex"
            flexDirection="column"
            className={classes.lightColor}
          >
            <Typography align="center" variant="subtitle2">
              Calories
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              className={classes.darkColor}
            >
              {calories}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            className={classes.lightColor}
            borderLeft={1}
            borderRight={1}
          >
            <Typography align="center" variant="subtitle2">
              Protein
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              className={classes.darkColor}
            >
              {protein}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            m={2}
            alignItems="center"
            display="flex"
            flexDirection="column"
            className={classes.lightColor}
          >
            <Typography align="center" variant="subtitle2">
              Fat
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              className={classes.darkColor}
            >
              {fat}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsDishNuitrition;
