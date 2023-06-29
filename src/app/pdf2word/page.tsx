"use client"
import React from 'react'
import { CustomButton, Hero, Upload } from '../components'
import { pdf2word } from '../assets'
import PDFToWord from '../components/PDFToWord'

const Pdf2Word = () => {
  return (
<>
    <Hero 
        title="PDF to Word Converter"
        description="From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack." 
        image= {pdf2word}
        buttonText="Convert PDF to Word"      
    />
    
    <div className="grid grid-cols-1 m-5">
        <PDFToWord />
    </div>
</>

    )
}

export default Pdf2Word