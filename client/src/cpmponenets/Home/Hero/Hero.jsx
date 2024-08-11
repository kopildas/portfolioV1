import { useGSAP } from "@gsap/react";
import gsap from "gsap"; // <-- import GSAP
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Hero.css";
import Icon_Magnetic from "./Icon_Magnetic";

export default function Hero({ offsetY }) {
  // useEffect(() => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)
  // }, []);

  // fetch(`https://gitroll.io/profile/uK2SyRAdapiV8Mq0bebbs41UQ3e13/stacks`) // Replace with the website URL
  // .then(response => response.text())
  // .then(html => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html, 'text/html');
  //   const canvas = doc.querySelector('canvas[data-zr-dom-id="zr_0"]');
  //   // Do something with the canvas element
  //   console.log(canvas)
  // });

  useGSAP(() => {
    // gsap code here...
    gsap.from(".box1", { y: -1000, duration: 2 }); // <-- automatically reverted
    gsap.from(".box2", { y: 1000, duration: 2 }); // <-- automatically reverted
    gsap.from(".title_img1", { x: 1000, duration: 2.5 }); // <-- automatically reverted
    gsap.from(".home_title_1", { y: 100, opacity: 0, delay: 1.58 }); // <-- automatically reverted
    gsap.from(".home_title_2", { y: 100, opacity: 0, delay: 1.79 }); // <-- automatically reverted
    gsap.from(".home_title_3", { y: 100, opacity: 0, delay: 2 }); // <-- automatically reverted
  }); //

  return (
    <section className=" text-2xl h-screen flex items-center justify-between  bg-shades-3 ">
      <div className="w w-[75%] md:w-3/5 h-screen bg-shades-1 flex items-start justify-center overflow-hidden gap-2 box1 z-10 absolute">
        <div
          className="flex flex-col w-40 items-center bg-red-00 h-screen justify-center gap-5 ml-4 text-shades-4 z-50"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className="">
            <Icon_Magnetic>
              <a
                href="https://www.linkedin.com/in/kopildas/"
                className="cursor-pointer"
              >
                <FaLinkedinIn />
              </a>
            </Icon_Magnetic>
          </div>
          <Icon_Magnetic>
            <a href="https://github.com/kopildas" className="cursor-pointer">
              <FaGithub />
            </a>
          </Icon_Magnetic>
          <Icon_Magnetic>
            <a href="https://twitter.com/KopilDas_" className="cursor-pointer">
              <FaTwitter />
            </a>
          </Icon_Magnetic>
          <Icon_Magnetic>
            <a
              href="https://www.instagram.com/kopildas_/"
              className="cursor-pointer"
            >
              {" "}
              <FaInstagram />
            </a>
          </Icon_Magnetic>
        </div>

        <div className=" h-screen bg-shades-1 flex flex-col items-start p-1 md:p-3 lg:p-20 justify-center z-20  lg:mt-14 overflow-hidden">
          <p className="text-[32px] md:text-[2.4rem] lg:text-[2.85rem] text-gray-200 mt-20 md:mt-0 bg-green-00 font1 home_title_1">
            Web Developer
          </p>
          <p className="mt-10 text-shades-8 text-[15px] md:text-[24px] lg:text-[27px] text-font bg-red-00 home_title_2">
            Hello.. I'm <b>Kopil..!</b> <br />A passionate{" "}
            <span className="font-bold">Front-End Developer</span> with a knack
            for crafting user-friendly interfaces and building efficient web
            applications. I leverage my expertise in Next.js, React.js, and
            various other technologies to bring innovative ideas to life.
          </p>
          <div className="relative group home_title_3">
            <div className="absolute inset-0 bg-shades-4 rounded-2xl mt-6 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition ease-in-out duration-700 group-hover:duration-200 animate-tilt"></div>
            <button className="w-auto h-auto rounded-2xl text-shades-8 bg-shades-1  px-8 py-2 font2 mt-6 relative ">
              <a href="https://drive.google.com/file/d/1Yv9qnhludEJJGl-Vb84emGhURMsEKaIA/view?usp=sharing99">
                Resume
              </a>{" "}
              <span className="text-shades-4">-</span>
            </button>
          </div>
        </div>
      </div>

      <div className="parallax__jax w-[25%] md:w-2/5 h-screen bg-shades-2 flex items-end justify-end overflow-x-hidden overflow-hidden z-10 box2 absolute right-0"></div>
      
      <div className="h-screen overflow-x-hidden md:h-screen bgred lg:h-screen  z-30 title_img1 flex bg-red-00 items-end justify-end absolute right-0">
      <img
          src="https://i.ibb.co/kBDgBvb/statue-stoicism-philosophy-working-in-laptop-dark-background-cinematic-381425111-removebg.png"
          alt="statue-stoicism-philosophy-working-in-laptop-dark-background-cinematic-381425111-removebg"
          border="0"
          className=" h-auto overflow-x-hidden md:h-screen bgred lg:h-screen  z-30 title_img1 bg-red-00 right-0 top-"
          style={{ transform: `translateX(${offsetY * 0.5}px)` }} // Adjust the scale factor and maxWidth as needed
        />
             </div>
        
      {/* </div> */}
      {/* <div className="w-44 h-screen bg-red-300 absolute"></div> */}
    </section>
  );
}
