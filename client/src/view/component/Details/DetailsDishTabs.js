import React, { useState } from "react";
import DetailsDishIngredients from "./DetailsDishIngredients";
import DetailsDishInstructions from "./DetailsDishInstructions";
import TabPanel from "../Layout/TabPanel";
import { Box, Paper, Tabs, Tab } from "@material-ui/core";

const DetailsDishTabs = ({ ingredients, instructions }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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
        <Tab label="INGREDIENTS">
          {{
            id: `dish-details-tab-${0}`,
            "aria-controls": `dish-details-tabpanel-${0}`,
          }}
        </Tab>
        <Tab label="INSTRUCTIONS">
          {{
            id: `dish-details-tab-${0}`,
            "aria-controls": `dish-details-tabpanel-${1}`,
          }}
        </Tab>
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <Paper variant="outlined">
          <DetailsDishIngredients ingredients={ingredients} />
        </Paper>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Paper variant="outlined">
          <DetailsDishInstructions instructions={instructions} />
        </Paper>
      </TabPanel>
    </Box>
  );
};

export default DetailsDishTabs;
