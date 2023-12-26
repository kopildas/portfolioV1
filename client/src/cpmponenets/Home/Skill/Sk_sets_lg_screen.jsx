import React from 'react'

export default function Sk_sets_lg_screen({offsetX}) {
  return (
    <div className="hidden w-full h-full -ml-24 lg:flex items-center justify-center bg-fuchsia-00 z-10">
    <div className="bg-green-00 w-1/2 h-full flex flex-col items-end justify-center relative overflow-auto">
      <div className="bg-green-00 -rotate-90 text-7xl -mt-[23rem] -mr-16 z-50 mix-blend-overlay ">
      {/* style={{transform: `translateY(-${offsetX - 2520 *0.19}px) rotate(-90deg)`}} */}
        <p
          className="text-6xl font1 text-shades-8"
          style={{ mixBlendMode: 'difference' }}
        >
          Skills
        </p>
          </div>

          {/* frontend */}
          <div
            className="-mt-16 bg-shades-4 px-5 py-1 absolute rounded-2xl z-20"
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
            className="bg-green-00 absolute ml-40 mt-4 z-10 flex gap-2"
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
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              CSS
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Javascript
            </p>
          </div>

          <div
            className="bg-green-00 absolute ml-40 mt-20 z-10 flex gap-2"
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
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Tailwind CSS{" "}
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              ReactJs.{" "}
            </p>
          </div>

          {/* backend */}

          <div
            className=" mt-[18rem] bg-shades-4 px-5 py-1 absolute rounded-2xl z-20"
            style={{
              transform: `translate3d(-${Math.min(
                offsetX - 650 * 0.75,
                120
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-lg font-semibold">Back-End </p>
          </div>

          <div
            className="bg-green-00 absolute ml-40 mt-[23rem] z-10 flex gap-2"
            style={{
              transform: `translate3d(-${Math.min(
                offsetX - 500 * 0.95,
                160
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Node.js
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Express.js
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Postman
            </p>
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
                190
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
                70
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              MongoDb
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Mongoose
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Firebase
            </p>
          </div>

          {/* ML */}
          <div
            className="mt-14 bg-shades-4 px-5 py-1 absolute rounded-2xl z-20"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 400 * 1,
                195
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-lg font-semibold">Machine Learning</p>
          </div>

          <div
            className="bg-green-00 absolute ml-40 mt-[8.5rem] z-10 flex gap-2"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 400 * 1.3,
                70
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Python
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              OpenCV
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Numpy
            </p>
          </div>

          <div
            className="bg-green-00 absolute ml-40 mt-[12.5rem] z-10 flex gap-2"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 400 * 1,
                100
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Pandas
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Scikit-Learn
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              TensorFlow
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Matplotlib
            </p>
          </div>

          {/* other */}

          <div
            className="mt-80 bg-shades-4 px-5 py-1 absolute rounded-2xl z-20"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 480 * 0.9,
                200
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-lg font-semibold">Other</p>
          </div>

          <div
            className="bg-green-00 absolute ml-40 mt-[24.9rem] z-10 flex gap-2"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 590 * 1,
                70
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Github pages
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Vercel
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Render
            </p>
          </div>

          <div
            className="bg-green-00 absolute ml-40 mt-[29rem] z-10 flex gap-2"
            style={{
              transform: `translate3d(${Math.min(
                offsetX - 500 * 1,
                110
              )}px, 0px, 0px)`,
            }}
          >
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              C
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              C++
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Java
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              git
            </p>
            <p className="text-md font-semibold border border-shades-1 px-2 rounded-2xl">
              Github
            </p>
          </div>
        </div>

        
      </div>
  )
}
