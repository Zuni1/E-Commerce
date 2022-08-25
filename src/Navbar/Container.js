import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Grid, IconButton, Button, MenuItem, MenuList } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageIcon from '@mui/icons-material/Language';
import i18next from 'i18next'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    
    const [mode, setMode] = React.useState('light');
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const [language, setLanguage] = React.useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    }
    
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
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
        
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Grid container sx={style.mode}>
                    {theme.palette.mode} {t('nav')}
                    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton> 

                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel sx={{display:'flex', alignItems:'center'}} id="demo-simple-select-filled-label">Lang<LanguageIcon/></InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                value={language}
                                onChange={handleChange}
                            >
                                <MenuList>                               
                                    {languages.map(({code, name, country_code, index})  => (                               
                                        <MenuItem
                                            key={country_code}
                                            selected={index === selectedIndex}
                                            onClick={(event) => {
                                                handleMenuItemClick(event, index)
                                                i18next.changeLanguage(code)
                                            }}
                                        >
                                            {name}                               
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Select>
                    </FormControl>

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