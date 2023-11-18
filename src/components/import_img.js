import axios from 'axios'
import React, { useEffect } from 'react'

export var imagenames = []

const ImageImport = () => {
    useEffect(()=>{
        axios.get('/images').then((res)=>{
            const images = res.data.payload
            images.forEach(image => {
                // window[image.name] = require(`../images/uploads/${image.filename}`)
                imagenames.push(image.name)
            });
        })

    })

  return (
    <div>ImageImport</div>
  )
}

export default ImageImport