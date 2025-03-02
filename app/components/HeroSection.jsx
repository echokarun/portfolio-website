"use client";

import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';


    


const HeroSection = () => {
   return (
      <section>
         <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
            {/* Text Section */}
            <div className='col-span-7 place-self-center text-center sm:text-left'>
               <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m {""}</span>
                  <br />
                  <TypeAnimation
                      sequence={[
                     'Karun Rayamajhi',
                     1000, // 
                     'Web Developer',
                     1000,
                     'Mobile Developer',
                     1000,
                     'Full Stack Developer ',
                     1000
                     ]}
                     wrapper="span"
                     speed={50}
                     repeat={Infinity}
                  />
               </h1>
               <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis atque consequatur.
               </p>
               <div>
                  <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white cursor-pointer transition duration-300 hover:opacity-80'>
                     Get in Touch
                  </button>

                  <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mt-3 cursor-pointer transition duration-300 hover:opacity-80'>
                     <span className='block bg-[#121212] rounded-full px-5 py-2'>
                        Download CV
                     </span>
                  </button>
               </div>
            </div>

            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
               <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center overflow-hidden">
                  <Image
                     src="/images/hero-image.webp"
                     alt="hero-image"
                     width={300}
                     height={300}
                     className="object-cover rounded-full"
                  />
               </div>
            </div>
         </div>
      </section>
   )
}

export default HeroSection
