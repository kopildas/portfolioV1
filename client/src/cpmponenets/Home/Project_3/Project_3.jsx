import React from 'react'

export default function Project_3() {
  return (
    <section className='h-auto flex  bg-shades-1 '>
      <div className='p-20 flex flex-col w-full'>
        <div className='flex flex-col items-end justify-end'>
        <p className='text-8xl font1 z-10 text-shades-8'>Projects</p>
        <div className='w-[18rem] h-[4rem] -mt-[38px] -mr-7 border-2 border-shades-4'></div>
        </div>

        <div className='flex items-center justify-center mt-10 font2 rounded-3xl gap-5'>
            <div className='w-3/5 h-auto hover:bg-gradient-1 ease-in-out duration-500 rounded-3xl'>
            <div className=' h-auto rounded-3xl flex flex-col border border-shades-4 backdrop-blur-lg ' style={{
              backgroundColor: "#0f3a3322",
            }} >
                <div className=' backdrop-blur-md rounded-3xl'>
                    <div className='flex items-center justify-between p-10 border m-1 border-shades-6 rounded-3xl'>
                        <div className='flex flex-col'>
                            <p className='text-2xl text-white'>Woodhy</p>
                            <p className='text-white text-xl'>A MERN stack project</p>
                        </div>
                        <div>arrow</div>
                    </div>
                    <div className='o object-contain p-5'>
                    <img src="https://i.ibb.co/c20Tz5D/mobile.png" alt="mobile" border="0" className='w-full h-96 rounded-3xl'/>
                    </div>
                </div>
            </div>
            </div>
            <div className='w-2/5 h-full flex items-end justify-end'>
                <div className='w-full h-auto bg-shades-7 border border-shades-8 rounded-3xl'>
                    <div className='w-full h-auto p-5 rounded-3xl border border-shades-5 text-stone-400'>
                        <p>Woodhy, my latest MERN Stack creation! Seamlessly blending MongoDB, Express.js, React.js, and Node.js, this project boasts a sleek admin panel, dynamic sorting, and user-friendly shopping features. <br />
                        With JWT ensuring secure user authentication and an innovative "favorite" button, Woodhy is not just a project—it's an experience.</p>
                    </div>
                    <div className='w-full h-auto rounded-3xl border border-shades-5 text-stone-400 flex'>
                        <div className='w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl'>Github link</div>
                        <div></div>
                        <div className='w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl'>Go to the website</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
   
        
        </div>
    </section>
  )
}
