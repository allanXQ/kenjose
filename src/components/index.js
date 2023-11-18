import { Box,Card,CardContent,createTheme,Grid, Modal, Typography } from '@mui/material'
import {makeStyles, createStyles} from '@mui/styles'
import React, { useState } from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
// import lionbanner from '../images/lionbanner.webp'
import banner1 from '../images/banner1.jpg'
// import horseindex1 from '../images/horseindex1.jpg'
// import lionhead from '../images/lionhead.jpeg'
import zebra from '../images/post/trending/zebra.jpg'
import lizard from '../images/post/trending/lizard.jpg'
import giraffe from '../images/post/trending/giraffe.jpg'
import elephant from '../images/post/trending/elephant.jpg'
import horse from '../images/post/trending/horse.jpg'
import hippo from '../images/post/trending/hippo.jpg'
import warthog from '../images/post/trending/warthog.jpg'
import antelope from '../images/post/trending/antelope.jpg'
import horse2 from '../images/post/trending/horse2.jpg'
import duka from '../images/post/trending/duka.jpg'
import wildebeast from '../images/post/trending/wildebeast.jpg'
import ostrich from '../images/post/trending/ostrich.jpg'
import Footer from './footer'
import './style.css'
import Visibility from '@mui/icons-material/Visibility';
import HighlightOff from '@mui/icons-material/HighlightOff';

const theme = createTheme({})
const useStyles = makeStyles(() =>
  createStyles({
    bannergrid:{
      position:'relative',
      width:'100%',
      height:600,
      [theme.breakpoints.down('sm')]:{
        height:300
      }
    },
    bannerimage:{
      position:'relative',
      width:'100%',
      height:'100%',
      [theme.breakpoints.down('sm')]:{
        width:400,
        height:300
      }
    },
    bannerworddiv:{
      position:'absolute',
      top:'35%',
      left:'25%',
      [theme.breakpoints.down('sm')]:{
        top:80,
        left:32
      }
    },
    bannerfine:{
      color:'#ff6f00',
      fontSize:50,
      paddingLeft:'30%',
      margin:0,
      [theme.breakpoints.down('sm')]:{
        fontSize:30
      }
      },
    bannernew:{
      fontFamily: 'Source Serif Pro, serif',
      fontSize:70,
      color:'white',
      marginTop:10,
      marginBottom:20,
      [theme.breakpoints.down('sm')]:{
        fontSize:30
      }
    },
    bannerunique:{
      color:'white', 
      letterSpacing:10,
      paddingLeft:'20%',
      margin:0,
      [theme.breakpoints.down('sm')]:{
        fontSize:10,
        paddingLeft:15
      }
      },
    aboutgrid:{
      position:'relative',
      top:60,
      [theme.breakpoints.down('sm')]:{
        top:200
      }
    },
    aboutheader:{
      paddingLeft:68,
      fontSize:40,
      fontFamily: 'Source Serif Pro, serif',
      [theme.breakpoints.down('sm')]:{
        position:"relative",
        top:-200,
        fontSize:25,
        paddingLeft:120
      }
      },
    aboutdiv:{
      width:400,
      paddingRight:400,
      paddingLeft:68,
      position:'relative',
      top:-20,
      [theme.breakpoints.down('sm')]:{
        top:-10,
        width:350,
        paddingLeft:25
      }
    },
    abouttypo:{
      fontFamily: 'Source Serif Pro, serif',
      [theme.breakpoints.down('sm')]:{
        position:'absolute',
        width:'inherit',
        top:-200
      }
    },
    aboutimage:{
      width:'88%', 
      height:'100%',
      [theme.breakpoints.down('sm')]:{
        position:'relative',
        top:210
      }
      },
    aboutlink:{
      backgroundColor:'#ff6f00',
      padding:'2%',
      position:'relative',
      left:40,
      top:20,
      textDecoration:'none',
      borderRadius:5,
      color:'black',
      [theme.breakpoints.down('sm')]:{
        top:-90,
        left:90,
        bottom:20
      }
    },
    trendingheading:{
      position:'relative',
      left:470,
      marginBottom:20,
      fontSize:40,
      fontFamily: 'Source Serif Pro, serif',
      [theme.breakpoints.down('sm')]:{
        position:"relative",
        top:40,
        marginBottom:30,
        left:70,
        fontSize:25
      }},
    trending:{
      position:'relative',
      left:70,
      display:'grid',
      gridTemplateColumns: 'repeat(4, 19.1rem)',
      gridTemplateRows: 'repeat(0, 20rem)',
      [theme.breakpoints.down('sm')]:{
        display:'block',
        left:9,
        top:15
      }
      },
      trendingimages:{
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
          fontFamily: 'Source Serif Pro, serif',
          opacity:0.8,
          width:400,
          wordWrap:'break-word',
          marginRight:20,
          [theme.breakpoints.down('sm')]:{
           width:320,
         }
       },
       sculpturelinkcontainer:{
        position:'relative',
        left:620,
        top:0,
        paddingBottom:90,
        [theme.breakpoints.down('sm')]:{
          left:125,
          top:10,
          paddingBottom:20
        }
      },
       sculpturelink:{
        backgroundColor:'#ff6f00',
        textDecoration:'none',
        color:'black',
        padding:5,
        borderRadius:5,
        [theme.breakpoints.down('sm')]:{
          padding:'2%'
        }
        
      }
  }))  

