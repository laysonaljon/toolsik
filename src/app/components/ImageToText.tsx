"use client"
import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { createWorker, Worker } from 'tesseract.js';

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
    <section className="bg-white rounded-xl shadow-lg p-8">
        <div className="justify-center text-center m-5">
            <h2 className="text-3xl font-bold mb-10 text-center">Gets words in image!</h2>
        </div>

        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div onDrop={handleDrop} onDragOver={handleDragOver} className="flex flex-col items-center justify-center pt-5 pb-6"  >
                    <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">
                    {selectedImage ? selectedImage.name : 'Click to upload'}
                    </span>{' '}
                    or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
                </div>
                <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleChangeImage}
                />
            </label>
        </div>

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
