import React from 'react';
import { HeroProps } from '../types';
import Image from 'next/image';
import { CustomButton } from '.';

const Hero = ({ title, description, buttonText, image }: HeroProps) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{title}</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{description}</p>
          <CustomButton
            title={buttonText || "Click Me!"}
            btnType="button"
            containerStyles="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            handleClick={() => console.log('Button clicked!')}
          />
        </div>
       
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}>
            <Image src={image} alt="mockup" layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
