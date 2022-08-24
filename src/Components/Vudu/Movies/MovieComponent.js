import React from 'react'
import { Box } from "@mui/material";

const MovieComponent = ({src}) => {

    const style= {
        image:{
            borderRadius: 5,
            marginRight: '20px'
        }
    }
    return (
        <Box>
            <img style={style.image} src={src} alt='alt' />
        </Box>
    )
}

export default MovieComponent