import React from 'react'
import { footerLinks } from '../constants'
import { logo } from '../assets'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="toolsik__footer section__padding text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <a href="/"><Image 
            src={logo} 
            alt="toolsik_logo"
            height={50} 
            width={200}
            /></a>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Maharlika Softwares</a>. All Rights Reserved.
          </span>
      </div>
    </footer>



    
  )
}

export default Footer
