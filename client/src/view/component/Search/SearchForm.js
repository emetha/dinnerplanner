import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { InputLabel, FormControl, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: "1px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SearchForm = ({ options = [], onChange, option, inputLabelTitle }) => {
  const classes = useStyles();
  const typesList = options.map((option, index) => {
    return (
      <MenuItem key={index} value={option}>
        {option}
      </MenuItem>
    );
  });

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="search-select-label">{inputLabelTitle}</InputLabel>
      <Select
        labelId="search-select-label"
        id="search-select"
        value={option ? option : ""}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {typesList}
      </Select>
    </FormControl>
  );
};

export default SearchForm;
