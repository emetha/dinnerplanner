import { Box, Grid, Chip } from "@material-ui/core";

const DetailsDishTags = ({ chips }) => {
  const chipsList = chips.map((chip, index) => {
    if (chip.exist) {
      return (
        <Grid item key={`${chip.title}-${index}`}>
          <Chip label={chip.title} color="secondary" />
        </Grid>
      );
    }
  });
  return (
    <Box m={3} display="flex">
      <Grid container spacing={2} justifyContent="center">
        {chipsList}
      </Grid>
    </Box>
  );
};

export default DetailsDishTags;
