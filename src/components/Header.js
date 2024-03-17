import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

export default function Header() {
  return (
    <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 5 }}>
        <AppBar position="sticky" >
            <Toolbar variant="regular">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
                Bookkeeper
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    </ThemeProvider>
  );
}