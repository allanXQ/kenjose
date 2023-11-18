import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import axios from 'axios'
import { Card, CardContent, Grid, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import aboutbanner from '../images/aboutbanner.png'
import { Link } from 'react-router-dom'
import HighlightOff from '@mui/icons-material/HighlightOff'
import Visibility from '@mui/icons-material/Visibility'
// import ImageImport from './import_img'
// import { imagenames } from './import_img'

var imagenames = []

const styleddesc = {
  fontSize:15,
  fontFamily: 'Source Serif Pro, serif',
}

// const heading = {
// position:'relative',
// left:470,
// marginBottom:20,
// fontSize:40,
// fontFamily: 'Source Serif Pro, serif',
// }

const Sculptures = () => {
  const [description, setdescription] = useState(false)
  const [imagesrc, setimagesrc] = useState()
  // const [product_images, setimages] = useState([])
  console.log(imagenames)

  let product_images = imagenames
  const desc = ()=>{
    if(description){
      setdescription(false)
    }else{
      setdescription(true)
    }
  }

  useEffect(()=>{
    axios.get('/images').then((res)=>{
        const images = res.data.payload
        images.forEach(image => {
            // window[image.name] = require(`../images/uploads/${image.filename}`)
            imagenames.push(image)
        });
    })

})
  
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
           style={{
            position:'relative',
            left:-190,
            width:'130%',
            height:'100%'
          }}></img>
          <Typography style={{
            position:'absolute',
            fontWeight:'bold',
            top:40,
            left:'40%',
            color:'white',
          }}>Home - Sculptures</Typography>
        </Grid>
        <Grid item xs={12} sx={{
          position:'relative',
          top:50,
        }}>
          <div style={{
            position:'relative',
            left:70,
            display:'grid',
            gridTemplateColumns: 'repeat(4, 19.1rem)',
            gridTemplateRows: 'repeat(0, 20rem)',
            }}>
          {product_images.map(image=>{
            console.log(image)
            console.log(product_images)
            return (
              <div key={image} style={{
                position:'relative',
                marginBottom:40,
                width:280,
                height:300,
                }}>
                <img src={process.env.PUBLIC_URL + `/uploads/${image.filename}`} style={{
                  width:'inherit',
                  height:'inherit',
                }}>
                </img>
                <Visibility sx={{
                  '&:hover':{
                    cursor:'pointer'
                  },
                  position:'absolute',
                  top:10,
                  right:10,
                  color:'white',
                  zIndex:1
                  }} onClick={()=>{
                    desc() 
                    setimagesrc(image)
                    }}></Visibility>
            </div>
            )
          })}
          </div>
        
         <Modal disableEnforceFocus
          open={description}
          >
          <Card sx={{
              display: description ? 'block' : 'none' ,
              position:'absolute',
              top:40,
              left:200,
              zIndex:1
          }}>
            <HighlightOff sx={{
                '&:hover':{
                  cursor:'pointer'
                },
                position:"relative",
                float:'right',
                right:0,
              }} onClick={
                ()=>{setdescription(false)}
              }></HighlightOff>            
              <CardContent
               style={{
                display:'inline-flex'
              }}
              >
              <img src={imagesrc} style={{
                width:300,
                height:300
              }}></img>
              <div style={{
                position:'relative',
                top:30,
                left:50,
                width:500
              }}>
              <div>
              <Typography style={{
                 fontSize:15,
                 fontFamily: 'Source Serif Pro, serif',
              }}>
                Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit, sed do eiusmod tempor <br/>
                incididunt ut labore et dolore magna aliqua.
              </Typography>
              </div>
              <div style={{marginTop:10}}>
              <Typography style={styleddesc}>Name:</Typography>
              <Typography style={styleddesc}>Price:</Typography>
              <Typography style={styleddesc}>Dimensions:</Typography>
              <Typography style={styleddesc}>Weight:</Typography>
              <Typography style={styleddesc}>Material:</Typography>
              </div>
              </div>
              </CardContent>
          </Card>          
          </Modal>
          <div style={{
            position:'relative',
            left:620,
            top:0,
            bottom:90,
          }}>
          </div>
        </Grid>

        </Grid>
    </Box>
    {/* <Footer/> */}
    </>
  )
}

export default Sculptures