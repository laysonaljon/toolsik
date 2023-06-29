"use client"

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { tools } from '../constants';
import { logo } from '../assets';
import Image from 'next/image';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const toggleLibrary = () => {
    setIsLibraryOpen(!isLibraryOpen);
  };

  return (
    <div className="toolsik__navbar">
      <div className="toolsik__navbar-links">
        <div className="toolsik__navbar-links_logo">
        <a href="/"><Image 
        src={logo} 
        alt="toolsik_logo"
        /></a>
        </div>
        <div className="toolsik__navbar-links_container">
          <p><a href="/">Home</a></p>
          <div className="relative inline-block">
            <p className="cursor-pointer" onClick={toggleLibrary}>
              Tools
            </p>
            {isLibraryOpen && (
              <div className="absolute mt-2 ml-2 bg-sky-950 rounded shadow-lg">
                {tools.map((tool, index) => (
                  <p>
                    <a
                      href={tool.link}
                      className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                    {tool.name}
                    </a>
                  </p>

                  ))}
              </div>
            )}
          </div>
          <p><a href="#wtoolsik">About Us</a></p>
          <p><a href="#possibility">Contact Us</a></p>
        </div>
      </div>
      <div className="toolsik__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="toolsik__navbar-menu_container scale-up-center">
          <div className="toolsik__navbar-menu_container-links">
            <p><a href="/">Home</a></p>
            <div className="relative inline-block">
              <p className="cursor-pointer" onClick={toggleLibrary}>
                Library
              </p>
              {isLibraryOpen && (
                <div className="absolute mt-2 ml-2 bg-sky-950 rounded shadow-lg">
                   {tools.map((tool, index) => (
                    <p>
                      <a
                        href={tool.link}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                      {tool.name}
                      </a>
                    </p>

                    ))}
                </div>
              )}
            </div>
            <p><a href="#wtoolsik">About Us</a></p>
            <p><a href="#possibility">Contact Us</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
