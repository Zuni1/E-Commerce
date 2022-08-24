import React from 'react'
import { Typography, Grid } from "@mui/material";

import MovieComponent from './MovieComponent'

const MovieContainer = ({name, src1, src2, src3, src4, src5, src6, src7}) => {

    const style= {
        box:{
            padding: '20px',
            borderBottom: '1px solid #003452',
        },
        headingBox: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px'
        },
        viewall: {
            color: '#4e666a',
            fontWeight: 'bold',
        },
        movies:{
            display: 'flex',
        },
    }
    
    return (
        <Grid sx={style.box}>
            <Grid sx={style.headingBox}>
                <Typography variant="h6" gutterBottom>{name}</Typography>
                <Typography sx={style.viewall} variant="body1" gutterBottom>View All</Typography>
            </Grid>
            <Grid container item md={12} sx={style.movies}>
                <MovieComponent src={src1} />
                <MovieComponent src={src2} />
                <MovieComponent src={src3} />
                <MovieComponent src={src4} />
                <MovieComponent src={src5} />
                <MovieComponent src={src6} />
                {/* <MovieComponent src={src7} /> */}
            </Grid>
        </Grid>
    )
}

export default MovieContainer