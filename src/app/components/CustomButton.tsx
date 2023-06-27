

import { CustomButtonProps } from "../types"
import Image from "next/image"

const CustomButton = ({title, btnType, containerStyles, handleClick, rightIcon, textStyles, isDisable}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisable}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <Image
          src={rightIcon}
          alt="right icon"
          width={20}
          height={20}
          className="object-contain"
        />
      )}
    </button>
  )
}

export default CustomButton