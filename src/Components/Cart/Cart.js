import React from 'react'
import { Grid, Box, Typography, Button, Rating } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from "react-i18next";

import {Increment, Decrement} from '../../Redux/Reducer'
import Review from './Review/Review';

const Card = () => {

  const [value, setValue] = React.useState(2);
  const [showMore, setShowMore] = React.useState(false)
  const myState = useSelector(state => state.user.cart)
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.user.movies)

  var text = ''
  {selector.map (data => { 
    while(data.id === 7){
      return(
       text = data.description
      )
    }
  })}

  const style= {
    box: {
      padding: '30px',
      borderBottom: '1px solid #003452',
      display: 'flex',
      // backgroundColor: '#041c2c'
    },
    img: {
      borderRadius: '5px',
    },
    review: {
      padding: '40px',
      borderBottom: '1px solid #003452',
    }
  }

  const handleIncrement = () => {
    dispatch(Increment())
    console.log("1 item is added to Cart")
  }

  const handleDecrement = () => {
    dispatch(Decrement())
    console.log("1 item is removed from Cart")
  }

  return (
    <Grid sx={{bgcolor: 'background.default', color: 'text.primary'}}>
      <Grid style={style.box}>
      {selector.map((data) => {
        while(data.id === 7){
        return(<>
        <Grid>
          <img style={style.img} src={data.image} />
        </Grid>

        <Grid container item md={6} sx={{padding: "20px", display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom>{data.name}</Typography>
            <Typography variant="body1" gutterBottom>{data.type} | {data.type2} | {data.date}</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Box sx={{display: 'flex', marginBottom: '15px', marginTop: '15px'}}>
              <Button sx={{width: '40%', height: '40px', mr: 2}} variant="outlined">Trailer</Button>
              <Button sx={{width: '40%', height: '40px'}} variant="outlined">⊕ List</Button>
            </Box>
            
            <Typography variant="body1" gutterBottom>
              {showMore ? text : `${text.substring(0, 200)} ...`}
              <Button sx={{fontWeight: 'bold', marginLeft: '20px'}} onClick={() => setShowMore(!showMore)}> {showMore ? "Less" : "More"} </Button>
            </Typography>
            
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
              <Button sx={{width: '45%', height: '50px'}} variant="contained">{data.price}</Button>
              <Button sx={{width: '45%', height: '50px'}} variant="contained" onClick={handleIncrement}>Add to Cart</Button>
            </Box>
        </Grid>
        
        <Grid container items md={8} sx={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h5" gutterBottom>Your Cart</Typography>

          <Box sx={{border: '1px solid #003452', padding: '10px'}}>
            <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom>{data.name}</Typography>
            
              <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <img style={style.img} src={data.image} />

                <Box>
                  <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom> Availability </Typography>
                  <Typography variant="body1" gutterBottom> In Stock </Typography>
                </Box>

                <Box sx={{display: 'flex', height: 'auto', width: 'auto', justifyContent: 'center', alignItems: 'center'}}>
                  <Button variant='contained' onClick={handleIncrement}>
                    <Typography variant="h6" gutterBottom> + </Typography>
                  </Button>

                  <Typography sx={{ml: 2, mr: 2}} variant="h5" gutterBottom>{myState}</Typography>

                  <Button variant='contained' disabled={myState === 0} onClick={handleDecrement}>
                    <Typography variant="h6" gutterBottom> - </Typography>
                  </Button>
                </Box>

                  <Box>
                    <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom> Total </Typography>
                    <Typography variant="body1 " gutterBottom> {data.price} </Typography>
                  </Box>

              </Grid>
          </Box>
        </Grid>
        </>)}})}
      </Grid>

      <Grid style={style.review}>
        <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom> {t('Reviews')} </Typography>

        <Grid container sx={{display: 'flex'}}>
          {selector.map((data) => {return(<>
            <Grid item xs={6} md={4}>
              <Review 
                name={data.reviewTitle}
                caption={data.caption}
                review={data.review}
              />
            </Grid>
          </>)})}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Card