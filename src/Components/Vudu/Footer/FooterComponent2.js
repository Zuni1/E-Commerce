import React from 'react'
import { Typography } from '@mui/material'
import {Link} from 'react-router-dom';

const FooterComponent2 = ({name}) => {
    
    const style = {
        p: { 
            marginLeft: '4px',
            marginRight: '4px',
        },
        link: {
            textDecoration: 'none',
            color: '#028fe5',

        }
    }

    return (
        <>
            <Link to="/" style={style.link}>                
                <Typography variant="subtitle2" gutterBottom> {name} </Typography>
            </Link>

            <Typography variant="subtitle2" gutterBottom sx={style.p}> | </Typography>
        </>
    )
}

export default FooterComponent2