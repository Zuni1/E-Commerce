import React from 'react'

const FooterComponent = ({heading, n1, n2, n3, n4, n5, n6, n7, n8}) => {
    
    const style = {
        ul: {
            listStyleType: 'none',
            // color: '#b0b9b9',
        },
        // liH: {
        //     color: '#fffcf2',
        // },
        liB: {
            marginBottom: '15px',
            "&:hover": {
                textDecoration: "underline",
            },
        },
    }
        
    return (
        <ul style={style.ul}>
            <li style={style.liH}>
                <h3>{heading}</h3>
            </li>
            <li style={style.liB}>{n1}</li>
            <li style={style.liB}>{n2}</li>
            <li style={style.liB}>{n3}</li>
            <li style={style.liB}>{n4}</li>
            <li style={style.liB}>{n5}</li>
            <li style={style.liB}>{n6}</li>
            <li style={style.liB}>{n7}</li>
            <li style={style.liB}>{n8}</li>
        </ul>
    )
}

export default FooterComponent