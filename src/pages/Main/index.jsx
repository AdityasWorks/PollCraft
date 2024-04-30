import React from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useTheme, Box, Card, Tab, Tabs } from "@mui/material";

import AppBar from "../../components/AppBar/AppBar";
import Footer from "../../components/Footer/index.jsx";

import User from "./User";
import Made from "./Made.jsx";

const Main = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar />
      <Box
        sx={{
          width: 2000,
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column"
        }}
      >
        <TabContext value={value}>
          <Box sx={{ mt: 10,}}>
            <TabList onChange={handleChange} >
              <Tab label="Join" value="1" />
              <Tab label="Create" value="2"sx={{marginX:"100px"}}/>
            </TabList>
          </Box>
          <TabPanel value="1">
            <User />
          </TabPanel>
          <TabPanel value="2">
            <Made />
          </TabPanel>
        </TabContext>
      </Box>
      <Footer />
    </>
  );
  
}  

export default Main;
