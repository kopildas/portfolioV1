import React from "react";
import Under_construnction from "../../cpmponenets/Under_construnction";
import Icon_Magnetic from "../../cpmponenets/Home/Hero/Icon_Magnetic";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <div className="h h-screen bg-shades-1 w-full flex flex-col md:flex-row">
      <div className="w-[40%] h-full flex items-center justify-center mt-20 md:mt-0 mx-3 my-3 md:mx-0 md:my-0">
        <img
          src="https://i.ibb.co/vDh9vtt/Profile-picture-Photo-Room-removebg-preview.png"
          border="0"
          className="w-80"
        ></img>
      </div>
      <div className="md:w-[60%] md:overflow-y-auto no-scrollbar md:h-full bg-shades-2  flex flex-col items-start justify-center p-10">
        <div className="md:mt-[10rem]">
          <p className="text-4xl text-font text-shades-1">
            I'm a frontend developer.
          </p>
          <p className="text-xl mt-3 font3 text-shades-7">
            Recent graduate in 
            <b> Computer Science and Engineering</b> from North East University Bangladesh. Currently I'm working with{" "}
            <b>MERN</b> stack React.js, Node.js, Express.js, & MongoDB. <br />{" "}
            Every time I want to develop myself by learning new skills that
            helps me to build a strong career.
          </p>
        </div>

        <div className="mt-10 font3 text-shades text-black">
          <p className="text-2xl text-font text-zinc-950">Education</p>
          <p>Sept 2019 - Jan 2024</p>
          <p>North East University Bangladesh</p>
          <p>
            Bachelor of Science with Honours in Computer Science and Engineering
          </p>
        </div>
        <div className="mt-5 font3 text-black">
          <p>Apr 2015 - May 2017</p>
          <p>Modon Muhan College Sylhet</p>
          <p>HSC(Science) </p>
        </div>



        <p className="text-2xl text-font text-zinc-950 mt-10">Socials</p>
        <div className="flex w-40 items-center h-auto  gap-5 mt-1 text-shades-4 z-10">
       
          
       <div className='' >
       <Icon_Magnetic>
       <a href="https://www.linkedin.com/in/kopildas/" className='cursor-pointer text-2xl' ><FaLinkedinIn /></a>
           
         
       </Icon_Magnetic>
       </div>
       <Icon_Magnetic>
       <a href="https://github.com/kopildas" className='cursor-pointer text-2xl'><FaGithub /></a>
           
         
       </Icon_Magnetic>
       <Icon_Magnetic>
       <a href="https://twitter.com/KopilDas_" className='cursor-pointer text-2xl'><FaTwitter /></a>
           
         
       </Icon_Magnetic>
       <Icon_Magnetic>
       <a href="https://www.instagram.com/kopildas_/" className='cursor-pointer text-2xl'> <FaInstagram /></a>
          
         
       </Icon_Magnetic>
     </div>


      </div>
    </div>
  );
}
