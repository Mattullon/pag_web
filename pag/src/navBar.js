import React from 'react'
import { AppBar, IconButton, Toolbar } from "@mui/material";

export function navBar(){
  return (
    <AppBar position="fixed">
    <Toolbar>
      <IconButton color="inherit">Menu</IconButton>
      <IconButton color="inherit">Freelancer</IconButton>
    </Toolbar>
    </AppBar>
  )
}
