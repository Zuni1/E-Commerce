import React from 'react'
import {Outlet} from 'react-router-dom'
import { Grid, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Navbar from './Navbar'
import Footer from '../Components/Vudu/Footer/Footer'

const Container = () => {
    const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
    const [mode, setMode] = React.useState('light');
      
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
        () =>
        createTheme({
            palette: {
                mode,
            },
        }),
        [mode],
    );

    const style = {
        container: {
            justifyContent: 'flex-end', 
            backgroundColor: "#041c2c" 
        },
        mode: {
            justifyContent: 'flex-end', 
            alignItems:'center', 
            pr: 3, 
            bgcolor: 'background.default', 
            color: 'text.primary'
        }
    }

    return (
        <>
            <Navbar/>

            <Grid container sx={style.container}>
                <img src="https://www.vudu.com/bluesteel/compile/images/55e90600836ab886f217.svg" alt="image"></img>
            </Grid>
        
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Grid container sx={style.mode}>
                    {theme.palette.mode} mode
                    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton> 
                </Grid>

                <Outlet/>
                <Footer/>
            </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}

export default Container