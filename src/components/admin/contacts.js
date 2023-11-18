import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState,useLayoutEffect } from 'react'
import Navbar from './navbar'

const AdminContacts = () => {
    // const [contacts, setcontacts] = useState({})
    let contacts
    let get_contacts
    useLayoutEffect(()=>{
        axios({
            method:'get',
            url:'/contacts',
        }).then(res=>{
           let get_contacts = {
                email:res.data.payload.email,
                phone:res.data.payload.phone,
                address:res.data.payload.address,
                location:res.data.payload.location,
                whatsapp:res.data.payload.whatsapp,
                twitter:res.data.payload.twitter,
                facebook:res.data.payload.facebook,
                instagram:res.data.payload.instagram
            }
        })
    })

    const handle_submit = async (e)=>{
        e.preventDefault()
        await axios.post('/contacts', contacts).then(res=>{
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
            {get_contacts ? 
            <>
            <TextField placeholder='Email' value={get_contacts.email}></TextField>
            <TextField placeholder='Phone' value={get_contacts.phone}></TextField>
            <TextField placeholder='P.O Box' value={get_contacts.address}></TextField>
            <TextField placeholder='Location' value={get_contacts.location}></TextField>
            <TextField placeholder='Whatsapp' value={get_contacts.whatsapp}></TextField>
            <TextField placeholder='Facebook' value={get_contacts.facebook}></TextField>
            <TextField placeholder='Twitter' value={get_contacts.twitter}></TextField>
            <TextField placeholder='Instagram' value={get_contacts.instagram}></TextField>
            </> 
            : 
            <>
            <TextField placeholder='Email'></TextField>
            <TextField placeholder='Phone'></TextField>
            <TextField placeholder='P.O Box'></TextField>
            <TextField placeholder='Location'></TextField>
            <TextField placeholder='Whatsapp'></TextField>
            <TextField placeholder='Facebook'></TextField>
            <TextField placeholder='Twitter'></TextField>
            <TextField placeholder='Instagram'></TextField>
            </>
            }
            
            <button type='submit' onClick={(e)=>{
                contacts = {
                    email:document.querySelector("[placeholder='Email']").value,
                    phone:document.querySelector("[placeholder='Phone']").value,
                    address:document.querySelector("[placeholder='P.O Box']").value,
                    location:document.querySelector("[placeholder='Location']").value,
                    whatsapp:document.querySelector("[placeholder='Whatsapp']").value,
                    twitter:document.querySelector("[placeholder='Twitter']").value,
                    facebook:document.querySelector("[placeholder='Facebook']").value,
                    instagram:document.querySelector("[placeholder='Instagram']").value
                }
                handle_submit(e)}}>Submit</button>
        </form>
        
    </div>
  )
}

export default AdminContacts