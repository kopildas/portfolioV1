import React from 'react'
import { FaGithub,FaCloudMoon } from "react-icons/fa";

export default function Project_card({projects}) {

  return (
    <div className='h-auto no-scrollbar mt-16 mb-10 '>
      <div className='flex flex-wrap items-center justify-center gap-10 bg-green-20'>
      {projects.map((item, index) => (
        <div key={index} className='flex gap-5 bg-green-00 rounded-lg no-scrollbar'>
          <div className='w-96 h-[24rem] bg-shades-7 no-scrollbar rounded-lg'>
            <div className='w-full h-[14rem]  bg-blue-00'>
                <img src={item.image} alt="" className='w-full h-full rounded-lg' />
            </div>
            <div className='w-full h-[3rem] bg-green-20 flex items-center px-5 text-xl font-semibold border-b rounded-lg border-shades-2 text-shades-8'>
                <p>{item.name}</p>
            </div>

            <div className='w-full h-[5rem] bg-green-00 flex items-center px-5 text-xl font-semibold'>
                <div className='w-[18rem] h-full bg-orange-00 flex flex-wrap text-sm gap-3 items-center py-5 '>  {Object.values(item.tech).map((tech, techIndex) => (
              <p key={techIndex} className='b bg-gray-00 -mt-1 text-shades-8 px-2 border border-shades-4 rounded-2xl'>{tech}</p>
            ))} </div>
                <div className='w-[4rem] h-full bg-red-0 flex gap-3 items-end justify-center'>
                    <a href={item.github} className='t text-shades-4 hover:scale-150 duration-200 transition ease-in-out'><FaGithub/></a>
                    <a href={item.live} className='text-shades-4 hover:scale-150 duration-200 transition ease-in-out'><FaCloudMoon/></a>
                </div>
                
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
