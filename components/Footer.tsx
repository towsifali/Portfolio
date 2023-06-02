import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
  } from "react-icons/ai"

const socailData = [
    {
        name: <AiOutlineGithub size={30}/>,
        link: "https://github.com/towsifali"
    },
    {   
        name: <AiOutlineLinkedin size={30}/>,
        link: "https://www.linkedin.com/in/TowsifAli/"
    },
    {   
        name: <AiOutlineInstagram size={30}/>,
        link: "https://www.instagram.com/towsif.ali/"
    },
  ]
const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px4 mt-16 sm:px-6 md:max-w-5xl'>
        <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'/>
        <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
            <div className='text-lg italic text-neutral-500 dark:text-neutral-100'>All Rights Reserved @ Quazi Towsif Ali 2023</div>
            <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            {socailData.map((items,idx) =>{
                return (
                <div key={idx}>
                    <a href={items.link} target="_blank" >
                        <div className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'>
                            {items.name}
                        </div>
                    </a>
                </div>)
            })}
            </div>   
        </div>
    </footer>
  )
}

export default Footer