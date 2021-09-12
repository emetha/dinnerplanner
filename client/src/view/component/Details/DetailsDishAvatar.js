import { Box, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

const DetailsDishAvatar = ({ title, image }) => {
  const classes = useStyles();
  return (
    <Box m={3} display="flex" justifyContent="center">
      <Avatar alt={title} src={image} className={classes.avatar} />
    </Box>
  );
};

export default DetailsDishAvatar;
