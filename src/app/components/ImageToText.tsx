"use client"
import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { createWorker, Worker } from 'tesseract.js';
import Upload from './Upload';

const ImageToText = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [textResult, setTextResult] = useState<string>("");
  const [buttonLabel, setButtonLabel] = useState<string>("Copy Text");
  const [buttonColor, setButtonColor] = useState<string>("bg-blue-500");

  const convertImageToText = useCallback(async () => {
    if (!selectedImage) return;
    const worker = await createWorker();
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const { data } = await worker.recognize(selectedImage);
    setTextResult(data.text);
    await worker.terminate();
    setButtonLabel("Copy Text"); // Reset button label
    setButtonColor("bg-blue-500"); // Reset button color
  }, [selectedImage]);

  useEffect(() => {
    convertImageToText();
  }, [selectedImage, convertImageToText])

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setTextResult("");
      setButtonLabel("Copy Text"); // Reset button label
      setButtonColor("bg-blue-500"); // Reset button color
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(textResult);
    setButtonLabel("Copied"); // Update button label
    setButtonColor("bg-green-500"); // Update button color
    setTimeout(() => {
      setButtonLabel("Copy Text"); // Reset button label after a short delay
      setButtonColor("bg-blue-500"); // Reset button color after a short delay
    }, 2000);
  };


  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);


  return (
    <section className="section-padding section__bg" id="img2txt">
        <div className="justify-center text-center m-5">
            <h2 className="text-5xl font-bold mb-10 text-center gradient__text">Gets words in image!</h2>
        </div>
        
        <Upload  
        subtitle="SVG, PNG, JPG or GIF (MAX. 800x400px)"
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        selectedFile={selectedImage}
        handleOnChange = {handleChangeImage}
        fileType = "image/*"
        />

        <div className="mt-8 grid grid-cols-2 gap-8">
            {selectedImage && (
            <div className="bg-gray-200 rounded-lg overflow-hidden p-3">
                <img src={URL.createObjectURL(selectedImage)} alt="thumb" className="w-full h-full" />
            </div>
            )}
            {textResult && (
            <div className="bg-gray-200 rounded-lg p-4 flex flex-col items-center">
                <p className="text-gray-700 mb-4">{textResult}</p>
                <button
                className={`bg-white text-gray-700 font-semibold py-2 px-4 rounded ${buttonColor} hover:bg-green-600 transition-colors`}
                onClick={handleCopyText}
                >
                {buttonLabel}
                </button>
            </div>
            )}
        </div>
    </section>
    );
};

export default ImageToText;
