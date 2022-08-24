import { Box } from '@mui/material'
import React from 'react'

const Movies = () => {

  const style = {
    container: {
      bgcolor: 'background.default', 
      color: 'text.primary', 
      justifyContent: 'center', 
      display:'flex', 
      borderBottom: '1px solid #003452'
    }
  }

  return (
    <Box sx={style.container}>
      <h1>Movies Page</h1>
    </Box>
  )
}

export default Movies