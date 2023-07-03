import React from 'react';
import Image from 'next/image';
import { ToolCardProps } from '../types';
import { CustomButton } from '../components';
import Link from 'next/link';

const ToolCard: React.FC<ToolCardProps> = ({ name, description, image, link }) => {
  return (
    <section className="flex-4 m-5">
      <div className="toolsik__toolcard-container shadow-md">
        <div className="mb-4">
          <Image src={image} alt={name} width={200} height={200} />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
        <div className="mt-4">
          <Link href={'./' + link}>
            <CustomButton
              title="Open Tool"
              btnType="button"
              containerStyles="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white font-bold py-2 px-4 rounded uppercase"
              textStyles="text-lg"
            />
          </Link>
        </div>
      </div>
    </section>
    
  );
};

export default ToolCard;
