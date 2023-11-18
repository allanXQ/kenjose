import { Box, createTheme, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import aboutbanner from '../images/aboutbanner.png'
import Footer from './footer'
import { createStyles, makeStyles } from '@mui/styles'
import axios from 'axios'

const theme = createTheme({})
const useStyles = makeStyles(() =>
  createStyles({
    bannerimage:{
      position:'relative',
      left:-190,
      width:'130%',
      height:'100%',
      [theme.breakpoints.down('sm')]:{
        width:600
      }
    },
    bannertypo:{
      position:'absolute',
      fontWeight:'bold',
      top:40,
      left:'40%',
      color:'white',
      [theme.breakpoints.down('sm')]:{
        left:'35%',
      }
    },
    aboutus:{
      position:'relative',
      left:'40%',
      top:30,
      marginBottom:50,
      fontWeight:'bold',
      fontSize:20,
      [theme.breakpoints.down('sm')]:{
        marginBottom:50,
        left:"34%"
      }
    },
    maingrid:{
      position:'relative',
      top:80,
      left:-30,
       marginLeft:50,
       marginTop:90,
       marginRight:50,
      border:'1px solid rgb(241, 237, 237)',
      borderRadius:10,
      padding:10,
      width:1200,
      display: 'grid',
      gap: '1rem',
      [theme.breakpoints.down('sm')]:{
        top:40,
        left:5,
        width:350
      }
    },
    abouttypo:{
      [theme.breakpoints.down('sm')]:{
        width:340
      }
    }
  }))


const styledheader={
  fontWeight:'bold',
  marginBottoma:5
}

const About = () => {
  const classes=useStyles()
  const [about,setabout] = useState()
  useEffect(()=>{
    axios.get('/about').then((res)=>{
        const resabout = res.data.payload
        setabout(resabout)
    })
},[])
  return (
    <Box sx={{
      [theme.breakpoints.down('sm')]:{
        overflowX:'hidden'
      }
    }}> 
    <Navbar/>
    <Box>
      <Grid container>
        <Grid item sx={{
          position:'relative',
          width:"100%",
          height:100,
          
        }}>
          <img 
          src={aboutbanner}
          //  src={process.env.PUBLIC_URL + '/images/aboutbanner.png'}
           className={classes.bannerimage}></img>
          <Typography className={classes.bannertypo}>Home - About</Typography>
        </Grid>
        <Grid item className={classes.aboutus}>About Us</Grid>
        <Grid item className={classes.maingrid}>
          <div className={classes.abouttypo}>
          {
              about ? 
                  <>
                  <Typography style={styledheader}>Our Company</Typography>
          <Typography>
          {about[0].company}
          </Typography>
           <div className={classes.abouttypo}>
             <Typography style={styledheader}>Our Product</Typography>
             <Typography>
             {about[0].product}
             </Typography>
             </div>
             <div className={classes.abouttypo}>
             <Typography style={styledheader}>Our Team</Typography>
             <Typography>
             {about[0].team}
             </Typography>
             </div>

             <div className={classes.abouttypo}>
             <Typography style={styledheader}>Valuable Customers</Typography>
             <Typography>
             {about[0].customers} 
             </Typography>
             </div>
            </>      
            :<>page loading</>
            }
          
            </div>
        </Grid>
      </Grid>
    </Box>
    {/* <Footer/> */}
    </Box>
  )
}

export default About