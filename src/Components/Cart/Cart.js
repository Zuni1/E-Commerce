import React from 'react'
import { Grid, Box, Typography, Button, Rating } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import {Increment, Decrement} from '../../Redux/Reducer'
import Review from './Review/Review';

const Card = () => {

  const [value, setValue] = React.useState(2);
  const [showMore, setShowMore] = React.useState(false)
  const myState = useSelector(state => state.user.cart)
  const dispatch = useDispatch()

  const text="PURCHASE ELVIS GET THE 5-MOVIE ELVIS BUNDLE FOR $17.99. A thoroughly cinematic drama, Elvis's story is seen through the prism of his complicated relationship with his enigmatic manager, Colonel Tom Parker. As told by Parker, the film delves into the complex dynamic between the two spanning over 20 years, from Presley's rise to fame to his unprecedented stardom, against the backdrop of the evolving cultural landscape and loss of innocence in America. Central to that journey is one of the significant and influential people in Elvis's life, Priscilla Presley."

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
    items: {
      padding: '20px',
      width: '45%',
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
    dispatch(Increment())
    console.log("1 item is removed from Cart")
  }

  return (
    <Grid sx={{bgcolor: 'background.default', color: 'text.primary'}}>
      <Grid style={style.box}>
        <Grid>
          <img style={style.img} src='https://images2.vudu.com/poster2/1196579-168' />
        </Grid>

        <Box sx={style.items}>
          <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom>Elvis</Typography>
          <Typography variant="body1" gutterBottom>Drama | Music/Musical | Jun 24</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}

          />
          <Grid container sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', marginTop: '15px'}}>
            <Button sx={{width: '45%'}} variant="outlined">Trailer</Button>
            <Button sx={{width: '45%'}} variant="outlined">⊕ List</Button>
          </Grid>
          
          <Typography variant="body1" gutterBottom>
            {showMore ? text : `${text.substring(0, 200)} ...`}
            <Button sx={{fontWeight: 'bold', marginLeft: '20px'}} onClick={() => setShowMore(!showMore)}> {showMore ? "Less" : "More"} </Button>
          </Typography>
          
          <Grid container sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
            <Button sx={{width: '45%'}} variant="contained">Buy $24.99</Button>
            <Button sx={{width: '45%'}} variant="contained" onClick={handleIncrement}>Add to Cart</Button>
          </Grid>
        </Box>
        
        <Grid container sx={{display: 'flex', flexDirection: 'column', ml: '8%'}}>
          <Typography variant="h5" gutterBottom>Your Cart</Typography>

          <Box sx={{border: '1px solid #003452', padding: '10px'}}>
            <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom>Elvis</Typography>
            
              <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <img style={style.img} src='https://images2.vudu.com/poster2/1196579-168' />

                <Grid>
                    <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom> Availability </Typography>
                    <Typography variant="body1" gutterBottom> In Stock </Typography>
                  </Grid>

                <Grid container sx={{display: 'flex', height: 'auto', width: 'auto', justifyContent: 'center', alignItems: 'center'}}>
                  <Button variant='contained' onClick={handleIncrement}>
                    <Typography variant="h6" gutterBottom> + </Typography>
                  </Button>

                  <Typography sx={{ml: 2, mr: 2}} variant="h5" gutterBottom>{myState}</Typography>

                  <Button variant='contained' disabled={myState === 0} onClick={handleDecrement}>
                    <Typography variant="h6" gutterBottom> - </Typography>
                  </Button>

                </Grid>

                  <Grid>
                    <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom> Total </Typography>
                    <Typography variant="body1 " gutterBottom> $24.99 </Typography>
                  </Grid>

              </Grid>
          </Box>

        </Grid>
      </Grid>

      <Grid style={style.review}>
        <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom> Reviews </Typography>
        <Grid container sx={{display: 'flex'}}>
          <Grid item xs={6} md={4}>
            <Review 
              name='Richard Roeper' 
              caption='Chicago Sun-Times'
              review='Baz Luhrmann brilliantly floods our senses with arresting sights and sounds.'
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Review
              name='Peter Travers'
              caption='ABC News'
              review='Baz Luhrmanns bejeweled battering ram of a biopic is all over the place, which can be distracting, but the grit and grace of Austin Butlers performance as The King is a thing of beauty. A star is born right here.'
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Review
              name='Christy Lemire'
              caption='FilmWeek (NPR)'
              review='A wildly over-the-top and extremely entertaining biopic of Elvis Presley.'
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Review
              name='Alison Willmore'
              caption='New York Magazine/Vulture'
              review='I liked it, though my corneas did feel a little crunchy afterward.'
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Review
              name='James Berardinelli'
              caption='ReelViews'
              review="Luhrmann's movie achieves its goals of highlighting Elvis' music while providing a capable, if imperfect, abstract of his life. For fans of the icon and his music, it hits enough sweet spots to be worthy of a theatrical viewing."
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Review
              name='Ty Burr'
              caption="Ty Burr's Watch List"
              review="Baz Luhrmann turns the life of Elvis Aaron Presley into a three-ring circus with more sensation than sense in Elvis. But its got a good beat and you can dance to it."
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Review
              name='Sara Michelle Fetters'
              caption="MovieFreak.com"
              review="Its clear Luhrmann is more interested in mythmaking, era-hopping, and genre-melding than he is in trying to dig all that deeply into the complex cultural, racial, and political realities of Presleys life."
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Review
              name='K. Austin Collins'
              caption='Rolling Stone'
              review='Elvis, in the epic tradition of all of Luhrmanns work, is a brash, overwhelming experience... Its too much. Yet if it were any less excessive, it wouldnt be as doggedly effective as it often is.'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Card