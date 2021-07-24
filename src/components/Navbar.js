import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Navbar =()=>{
    return (
        <AppBar position="static">
  <Toolbar>
    <Typography>LiveScore</Typography>
  </Toolbar>
</AppBar>
    );
};


export default Navbar;