import React, { useState } from "react";
import { Box } from "@material-ui/core";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dish-details-tabpanel-${index}`}
      aria-labelledby={`dish-details-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{props.children}</Box>}
    </div>
  );
};

export default TabPanel;
