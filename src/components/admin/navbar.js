import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

const styledLink = {
  // float: 'left',
  // color: '#f2f2f2',
  // textAlign: 'center',
  // padding: '14px 16px',
  // textDecoration: 'none',
  // fontSize: '17px',
}

const Navbar = () => {
  return (
      <AppBar position='sticky' elevation={0} sx={{
        backgroundColor:'white'
      }}>
        <Toolbar style={{position:'relative'}}>
          <div>
          <img src={logo} style={{
            width:'30%'
          }}></img>
          </div> 
          
          <div style={{
            position:'relative',
            left:130,
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem'
            
          }}>
            <Link to='/admin/upload'>Upload</Link>
            <Link to='/admin/about'>About Us</Link>
            <Link to='/admin/contacts'>Update Contacts</Link>
          </div>
          <div style={{
            position:'relative',
            left:'45%'
          }}>
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