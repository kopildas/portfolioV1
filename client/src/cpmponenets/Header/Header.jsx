import React, { useState } from 'react'
import { CgMenuRight } from "react-icons/cg";
import Toggle_menu from './Toggle_menu';
import { useNavigate } from 'react-router-dom';
export default function Header() {

const [toggle_menu, setToggle_menu] = useState(false)
const navigate = useNavigate();
 const toggle = () => {
  setToggle_menu(!toggle_menu)
 }

  return (
        <nav className='tr z-40 bg-none fixed w-full flex items-center justify-between p-5 b-red-500 order-b'>
          {toggle_menu &&<Toggle_menu toggle={toggle}/>}
        <div className='w-3/5 flex lg:items-center lg:justify-between bg-slate-00 pl-10 pr-5 -mr-5 '>

          {/* <p className='logo text-2xl'>Kopil Das</p> */}
          <div className=''>
          <img onClick={() => {
            navigate("/");
          }} src="https://i.ibb.co/zsXLPWF/kopil-das-high-resolution-logo-transparent.png" alt="kopil-das-high-resolution-logo-transparent" border="0" className='w-32 -ml-5 lg:ml-0 cursor-pointer'/>
          </div> 
          <p className='hidden lg:flex gap-5 border border-shades-3 pl-6 pr-5 -mr-8 rounded-3xl backdrop-blur-[40px] p-2 text-shades-8 text-lg text-font'>
            <p className='cursor-pointer' onClick={() => {
            navigate("/about");
          }}>info</p>
            <p className='cursor-pointer' onClick={() => {
            navigate("/contact");
          }}>contact</p>
          </p>
          

        </div>
        <div className='ml-5 pr-1 bg-green-00 w-2/5 flex items-center justify-end '>

          {/* <p className='border border-gray-300 text-white pl-3 pr-3 -mr-8 rounded-xl backdrop-blur-xl'>kopil das</p> */}
          <p className='text-4xl text-shades-8 cursor-pointer' onClick={toggle}><CgMenuRight /></p>
          

        </div>
        
      </nav>
     )
}
