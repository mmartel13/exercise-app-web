import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"black"}} position="static">
        <Toolbar>
          <Typography style={{textAlign:"center"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Exercises with Megan
          </Typography>
        </Toolbar>
      </AppBar>
     </Box>
  );
}

