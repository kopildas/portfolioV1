import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <section className='text-2xl h-screen flex items-center justify-between  bg-shades-1 overflow-hidden'>
        <div className='w w-3/5 h-screen bg-shades-1 flex flex-col items-start p-20 justify-center z-10 mt-24 overflow-hidden'>
          
          <p className='text-[4.2rem] text-gray-300 font1'>Web Developer</p>
          <p className='mt-10 text-shades-8 text-[27px] text-font'>Hola This is Kopil..! <br/> I'm a <span className=''>Front-end Developer</span> turning concepts into digital art. Learning MERN Development to make your websites not just  visually enchanting, but fully functional. <br /> Let's co-create digital wonders!</p>
          <button className='w-auto h-auto rounded-2xl bg-shades-3 pl-5 pr-5 p-2 font2 mt-6'>Resume <span className='text-shades-4'>-</span></button>

        </div>
        <div className=' w-2/5 h-screen bg-shades-2 flex items-center justify-end  overflow-hidden z-20' style={{ overflow: 'hidden' }}>
        <img src="https://i.ibb.co/kBDgBvb/statue-stoicism-philosophy-working-in-laptop-dark-background-cinematic-381425111-removebg.png" alt="statue-stoicism-philosophy-working-in-laptop-dark-background-cinematic-381425111-removebg" border="0"
            className='h-screen absolute overflow-hidden z-30'
            style={{ transform: 'scale(1)', maxWidth: '100%' }} // Adjust the scale factor and maxWidth as needed
          />
        </div>
        <div className='w-44 h-screen absolute'></div>
      </section>
  )
}
