import React, { useEffect, useRef, useState } from "react";
import Sk_sets_lg_screen from "./sk_sets_lg_screen";
import Sk_sets_mobile_screen from "./Sk_sets_mobile_screen";
import TextReveal from "./TextReveal";

export default function Skills() {
  const [offsetX, setOffsetX] = useState(0);

  const handleScroll = () => setOffsetX(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen font4 bg-shades-7 lg:bg-shades-3 w-full flex items-center ">
      <div className="z-20 bg-red-20 ml-5 lg:ml-10 absolute flex items-end justify-end h-screen">
        <img
          src="https://i.ibb.co/txrX4Tb/the-1-self-made-man-removebg-removebg.png"
          alt="the-self-made-man-is-a-sculpture-by-loveland"
          border="0"
          className="h-[55%] md:h-[80%]"
        />
      </div>
      <div className="-10 ml-20 lg:ml-[14rem] 2xl:ml-[20rem] absolute mt-10 lg:mt-64 xl:mt-[20rem] h-[45rem] lg:h-[45rem] w-[5rem] lg:w-[6rem] mr-24 bg-shades-1 z-10">
      <div className="bg-green- lg:mt-26 -rotate-90 text-7xl  -mr-16 z-10  " style={{transform: `translateY(${offsetX *0.3}px) rotate(-90deg)`}} >
      {/* */}
        <p
          className="text-6xl font1 text-shades-8"
          style={{ mixBlendMode: 'difference' }}
        >
          Skills
        </p>
          </div>
      </div>
      <div className="-10  ml-20 lg:ml-0 absolute mt-10 h-[45rem] lg:h-[30rem] w-full  mr-24 bg-shades- z-0">
        {/* frontend */}
        <div
            className=" bg-shades- px-5 py-1 relative  rounded-2xl ml-20 z0"
            
          >
            <TextReveal/>
          </div>
      </div>
        {/* <Sk_sets_mobile_screen offsetX={offsetX}/> */}
  {/* <Sk_sets_lg_screen offsetX={offsetX}/> */}
    </div>
  );
}
