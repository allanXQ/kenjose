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
        left:'30%',
      }
    },
    maingriditem:{
      marginLeft:50,
      marginTop:20,
      marginRight:50,
      border:'2px solid rgb(241, 237, 237)',
      borderRadius:10,
      padding:10,
      width:window.screen.availWidth,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }))

const Contacts = () => {
  const classes = useStyles()
  const [contacts,setcontacts] = useState()
  useEffect(()=>{
    axios.get('/contacts').then((res)=>{
        const contact = res.data.payload
        setcontacts(contact)
    })
},[])

const results = []

  return (
    <>
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
          // src={process.env.PUBLIC_URL + '/images/aboutbanner.png'}
           className={classes.bannerimage}></img>
          <Typography className={classes.bannertypo}>Home - Contacts</Typography>
        </Grid>
        <Grid item style={{
          position:'relative',
          left:'40%',
          top:30,
          marginBottom:50,
          fontWeight:'bold',
          fontSize:20
        }}>Contact Us</Grid>
        <Grid item className={classes.maingriditem}>
          <div>
            
            {
              contacts ? 
              Object.entries(contacts[0]).map(([key, value]) => {
                if(key!=='_id')
                return <Typography key={key}>{key.toUpperCase()}: {value}</Typography>
              })          
            :<>page loading</>
            }          
          </div>
          
     

            
        </Grid>
      </Grid>
    </Box>
    {/* <Footer/> */}
    </>
  )
}

export default Contacts