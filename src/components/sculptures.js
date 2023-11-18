import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Footer from './footer'
import Navbar from './navbar'
import axios from 'axios'
import { Card, CardContent, createTheme, Grid, MenuItem, Modal,TextField, Typography } from '@mui/material'
import {makeStyles, createStyles} from '@mui/styles'
import { Box, ThemeProvider } from '@mui/system'
import aboutbanner from '../images/aboutbanner.png'
import { Link } from 'react-router-dom'
import HighlightOff from '@mui/icons-material/HighlightOff'
import Visibility from '@mui/icons-material/Visibility'
import { ClassNames } from '@emotion/react'

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
    ourproducts:{
      position:'relative',
      left:'40%',
      top:30,
      marginBottom:50,
      fontWeight:'bold',
      fontSize:20,
      [theme.breakpoints.down('sm')]:{
        marginBottom:50,
        left:"30%"
      }
    },
    mainimgdiv:{
      position:'relative',
      left:70,
      display:'grid',
      gridTemplateColumns: 'repeat(4, 19.1rem)',
      gridTemplateRows: 'repeat(0, 20rem)',
      [theme.breakpoints.down('sm')]:{
        display:'block',
        left:8,
      }
      },
      mainimg:{
        position:'relative',
        marginBottom:40,
        width:280,
        height:300,
        [theme.breakpoints.down('sm')]:{
          width:340,
          marginBottom:20
        }
        },
    modalimage:{
      width:400,
      [theme.breakpoints.down('sm')]:{
        width:325,
        height:300
      }
    },
    modaldiv:{
      position:'relative',
      top:30,
      left:50,
      width:500,
      [theme.breakpoints.down('sm')]:{
        position:'relative',
        display:'block',
        left:0,
        width:300,
        top:0
      }
    },
    modaltypo:{
      fontSize:15,
      opacity:0.8,
      width:400,
      wordWrap:'break-word',
      marginRight:20,
      [theme.breakpoints.down('sm')]:{
       width:320,
     }
   }
  })
  )


const styleddesc = {
  fontSize:15,
  fontFamily: 'Source Serif Pro, serif',
}

const Sculptures = () => {
  const classes = useStyles()
  const [description, setdescription] = useState(false)
  const [imagesrc, setimagesrc] = useState()
  const [product_images, setimages] = useState([])
  const [filter, setfilter] = useState('')
  const [imagedata,setimagedata] = useState({
    name:'',
    weight:'',
    dimensions:'',
    // price:'',
    material:'',
    description:''
  })
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
        setimages(images)
    })
},[])

// const search_parameters = ['name', 'material']
// const params = useRef()
// const val = useRef()
// const handleChange = (e)=>{
//   e.preventDefault()
//   console.log(params,val.current.value)
//   setfilter('material')
//   setparameter('bronze')
// }
  
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
          // src={process.env.PUBLIC_URL + '/images/aboutbanner.png'}
           className={classes.bannerimage}></img>
          <Typography className={classes.bannertypo}>Home - Sculptures</Typography>
        </Grid>
        <Grid item className={classes.ourproducts}>Our Products</Grid>

        <Grid item sx={{
          position:'relative',
          width:"100%",
          height:100, 
          [theme.breakpoints.down('sm')]:{
            display:'relative',
            top:40,
            left:0
          }
        }}>
        <form style={{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap',          
        }}>
        <TextField
          label="Search"
          placeholder="name/material"
          sx={{
            maxWidth:200,
            [theme.breakpoints.down('sm')]:{
              maxWidth:180
            }
          }}
          onChange={e=>{setfilter(e.target.value)}}
        />
        </form>
      </Grid>

        <Grid item xs={12} sx={{
          position:'relative',
          top:-10,
          [theme.breakpoints.down('sm')]:{
            top:10
          }
        }}>
          <div className={classes.mainimgdiv}>
          {product_images ?  ( product_images.filter(image=>{
            if(filter === '') return image
            else{
              if(image.name.toLowerCase().includes(filter.toLowerCase())){
                return image
              }
              if(image.material.toLowerCase().includes(filter.toLowerCase())){
                return image
              }
            }
          }).map(image=>{
            return (
              <div key={image.filename} className={classes.mainimg}>
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
                    setimagesrc(process.env.PUBLIC_URL + `/uploads/${image.filename}`)
                    setimagedata({
                      name:image.name,
                      weight:image.weight,
                      dimensions:image.dimensions,
                      material:image.material,
                      description:image.description
                    })
                    }}></Visibility>
            </div>
            )
          }) )
          : <>loading...</> 
        }
          </div>
        
         <Modal
          open={description}
          
          >
          <Card sx={{
              display: description ? 'block' : 'none' ,
              position:'absolute',
              top:40,
              left:200,
              zIndex:1,
              [theme.breakpoints.down('sm')]:{
                // display:'block',
                left:0,
                width:360,
                height:600
              }
          }}>
            <HighlightOff sx={{
                '&:hover':{
                  cursor:'pointer'
                },
                position:"relative",
                float:'right',
                right:0,
                [theme.breakpoints.down('sm')]:{
                  float:'none',
                  left:'90%',
                  top:10
                }
              }} 
              onClick={
                ()=>{setdescription(false)
                }}
              ></HighlightOff>            
              <CardContent
               sx={{
                display:'inline-flex',
                width:900,
                height:320,
                [theme.breakpoints.down('sm')]:{
                  display:'block',
                  width:300,
                  marginBottom:100
                }
              }}
              >
              <img src={imagesrc} className={classes.modalimage}></img>
              <div className={classes.modaldiv}>
              <Typography className={classes.modaltypo} style={{fontFamily: 'Source Serif Pro, sans serif'}}>
                {imagedata.description}
              </Typography>
              <div style={{marginTop:10}}>
              <Typography style={styleddesc}>Name: {imagedata.name}</Typography>
              <Typography style={styleddesc}>Dimensions: {imagedata.dimensions}</Typography>
              <Typography style={styleddesc}>Weight: {imagedata.weight} KGs</Typography>
              <Typography style={styleddesc}>Material: {imagedata.material}</Typography>
              </div>
              </div>
              </CardContent>
          </Card>          
          </Modal>
        </Grid>
        </Grid>
    </Box>
    {/* <Footer/> */}
    </Box>
  )
}

export default Sculptures