"use client";
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter"


function Body() {
    const [text, count] = useTypewriter({
        words:["Hi, My name is Vitthal Sanadhya","I am Web Developer and Data Anlysist"],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <section className='py-8'>
        <div className='px-4 mx-auto'>
        {/*First part*/}
        <div className='flex flex-col-reverse justify-between md:flex-row md:space-x-8'>
            <div className='w-full flex flex-col items-start md:w-2/4 mt-0 md:mt-20'>
                <h1 className='text-3xl lg:text-5xl font-semibold'>
                    <span className='mr-3 text-slate-400'>{text}</span>
                    <Cursor/>
                </h1>
                <p className='text-while text-xl md:text-2xl mb-3 mt-2'>
                Committed to creating resilient real life solutions. Enthusiastic about bringing creativity and technical expertise to dynamic
projects.
                </p>
                <div>
                <button className='bg-blue-400 text-white px-4 py-1 rounded mr-4 hover:bg-blue-600'>Learn More</button>
                <button className='bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400'>Contact Me</button>
                </div>
                <p className='text-blue-500 text-small font-normal mt-2'>
                Coding  |  Learning  |  Lifestyle
                </p>
                <h1 className='text-state-400 text-xl'>3 projects in Data Anlysis  |  5 Projects in Web Development</h1>
                </div>
        </div>
        </div>
    </section>
    
  )
}

export default Body