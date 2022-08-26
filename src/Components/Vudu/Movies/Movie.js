import React from 'react'
import { Box, Grid } from "@mui/material";
import { useSelector } from 'react-redux'

import MovieContainer from './MovieContainer';

const Movie = () => {

    const selector = useSelector((state) => state.user.movies)

    return (
        <Box>
            {selector.map((data) => {
                while (data.id < 4) {
                return( 
                <MovieContainer key={data.id} name={data.title} 
                    src1={data.image.one}
                    src2={data.image.two}
                    src3={data.image.three}
                    src4={data.image.four}
                    src5={data.image.five}
                    src6={data.image.six}
                    src7={data.image.seven}
                />
                )}
            })}
            <Grid container item xs={12} md={12} sx={{padding: '20px', borderBottom: '1px solid #003452'}}>
                <img src="https://images2.vudu.com/assets/page/banner/208548-1305" alt="image" width='100%'></img>
            </Grid>
            {selector.map((data) => {
                while (data.id === 4) {
                return( 
                <MovieContainer key={data.id} name={data.title} 
                    src1={data.image.one}
                    src2={data.image.two}
                    src3={data.image.three}
                    src4={data.image.four}
                    src5={data.image.five}
                    src6={data.image.six}
                    src7={data.image.seven}
                />
                )}
            })}
        </Box>
    )
}

export default Movie