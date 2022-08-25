import React from 'react'
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const MovieComponent = ({src}) => {

    const navigate = useNavigate()

    const style= {
        image:{
            borderRadius: 5,
            marginRight: '20px'
        }
    }

    const handleClick = () => {
        navigate('/cart')
    }

    return (
        <Box>
            <img onClick={handleClick} style={style.image} src={src} alt='alt' />
        </Box>
    )
}

export default MovieComponent