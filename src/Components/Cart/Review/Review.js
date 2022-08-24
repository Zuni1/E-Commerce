import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Review = ({name, caption, review}) => {

    const style = {
        box: {
            display: 'flex', 
            flexDirection: 'column', 
            maxWidth: '70%', 
            margin: '10px',
        }
    }
    return (
        <Box sx={style.box}>
            <Typography sx={{fontWeight: 'bold'}} variant="body1" gutterBottom> {name} </Typography>
            <Typography variant="caption" gutterBottom> {caption} </Typography>
            <Typography sx={{fontWeight: 'bold'}} variant="body2" gutterBottom> {review} </Typography>
        </Box>
    )
}

export default Review