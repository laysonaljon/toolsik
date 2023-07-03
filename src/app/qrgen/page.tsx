"use client"

import React from 'react';
import { CustomButton, Hero, LinkToQR } from '../components';
import { qrgen } from '../assets';

const Pdf2Word = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
      <Hero
        title="QR Code Generator"
        description="From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack."
        image={qrgen}
        buttonText="Try to Generate QR Code"
        section="qr"
      />
      
      <div className="grid grid-cols-1 m-5">
        <LinkToQR />
      </div>

      
    </>
  );
};

export default Pdf2Word;
