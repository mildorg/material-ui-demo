import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="static">
      <Tabs value={0}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </AppBar>
  );
};

export { Footer };
