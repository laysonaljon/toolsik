"use client"

import { Hero, ToolCard } from './components';
import { tools } from './constants';
import { hero } from './assets';

export default function Home() {
  return (
    <>
      <Hero 
        title="Software Tools for Company"
        description="From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack." 
        image={hero}
        buttonText="View Available Tools" 
        section="tools" 
      />
      <section className="p-10 m-1" id="tools">
        <div>
          <div className="section__padding flex justify-center items-center">
            <h2 className="text-5xl font-bold text-center gradient__text">Choose from a wide array of available tools.</h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-3">
            {tools.map((tool, index) => (
              <ToolCard
                key={index}
                name={tool.name}
                description={tool.description}
                image={tool.image}
                link={tool.link}
              />
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}
