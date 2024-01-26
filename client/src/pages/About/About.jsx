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
      <div className="w-[60%] h-full bg-shades-2  flex flex-col items-start justify-center p-10">
        <div>
          <p className="text-4xl text-font">I'm a frontend developer.</p>
          <p className="text-xl mt-3 font3">
            Recent graduate in Computer Science and Engineering from <b> North East University Bangladesh</b>. Currently I'm working with <b>MERN</b> stack React.js, Node.js, Express.js,
            & MongoDB. <br /> Every time I want to develop myself by learning
            new skills that helps me to build a strong career.
          </p>
        </div>
      </div>
    </div>
  );
}
