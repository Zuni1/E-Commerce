import React from 'react'
import { Box, Grid } from "@mui/material";
import { useSelector } from 'react-redux'

import { fetchRequest, fetchSuccess, fetchFailure } from '../../../Redux/Reducer';
import MovieContainer from './MovieContainer';

export const fetchMovies = () => {
    return function (dispatch) {
        dispatch(fetchRequest())
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(res => {
            dispatch(fetchSuccess(res))
        })
        .catch(error => {
            dispatch(fetchFailure(error.message))
            console.log(error)
        })
    }
}

const Movie = () => {

    const selector = useSelector((state) => state.user.movies)

    return (
        <Box>
            {selector.map((data) => {
                while (data.id < 4) {
                return( 
                <MovieContainer key={data.id} name={data.title} 
                    src1='https://images2.vudu.com/poster2/2072603-168' 
                    src2='https://images2.vudu.com/poster2/2019422-168'
                    src3='https://images2.vudu.com/poster2/2054583-168'
                    src4='https://images2.vudu.com/poster2/2032387-168'
                    src5='https://images2.vudu.com/poster2/2082195-168'
                    src6='https://images2.vudu.com/poster2/2071695-168'
                    src7='https://images2.vudu.com/poster2/2040110-168'
                />
                )}
            })}
            <Grid container item xs={12} md={12} sx={{padding: '20px', borderBottom: '1px solid #003452'}}>
                <img src="https://images2.vudu.com/assets/page/banner/208548-1305" alt="image" width='100%'></img>
            </Grid>
            {selector.map((data) => {
                while (data.id > 3) {
                return( 
                <MovieContainer key={data.id} name={data.title} 
                    src1='https://images2.vudu.com/poster2/2072603-168' 
                    src2='https://images2.vudu.com/poster2/2019422-168'
                    src3='https://images2.vudu.com/poster2/2054583-168'
                    src4='https://images2.vudu.com/poster2/2032387-168'
                    src5='https://images2.vudu.com/poster2/2082195-168'
                    src6='https://images2.vudu.com/poster2/2071695-168'
                    src7='https://images2.vudu.com/poster2/2040110-168'
                />
                )}
            })}
        </Box>
    )
}

export default Movie