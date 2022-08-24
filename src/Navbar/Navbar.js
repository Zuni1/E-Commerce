import React from 'react'
import { Button, Box, Tabs, Tab, IconButton} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import logo from '../images/logo.png'

const Navbar = () => {

  const location = useLocation();
  const currentTab = location.pathname;
  const navigate = useNavigate()

  const style = {
    nav: {
      background: 'linear-gradient(to right bottom, #20A4F3, #182B3A)', 
      padding: '7px',
      flexGrow: 1
    },
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });

  return (
    <Box sx={style.nav}>
      <ThemeProvider theme={theme}>
      <Tabs
        value={currentTab}
        variant="scrollable"
      >
        <Tab sx={{color: 'white'}} value="/" to='/' component={() => (
          <Button onClick={() => navigate('/')} sx={{marginLeft: '16px', marginRight: '30px'}}>  
            <img src={logo} alt='logo' />
          </Button>
        )}/>
        <Tab sx={{color: 'white'}} label="Movies" value="/movies" to='/movies' component={Link} />
        <Tab sx={{color: 'white'}} label="TV" value="/tv" to='/tv' component={Link} />
        <Tab sx={{color: 'white'}} label="Free" value="/free" to='/free' component={Link} />
        <Tab sx={{color: 'white'}} label="Login" value="/login" to='/login' component={Link} />
        <Tab sx={{color: 'white'}} value="/cart" to='/cart' component={Link} 
          label={<IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton>} 
        />
      
      </Tabs>
      </ThemeProvider>
    </Box>
  )
}

export default Navbar