const product_images = [lizard,giraffe,elephant,horse,zebra,hippo,
  warthog,antelope,horse2,duka,wildebeast,ostrich]

const Indexpage = () => {
  const classes = useStyles()
  const [description, setdescription] = useState(false)
  const [imagesrc, setimagesrc] = useState()
  const desc = ()=>{
    if(description){
      setdescription(false)
    }else{
      setdescription(true)
    }
  }

  const styleddesc = {
    fontSize:15,
    fontFamily: 'Source Serif Pro, serif',
 }

  return (
    <Box sx={{
      [theme.breakpoints.down('sm')]:{
        overflowX:'hidden'
      }
    }}>
    <Navbar/>
    <Box >
      <Grid container>
      <Grid item className={classes.bannergrid}>
          <img src={banner1} className={classes.bannerimage}></img>
          <div className={classes.bannerworddiv}>
            <p className={classes.bannerfine}>- FINE -</p>
            <p className={classes.bannernew}
            >New Sculpture Design</p>
            <p className={classes.bannerunique}>UNIQUE SCULPTURES</p>
          </div>
        </Grid> 
        <Grid item sx={{
          marginTop:10,
          [theme.breakpoints.down('sm')]:{
            marginTop:0
          }
          }}> 
          <div>
            <Grid container style={{position:'relative'}}>
              <Grid item xs={5} className={classes.aboutgrid}>
              <h1 className={classes.aboutheader}>About Us</h1>
              <div className={classes.aboutdiv}>
              <Typography className={classes.abouttypo}>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Quis 
                ipsum suspendisse ultrices gravida. 
                </Typography>
                <Link to='/about' className={classes.aboutlink}>See More</Link>
              </div> 
              </Grid>
              <Grid item xs={7} sx={{
                [theme.breakpoints.down('sm')]:{
                  position:'absolute',
                  top:0,
                  width:410
                },
              }}>
                <img src={zebra} className={classes.aboutimage}/>
              </Grid>             
            </Grid>
           </div>
        </Grid>
        <Grid item xs={12} sx={{
          position:'relative',
          top:50,
          [theme.breakpoints.down('sm')]:{
            top:300
          }
        }}>
          <h1 className={classes.trendingheading}>Trending Products</h1>
          <div 
            className={classes.trending}>
          {product_images.map(image=>{
            return (
              <div key={image} className={classes.trendingimages}>
                <img src={image} style={{
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
              }} onClick={
                ()=>{setdescription(false)}
              }></HighlightOff>            
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
              <div>
              <Typography className={classes.modaltypo} style={{fontFamily: 'Source Serif Pro, sans serif'}}>
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
          <div className={classes.sculpturelinkcontainer}>
          <Link to='/sculptures' className={classes.sculpturelink}>
                  See More
          </Link>
          </div>
        </Grid>
        </Grid>
    </Box>
    {/* <Footer/> */}
    </Box>
  )
}

export default Indexpage