import React, { useState } from "react";
import DetailsDishIngredients from "./DetailsDishIngredients";
import DetailsDishInstructions from "./DetailsDishInstructions";
import { Box, Paper, Tabs, Tab } from "@material-ui/core";

const DetailsDishTabs = ({ ingredients, instructions }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `dish-details-tab-${index}`,
      "aria-controls": `dish-details-tabpanel-${index}`,
    };
  };

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
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  };

  return (
    <Box m={5}>
      <Tabs
        value={tabValue}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={handleTabChange}
        aria-label="details-dish-tab"
        centered
      >
        <Tab label="INGREDIENTS">{a11yProps(0)}</Tab>
        <Tab label="INSTRUCTIONS">{a11yProps(1)}</Tab>
      </Tabs>
      <TabPanel
        value={tabValue}
        index={0}
        children={
          <Paper variant="outlined">
            <DetailsDishIngredients ingredients={ingredients} />
          </Paper>
        }
      ></TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Paper variant="outlined">
          <DetailsDishInstructions instructions={instructions} />
        </Paper>
      </TabPanel>
    </Box>
  );
};

export default DetailsDishTabs;
