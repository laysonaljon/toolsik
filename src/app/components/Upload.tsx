"use client"

import { UploadProps } from '../types';


const Upload = ({ subtitle, handleDrop, handleDragOver,handleOnChange, selectedFile, fileType }: UploadProps) => {


  return (
    <div className="flex items-center justify-center w-full mt-4">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... hover:bg-slate-900"
        >
        <div onDrop={handleDrop} onDragOver={handleDragOver} className="flex flex-col items-center justify-center pt-5 pb-6"  >
          <svg
            aria-hidden="true"
            className="w-10 h-10 mb-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-white">
            {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
            </span>
          </p>
          <p className="text-xs text-white dark:text-gray-400">{subtitle}</p>
          {selectedFile && <p className="text-xs text-gray-500 dark:text-gray-400"></p>}
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept={`${fileType}`}
          onChange={handleOnChange}
          />
      </label>
    </div>
  );
};

export default Upload;
