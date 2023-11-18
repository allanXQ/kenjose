import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { Box, Button, TextField } from '@mui/material'


const styled_inpufield = {
    marginBottom:10
}

const Upload = () => {
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('')
    // const [imagedata, setimagedata] = useState({
    //     imagename:'',
    //     price:'',
    //     weight:'',
    //     dimensions:'',
    //     material:'',
    //     description:''
    // })
    const [uploadedfile, setuploadedfile] = useState({})
    const onChange= (e)=>{
        setFile(e.target.files[0])
        setFilename(e.target.files.name)
        console.log(file)
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        const imagedata = JSON.stringify({
        name:document.querySelector("[name='name']").value,
        price:document.querySelector("[name='price']").value,
        weight:document.querySelector("[name='weight']").value,
        dimensions:document.querySelector("[name='dimensions']").value,
        material:document.querySelector("[name='material']").value,
        description:document.querySelector("[placeholder='Brief description']").value
        })
        const formdata = new FormData()
        formdata.append('file',file)
        formdata.append('imagedata',imagedata)

        await axios.post('/upload', formdata,
        {
            headers:{
                "Content-Type":"multipart/form-data",
            }
            }
            ).then(res=>{
            const {filename, filepath} = res.data
            setuploadedfile({filename, filepath})
        }).catch(err=>{console.log('error')})

        // await axios({
        //     method:'post',
        //     url:'/upload',
        //     headers:{"Content-Type":"multipart/form-data",},
        //     data:{
        //         formdata,
        //         // imagedata
        //     }
        // }).then(res=>console.log(res))
        
    }
    return (
        <Box>
            <form style={{
                display:'grid',
                columnGap:100,
                width:400,
                position:'relative',
                top:50,
                left:100
            }} method='POST' encType="multipart/form-data">
                <TextField type='text' name='name' placeholder='Image name' style={styled_inpufield}></TextField>
                <TextField type='text' name='price' placeholder='Price' style={styled_inpufield}></TextField>
                <TextField type='text' name='weight' placeholder='Weight' style={styled_inpufield}></TextField>
                <TextField type='text' name='dimensions' placeholder='Dimensions' style={styled_inpufield}></TextField>
                <TextField type='text' name='material' placeholder='Material' style={styled_inpufield}></TextField>
                <TextField 
                multiline 
                rows={4}
                type='text' name='description' placeholder='Brief description'></TextField>
                <TextField type='file' id='fileupload' name="imageupload" onChange={onChange}></TextField>
                <button type='submit' value='upload' onClick={onSubmit}>Upload</button>
            </form>
        </Box>
    )
}

export default Upload
