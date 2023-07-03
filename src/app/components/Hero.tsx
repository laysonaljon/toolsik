import React from 'react';
import { HeroProps } from '../types';
import Image from 'next/image';
import { CustomButton } from '.';

const Hero = ({ title, description, buttonText, image, section }: HeroProps) => {
  const scrollToTools = () => {
    const toolsSection = document.getElementById(section);
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="toolsik__section__hero">
      <div className="toolsik__header section__padding" id="home">
        <div className="toolsik__header-content">
          <h1 className="gradient__text">{title}</h1>
          <p>{description}</p>

          <div className="toolsik__header-content__input">
            <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." onClick={scrollToTools}>
              {buttonText}
            </button>
          </div>
        </div>

        <div className="toolsik__header-image">
          <Image src={image} alt="" className="object-contain" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
