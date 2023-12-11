import React from 'react'

export default function Skill() {
  return (
    <div className='h-auto flex  bg-shades-2 '>
      <div className='p-20 flex flex-col'>
        <p className='text-8xl font1 z-10 text-shades-7'>Skills</p>
        <div className='w-[15rem] h-16 -mt-[39px] -ml-8 border-2 border-shades-4'></div>

        <div className='font2 md:ml-10 lg:ml-16 xl:ml-20 mt-10 flex flex-col gap-5'>
          <div className='flex items-baseline gap-5'>
              <p className='text-[1.5rem] text-shades-7'>Front-End&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</p>
              <p className='text-2xl text-shades-4'>HTML , CSS , JavaScript , BootStrap , Tailwind CSS , React.js</p>
          </div>
          <div className='flex items-baseline gap-5'>
              <p className='text-[1.5rem] text-shades-7'>Back-End &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
              <p className='text-2xl text-shades-4'>Node.js , Express.js , Postman</p>
          </div>
          <div className='flex items-baseline gap-5'>
              <p className='text-[1.5rem] text-shades-7'>DataBase &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
              <p className='text-2xl text-shades-4'>MongoDB , Firebase</p>
          </div>
          <div className='flex items-baseline gap-5'>
              <p className='text-[1.5rem] text-shades-7'>Cloud &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
              <p className='text-2xl text-shades-4'>Github pages , Vercel , Render</p>
          </div>
          <div className='flex items-baseline gap-5'>
              <p className='text-[1.5rem] text-shades-7'>Machine Learning : </p>
              <p className='text-2xl text-shades-4'>Python , OpenCV , Numpy , Pandas , Scikit-Learn , TensorFlow , Matplotlib</p>
          </div>
          <div className='flex items-baseline gap-5'>
              <p className='text-[1.5rem] text-shades-7'>Others &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
              <p className='text-2xl text-shades-4'>C , C++</p>
          </div>
        </div>
      </div>
    </div>
  )
}
