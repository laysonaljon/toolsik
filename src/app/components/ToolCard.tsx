import React from 'react';
import Image from 'next/image';
import { ToolCardProps } from '../types';
import { CustomButton } from '../components';
import Link from 'next/link';

const ToolCard: React.FC<ToolCardProps> = ({ name, description, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex m-3">
      <div className="w-1/2">
        <div className="flex justify-center items-center h-full">
          <Image src={image} alt={name} width={200} height={200} />
        </div>
      </div>
      <div className="w-1/2 ml-4 flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="mt-4">
          <Link href={'./' + link}>
            <CustomButton
              title="Open Tool"
              btnType="button"
              containerStyles="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
              textStyles="text-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
