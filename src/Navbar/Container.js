import React from 'react'
import {Outlet} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Grid, IconButton, Button, ButtonGroup, Grow, Paper, Popper, MenuItem, MenuList } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import i18next from 'i18next'

import Navbar from './Navbar'
import {logout} from '../Redux/Reducer'
import Footer from '../Components/Vudu/Footer/Footer'

const languages = [
    {
      code : 'en',
      name : 'English',
      country_code: 'gb'
    },
    {
      code : 'fr',
      name : 'Français',
      country_code: 'fr'
    },
]

const Container = () => {
    const [open, setOpen] = React.useState(false);
    const [mode, setMode] = React.useState('light');
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const options = ['en', 'fr'];
    const anchorRef = React.useRef(null);
    const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
    const dispatch = useDispatch()
    const { t } = useTranslation();
    
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };
    
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
        setOpen(false);
    };
      
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

            <Grid sx={{m: 1, mb: 6}}>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" >
                <Button>
                    {options[selectedIndex]}
                    <LanguageIcon/>
                </Button>

                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
                    
            </ButtonGroup>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>                           
                        <MenuList id="split-button-menu" autoFocusItem>                               
                            {languages.map(({code, name, country_code, index})  => (                               
                                <MenuItem
                                    key={country_code}
                                    disabled={index === 2}
                                    selected={index === selectedIndex}
                                    onClick={(event) => {
                                        handleMenuItemClick(event, index)
                                        i18next.changeLanguage(code)
                                    }}
                                >
                                    <span>{name}</span>                                
                                </MenuItem>
                            ))}
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
                </Grow>
            )}
            </Popper>
            </Grid>
        
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Grid container sx={style.mode}>
                    {theme.palette.mode} {t('nav')}
                    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton> 

                    <Button  
                        variant='contained' 
                        onClick={() => dispatch(logout())}
                    >
                        {t('logout')}
                    </Button>
                </Grid>

                <Outlet/>
                <Footer/>
            </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}

export default Container