import { AppBar, Box, Button, createTheme, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { createStyles, makeStyles } from '@mui/styles';

const theme = createTheme({})  
const useStyles = makeStyles(() =>
  createStyles({
    toolbar:{
      position:'relative'
    },
    logo:{
      width:'30%',
      [theme.breakpoints.down('sm')]:{
        width:70,
        position:'relative',
        left:-10
      }
    },
    linkdiv:{
      position:'relative',
      left:130,
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5rem',
      [theme.breakpoints.down('sm')]:{
        left:0
      }
    },
    link:{
      [theme.breakpoints.down('sm')]:{
        fontSize:15
      }
    },
    icondiv:{
      position:'relative',
      left:'45%'
    },
  }))

const Navbar = (props) => {
  const classes = useStyles()
  return (
      <AppBar position='sticky' elevation={0} 
      sx={{
        backgroundColor:'white'
      }}>
        <Toolbar className={classes.toolbar}>
          <div>
          <img src={logo} className={classes.logo}></img>
          </div>
          
          <div className={classes.linkdiv}>
            <Link to='/home' className={classes.link}>Home</Link>
            <Link to='/about' className={classes.link}>About</Link>
            <Link to='/sculptures' className={classes.link}>Sculptures</Link>
            <Link to='/contacts' className={classes.link}>Contacts</Link>
          </div>
          <div className={classes.icondiv}>
          <IconButton
            size="large"
            edge="start"
            // color="black"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <SavedSearchIcon sx={{
              fontSize:40
            }}/>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar