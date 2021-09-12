import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import parse from "html-react-parser";

const useStyles = makeStyles((theme) => ({
  color: {
    color: "#F60357",
  },
  darkColor: {
    color: theme.palette.primary.dark,
  },
}));

const DetailsDishInstructions = ({ instructions }) => {
  const classes = useStyles();
  return (
    <Box p={3}>
      <Typography
        variant="subtitle1"
        align="justify"
        className={classes.darkColor}
      >
        {parse(`${instructions}`)}
      </Typography>
    </Box>
  );
};

export default DetailsDishInstructions;
