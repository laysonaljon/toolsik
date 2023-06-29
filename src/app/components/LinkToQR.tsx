"use client"

import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import htmlToImage from 'html-to-image';
import Image from 'next/image';
import { CustomButton } from '.';

const LinkToQR = () => {
  const [text, setText] = useState('');
  const qrCodeRef = useRef<HTMLDivElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  async function handleCopy() {
    const canvas = await convertQRCodeToCanvas();
    if (canvas) {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': await canvasToBlob(canvas) })
        ]);
        // Add any desired feedback or notification for successful copy
      } catch (error) {
        console.error('Failed to copy QR image:', error);
        // Handle error if copying fails
      }
    }
  }

  async function handleDownload() {
    const canvas = await convertQRCodeToCanvas();
    if (canvas) {
      const imageUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'qr_code.png';
      link.click();
    }
  }

  async function convertQRCodeToCanvas(): Promise<HTMLCanvasElement | null> {
    if (qrCodeRef.current) {
      try {
        const node = qrCodeRef.current;
        const canvas = await htmlToImage.toCanvas(node);
        return canvas;
      } catch (error) {
        console.error('Failed to convert QR code to canvas:', error);
      }
    }
    return null;
  }

  function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        }
      });
    });
  }

  return (
    <section className="section-padding section__bg">
      <div className="justify-center text-center m-5">
        <h2 className="text-5xl font-bold mb-10 text-center gradient__text">Link to QR</h2>
      </div>

      <div className="p-5 bg-gray-50">
        <div ref={qrCodeRef}>
          <QRCode 
          value={text} 
          bgColor = "#FFFFFF"
          fgColor = "#031b34"
          />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 m-5">
          <label htmlFor="link-input" className="block mb-2 text-sm font-medium text-white dark:text-white">
            Enter Link:
          </label>
          <input
            type="website"
            id="link-input"
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="www.example.com"
            onChange={handleChange}
          />
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            We'll never share your details.{' '}
            <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="flex grid-cols-1 m-5">
          <CustomButton
            title="Copy"
            btnType="button"
            containerStyles="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            handleClick={handleCopy}
            textStyles="text-lg"
          />
          <CustomButton
            title="Download"
            btnType="button"
            containerStyles="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            handleClick={handleDownload}
            textStyles="text-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LinkToQR;
