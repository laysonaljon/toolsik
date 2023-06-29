import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import { CustomButton, Upload } from '.'




const PDFToWord = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          setSelectedFile(e.target.files[0]);
        }
      };

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setSelectedFile(file);
      }, []);
    
      const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
      }, []);


  return (
    <>
    <section className="section-padding section__bg ">
        <div className="justify-center text-center m-5">
            <h2 className="text-5xl font-bold mb-10 text-center gradient__text">Convert your PDF</h2>
        </div>
        
        <Upload  
        subtitle="SVG, PNG, JPG or GIF (MAX. 800x400px)"
        selectedFile={selectedFile}
        handleOnChange = {handleChangeFile}
        fileType = "application/pdf"
        />

        <CustomButton 
        title="Convert"
        btnType="button"
        containerStyles="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white font-bold py-2 px-4 rounded uppercase m-4 w-full"
        textStyles="text-lg"
        />

    </section>
    </>
  )
}

export default PDFToWord