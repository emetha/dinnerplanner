import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import GradeIcon from "@material-ui/icons/Grade";
import TimerIcon from "@material-ui/icons/Timer";
import { Typography, Box, Grid, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: { fontWeight: "bold" },
}));

const DetailsDishTitle = ({
  title,
  pricePerServing,
  readyInMinutes,
  aggregateLikes,
}) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2" align="center" paragraph>
        {title}
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center" m={2}>
            <LocalOfferIcon fontSize="large" color="secondary" />
            <Typography variant="h5" align="center">
              {pricePerServing} SEK
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center" m={2}>
            <TimerIcon fontSize="large" color="secondary" />
            <Typography variant="h5" align="center">
              {readyInMinutes} Minutes
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center" m={2}>
            <GradeIcon fontSize="large" color="secondary" />
            <Typography variant="h5" align="center">
              {aggregateLikes} Likes
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsDishTitle;
