import React, { ReactNode, MouseEventHandler, KeyboardEventHandler, ChangeEvent } from 'react';
import { StaticImageData } from 'next/image';



export interface ToolCardProps{
    name:string, 
    description:string, 
    image:string | StaticImageData
    link:string
}

export interface CustomButtonProps {
    title: string 
    containerStyles?: string
    textStyles?: string
    btnType?: "button" | "submit"
    rightIcon?: string
    isDisable?: boolean
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface HeroProps {
    title: string
    description: string
    buttonText?: string
    image:string | StaticImageData

}

export interface UploadProps {
    subtitle: string
    handleDrop?: (event: React.DragEvent<HTMLDivElement>) => void
    handleDragOver?: (event: React.DragEvent<HTMLDivElement>) => void
    handleOnChange?: (event: ChangeEvent<HTMLInputElement>) => void
    selectedFile?: File | null
    fileType: string
}
