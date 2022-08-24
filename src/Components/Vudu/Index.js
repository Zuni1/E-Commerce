import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useDispatch } from 'react-redux'

import Slider from "./Slider/Slider";
import Movie from "./Movies/Movie";
import {logout} from '../../Redux/Reducer'


const Home = () => {

    const dispatch = useDispatch()

    return (
        <Box style={{backgroundColor: "#041c2c"}}>
            <Box sx={{bgcolor: 'background.default', color: 'text.primary'}}>
                <Grid container sx={{justifyContent: 'flex-end', pr: 3, pb: 2}}>
                    <Button  
                        variant='contained' 
                        onClick={() => dispatch(logout())}
                    >
                        Logout
                    </Button>
                </Grid>
                
                <Slider/>

                <Grid container item xs={12} md={12} sx={{padding: '20px', borderBottom: '1px solid #003452'}}>
                    <img src="https://images2.vudu.com/assets/row/banner/208770-1305" alt="image" width='100%'></img>
                </Grid>

                <Movie/>
            </Box>
        </Box>
    );
};

export default Home;
