"use client"
import React from 'react'
import { CustomButton, Hero, Upload } from '../components'
import { pdf2word } from '../assets'

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
        <Upload subtitle="PDF to Word"/>
    </div>
    <div className="grid grid-cols-1 m-5">
        <CustomButton 
        title="Convert"
        btnType="button"
        containerStyles="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        handleClick={() => console.log('Button clicked!')}
        textStyles="text-lg"
        />
    </div>
</>

    )
}

export default Pdf2Word