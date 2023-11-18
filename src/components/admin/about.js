import { TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import Navbar from "./navbar"

const AdminAbout = () => {
  let about
  const handle_submit = async (e)=>{
    e.preventDefault()
    await axios.post('/about', about).then(res=>{
        console.log(res.data)
    })
}
  return (
    <div>
        <Navbar/>
        <form style={{
            display:'flex',
            flexDirection:"column",
            width: 500,
            marginLeft:20
        }}>
            <>
            <TextField multiline
                rows={3}
                type='text' placeholder='Company'></TextField>
            <TextField multiline
                rows={3}
                type='text' placeholder='Product'></TextField>
            <TextField multiline
                rows={3}
                type='text' placeholder='Team'></TextField>
            <TextField multiline
                rows={3}
                type='text' placeholder='Customers'></TextField>
            </>            
            <button type='submit' onClick={(e)=>{
                about = {
                    company:document.querySelector("[placeholder='Company']").value,
                    product:document.querySelector("[placeholder='Product']").value,
                    team:document.querySelector("[placeholder='Team']").value,
                    customers:document.querySelector("[placeholder='Customers']").value,
                   
                }
                handle_submit(e)}}>Submit</button>
        </form>
        
    </div>
  )
}

export default AdminAbout