"use client"
import React from 'react'
import { CustomButton, Hero, ImageToText, Upload } from '../components'
import { img2text } from '../assets'

const Pdf2Word = () => {
  return (
<>
    <Hero 
        title="Image to Text Converter"
        description="From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack." 
        image= {img2text}
        buttonText="Convert Image to Text"
        section="img2txt"      
    />    
    
    <div className="grid grid-cols-1 m-5">
        <ImageToText />
    </div>
    
</>

    )
}

export default Pdf2Word