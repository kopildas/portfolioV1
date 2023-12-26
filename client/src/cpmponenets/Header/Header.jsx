import React from 'react'
import { CgMenuRight } from "react-icons/cg";
export default function Header() {
  return (
        <nav className='tr z-10 bg-none fixed w-full flex items-center justify-between p-5 b-red-500 order-b'>
        <div className='w-3/5 flex lg:items-center lg:justify-between bg-slate-00 pl-10 pr-5 -mr-5 '>

          {/* <p className='logo text-2xl'>Kopil Das</p> */}
          <div className=''>
          <img src="https://i.ibb.co/zsXLPWF/kopil-das-high-resolution-logo-transparent.png" alt="kopil-das-high-resolution-logo-transparent" border="0" className='w-32 -ml-5 lg:ml-0'/>
          </div> 
          <p className='hidden lg:flex gap-5 border border-shades-3 pl-6 pr-5 -mr-8 rounded-3xl backdrop-blur-[40px] p-2 text-shades-8 text-lg text-font'>
            <p>info</p>
            <p>contact</p>
          </p>
          

        </div>
        <div className='ml-5 pr-1 bg-green-00 w-2/5 flex items-center justify-end '>

          {/* <p className='border border-gray-300 text-white pl-3 pr-3 -mr-8 rounded-xl backdrop-blur-xl'>kopil das</p> */}
          <p className='text-4xl text-shades-8'><CgMenuRight /></p>
          

        </div>
        
      </nav>
     )
}
