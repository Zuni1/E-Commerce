import React from 'react'
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux'

import MovieContainer from './MovieContainer';

const Movie = () => {

    const selector = useSelector((state) => state.user.movies)

    // const [data, setData] = React.useState();
    // React.useEffect(() => {
    //     fetch("http://localhost:3000/movies")
    //     .then(res => res.json())
    //     .then(details => {
    //         setData(details);
    //     })
    //     .catch(error => {
    //         console.log("An Error Happened: ", error);
    //     })
    // }, [data])

    return (
        <>
            <h1>{selector.name}</h1>
            {/* <img src={selector.images}/> */}
            
            <MovieContainer name='New Releases' 
                src1='https://images2.vudu.com/poster2/2072603-168' 
                src2='https://images2.vudu.com/poster2/2019422-168'
                src3='https://images2.vudu.com/poster2/2054583-168'
                src4='https://images2.vudu.com/poster2/2032387-168'
                src5='https://images2.vudu.com/poster2/2082195-168'
                src6='https://images2.vudu.com/poster2/2071695-168'
                src7='https://images2.vudu.com/poster2/2040110-168'
            />
            <MovieContainer name='Top 200 Movies' 
                src1='https://images2.vudu.com/poster2/2072603-168'
                src2='https://images2.vudu.com/poster2/2019422-168'
                src3='https://images2.vudu.com/poster2/2054583-168'
                src4='https://images2.vudu.com/poster2/2032387-168'
                src5='https://images2.vudu.com/poster2/2082195-168'
                src6='https://images2.vudu.com/poster2/2071695-168'
                src7='https://images2.vudu.com/poster2/2040110-168'
            />
            <MovieContainer name='Deals of the Week' 
                src1='https://images2.vudu.com/poster2/2072603-168' 
                src2='https://images2.vudu.com/poster2/2019422-168'
                src3='https://images2.vudu.com/poster2/2054583-168'
                src4='https://images2.vudu.com/poster2/2032387-168'
                src5='https://images2.vudu.com/poster2/2082195-168'
                src6='https://images2.vudu.com/poster2/2071695-168'
                src7='https://images2.vudu.com/poster2/2040110-168'
            />

            <Grid container item xs={12} md={12} sx={{padding: '20px', borderBottom: '1px solid #003452'}}>
                <img src="https://images2.vudu.com/assets/page/banner/208548-1305" alt="image" width='100%'></img>
            </Grid>

            <MovieContainer name='In Theaters'  
                src1='https://images2.vudu.com/poster2/2072603-168' 
                src2='https://images2.vudu.com/poster2/2019422-168'
                src3='https://images2.vudu.com/poster2/2054583-168'
                src4='https://images2.vudu.com/poster2/2032387-168'
                src5='https://images2.vudu.com/poster2/2082195-168'
                src6='https://images2.vudu.com/poster2/2071695-168'
                src7='https://images2.vudu.com/poster2/2040110-168'
            />
        </>
    )
}

export default Movie