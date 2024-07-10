import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

const View = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CONTENT
        </Typography>
        <Button color="inherit">View</Button>
        <Button color="inherit">Add</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default View