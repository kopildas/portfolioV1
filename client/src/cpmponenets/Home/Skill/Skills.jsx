import React, { useEffect, useRef, useState } from "react";

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
    <div className="h-screen bg-shades-3 w-full flex items-center justify-center">
      <div className="h-full realtive">div jhkjgh</div>
      <div className="z-20 absolute h-full">
        <img
          src="https://i.ibb.co/txrX4Tb/the-1-self-made-man-removebg-removebg.png"
          alt="the-self-made-man-is-a-sculpture-by-loveland"
          border="0"
          className="h-full "
        />
      </div>
      <div className="w-full h-full -ml-24 flex items-center justify-center bg-fuchsia-00 z-10">
        <div className="bg-green-00 w-1/2 h-full flex flex-col items-end justify-center relative overflow-auto">
{/* frontend */}
        <div
            className="-mt-28 bg-shades-4 px-5 py-1 absolute rounded-2xl z-20"
            style={{
              transform: `translate3d(-${Math.min(
                offsetX - 700 * 0.7,
                100
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-lg font-semibold">Front-End </p>
          </div>


          <div
            className="bg-green-00 absolute ml-40 -mt-8 z-10 flex gap-2"
            style={{
              transform: `translate3d(-${Math.min(
                offsetX - 500 * 0.8,
                150
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Html
            </p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>CSS</p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Javascript</p>
          </div>
         


          <div
            className="bg-green-00 absolute ml-40 mt-9 z-10 flex gap-2"
            style={{
              transform: `translate3d(-${Math.min(
                offsetX - 500 * 0.6,
                190
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
            BootStrap
            </p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Tailwind CSS </p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>ReactJs. </p>
            
          </div>

          {/* backend */}

          <div
          className=" mt-64 bg-shades-4 px-5 py-1 absolute rounded-2xl z-20"
          style={{
            transform: `translate3d(-${Math.min(
              offsetX - 700 * 0.75,
              120
            )}px, 0px, 0px)`,
          }}
        >
          <p className="text-lg font-semibold">Back-End </p>
        </div>

        <div
        className="bg-green-00 absolute ml-40 mt-[21rem] z-10 flex gap-2"
        style={{
          transform: `translate3d(-${Math.min(
            offsetX - 550 * 0.95,
            160
          )}px, 0px, 0px)`,
        }}
      >
        <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
        Node.js
        </p>
        <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Express.js</p>
        <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Postman</p>
      </div>


        </div>



        {/* right side */}

        <div className="bg-red-00 w-1/2 h-full flex flex-col items-start justify-center relative overflow-hidden">

        {/* database */}
        <div
            className="-mt-40 bg-shades-4 px-5 py-1 absolute rounded-2xl z-20"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 500 * 0.5,
                140
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-lg font-semibold">Database </p>
          </div>

          <div
            className="bg-green-00 absolute ml-40 -mt-20 z-10 flex gap-2"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 650 * 0.5,
                30
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              MongoDb
            </p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Mongoose</p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Firebase</p>
          </div>



          {/* ML */}
          <div
          className="mt-20 bg-shades-4 px-5 py-1 absolute rounded-2xl z-20"
          style={{
            transform: `translate3d(${Math.min(
              offsetX - 800 * 0.8,
              130
            )}px, 0px, 0px)`,
          }}
        >
          <p className="text-lg font-semibold">Machine Learning</p>
        </div>


        <div
            className="bg-green-00 absolute ml-40 mt-40 z-10 flex gap-2"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 400 * 1,
                30
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
            Python
            </p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>OpenCV</p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Numpy</p>
            
          </div>


          <div
            className="bg-green-00 absolute ml-40 mt-[14.2rem] z-10 flex gap-2"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 400 * 1.1,
                70
              )}px, 0px, 0px)`,
            }}
          >
          <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Pandas</p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
            Scikit-Learn
            </p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>TensorFlow</p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Matplotlib</p>
            
          </div>



          {/* other */}

          <div
          className="mt-80 bg-shades-4 px-5 py-1 absolute rounded-2xl z-20"
          style={{
            transform: `translate3d(${Math.min(
              offsetX - 800 * 0.8,
              130
            )}px, 0px, 0px)`,
          }}
        >
          <p className="text-lg font-semibold">Other</p>
        </div>


        <div
            className="bg-green-00 absolute ml-40 mt-[24.9rem] z-10 flex gap-2"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 600 * 1.2,
                30
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
            Github pages
            </p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Vercel</p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Render</p>
            
          </div>


          <div
            className="bg-green-00 absolute ml-40 mt-[29rem] z-10 flex gap-2"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 600 * 1,
                60
              )}px, 0px, 0px)`,
            }}
          >
          <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>C</p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
            C++
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
            Java
            </p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>git</p>
            <p className='text-md font-semibold border border-shades-1 px-2 rounded-2xl'>Github</p>
            
          </div>





        </div>



      </div>
    </div>
  );
}
