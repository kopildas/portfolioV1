import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Icon_Magnetic from "./Icon_Magnetic";
import "./Hero.css";
import Lenis from '@studio-freight/lenis'


export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  

  // useEffect(() => {
  //   const lenis = new Lenis()
    
  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }  
  //   requestAnimationFrame(raf)
  // }, []);


  
  return (
    <section className=" text-2xl h-screen flex items-center justify-between  bg-shades-1 ">

      <div className="w w-[75%] md:w-3/5 h-screen bg-shades-1 flex items-start justify-center overflow-hidden gap-2">
        <div className="flex flex-col w-40 items-center h-screen justify-center gap-5 ml-4 text-shades-4 z-10" style={{transform: `translateY(${offsetY *0.5}px)`}}>
       
          
          <div className='' >
          <Icon_Magnetic>
          <a href="https://www.linkedin.com/in/kopildas/" className='cursor-pointer' ><FaLinkedinIn /></a>
              
            
          </Icon_Magnetic>
          </div>
          <Icon_Magnetic>
          <a href="https://github.com/kopildas" className='cursor-pointer'><FaGithub /></a>
              
            
          </Icon_Magnetic>
          <Icon_Magnetic>
          <a href="https://twitter.com/KopilDas_" className='cursor-pointer'><FaTwitter /></a>
              
            
          </Icon_Magnetic>
          <Icon_Magnetic>
          <a href="https://www.instagram.com/kopildas_/" className='cursor-pointer'> <FaInstagram /></a>
             
            
          </Icon_Magnetic>
        </div>

        <div className=" h-screen bg-shades-1 flex flex-col items-start p-1 md:p-3 lg:p-20 justify-center z-10  lg:mt-14 overflow-hidden">
          <p className="text-[32px] md:text-[2.4rem] lg:text-[2.85rem] text-gray-200 mt-20 md:mt-0 bg-green-00 font1 ">Web Developer</p>
          <p className="mt-10 text-shades-8 text-[20px] md:text-[24px] lg:text-[27px] text-font bg-red-00">
            Hola This is Kopil..! <br /> I'm a{" "}
            <span className="">Front-end Developer</span> turning concepts into
            digital art. Learning MERN Development to make your websites not
            just visually enchanting, but fully functional. <br /> Let's
            co-create digital wonders!
          </p>
          <div className="relative group">
            <div className="absolute inset-0 bg-shades-4 rounded-2xl mt-6 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition ease-in-out duration-700 group-hover:duration-200 animate-tilt"></div>
            <button className="w-auto h-auto rounded-2xl text-shades-8 bg-shades-1  px-8 py-2 font2 mt-6 relative">
              <a href="https://drive.google.com/file/d/1ncTzSOcvDcoUw9C0lvbB_XHSsPKIg6Cp/view?usp=sharing">Resume</a> <span className="text-shades-4">-</span>
            </button>
          </div>
        </div>

      </div>
      <div
        className="parallax__jax w-[25%] md:w-2/5 h-screen bg-shades-2 flex items-end justify-end overflow-x-hidden overflow-hidden z-20" 
      >
        <img
          src="https://i.ibb.co/kBDgBvb/statue-stoicism-philosophy-working-in-laptop-dark-background-cinematic-381425111-removebg.png"
          alt="statue-stoicism-philosophy-working-in-laptop-dark-background-cinematic-381425111-removebg"
          border="0"
          className=" h-auto overflow-x-hidden md:h-auto bgred lg:h-screen absolute  z-30"
          style={{transform: `translate3d(${Math.min(offsetY * 0.8, 600)}px, 0px, 0px) scale(1)` }} // Adjust the scale factor and maxWidth as needed
        />
      </div>
      {/* <div className="w-44 h-screen bg-red-300 absolute"></div> */}
    </section>
  );
}
