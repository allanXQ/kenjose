import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'


const Footer = () => {
  return (
    <>
    <Grid container style={{backgroundColor:'grey'}}>
        <Grid item sx={{display:'inline-flex'}}>
            <div style={{width:400}}> 
                <Typography>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Quis 
                ipsum suspendisse ultrices gravida. 
                </Typography>
            </div>
            <div>
                <List>
                    <ListItem>Links</ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Sculptures</ListItem>
                </List>
            </div>
            <div>
                <List>
                    <ListItem>Our Contacts</ListItem>
                    <ListItem>+254798765432</ListItem>
                    <ListItem>kenjose@kenjose.com</ListItem>
                    <ListItem>+254798765432</ListItem>
                </List>
            </div>
        
        </Grid>
    </Grid>
    </>
  )
}

export default Footer
