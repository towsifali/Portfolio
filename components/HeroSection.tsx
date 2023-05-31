"use client"
import React from 'react'
import Image from 'next/image'
import {Link} from 'react-scroll/modules'

export default function HeroSection () {
  return (
    <section id="home">
        <div className="flex flex-col text-center items-center justify-center 
        animate-fadeIn animation-delay-2 mt-10 pt-14 sm:pt-12 md:pt-26 md:flex-row 
        md:space-x-4 md:text-left">
            <div className='md:mt-2 md:w-1/2'>
                <Image className='rounded-full shadow-2xl' src="/headshot.jpg" alt="Picture" width={325} height={325}/>
            </div>
            <div className="md:mt-2 text-center">
                <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Towsif Ali</h1>
                <p className='text-xs my-4 md:text-xl whitespace-pre'>HK  BD</p>
                <p className='text-xl md:text-2xl'>Developer👨🏽‍💻| Videogames🎮| Football⚽</p>
            </div>
        </div>
        <div>
            <p className="text-lg mt-4 mb-6 md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer quam augue, pretium id purus ac, condimentum auctor dolor. Duis tellus dolor, 
                    elementum sit amet nisi eget, ultricies eleifend leo. Maecenas ultrices aliquam vehicula. 
                    Cras porttitor justo metus, ac malesuada orci tincidunt sed. Duis sit amet fermentum ipsum, 
                    non vehicula odio.
            </p>
            <Link
                    to="projects"
                    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Projects
                </Link>
        </div>
    </section>
  )
}
