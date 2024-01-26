import React from "react";
import Under_construnction from "../../cpmponenets/Under_construnction";

export default function About() {
  return (
    <div className="h h-screen bg-shades-1 w-full flex">
      <div className="w-[40%] h-full flex items-center justify-center">
        <img
          src="https://i.ibb.co/vDh9vtt/Profile-picture-Photo-Room-removebg-preview.png"
          border="0"
          className="w-80"
        ></img>
      </div>
      <div className="w-[60%] overflow-y-auto no-scrollbar h-full bg-shades-2  flex flex-col items-start justify-center p-10">
        <div className="mt-[10rem]">
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
      </div>
    </div>
  );
}
