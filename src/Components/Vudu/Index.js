import React from "react";
import { Grid, Box } from "@mui/material";
import { useDispatch } from 'react-redux'

import Slider from "./Slider/Slider";
import Movie from "./Movies/Movie";


const Home = () => {

    return (
        <Box style={{backgroundColor: "#041c2c"}}>
            <Box sx={{bgcolor: 'background.default', color: 'text.primary'}}>                
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
