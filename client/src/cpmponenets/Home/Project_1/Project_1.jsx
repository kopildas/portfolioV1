import React from 'react'
import './Project_1.css'
import Pro_Box_1 from '../Pro_Box_1/Pro_Box_1'
export default function Project_1() {

    const one=1;
    const data = [
        { id: 1, image: "https://i.ibb.co/c20Tz5D/mobile.png" },
        { id: 2, image: "https://i.ibb.co/7zGf3LR/mobile-2.png" },
        { id: 3, image: "https://i.ibb.co/bd6HqKS/mobile-3.png" },
        { id: 4, image: "https://i.ibb.co/7tXdLrt/mobile-4.png" },
        { id: 5, image: "https://i.ibb.co/mD4mX4Y/mobile-5.png" },
        { id: 6, image: "https://i.ibb.co/kDzGWhX/mobile-6.png" },
        { id: 7, image: "https://i.ibb.co/svXb43g/mobile-7.png" },
    ];

  return (
    <section className='h-auto flex  bg-shades-1 '>
      <div className='p-20 flex flex-col w-full'>
        <div className='flex flex-col items-end justify-end'>
        <p className='text-8xl font1 z-10 text-shades-8'>Projects</p>
        <div className='w-[18rem] h-[4rem] -mt-[38px] -mr-7 border-2 border-shades-4'></div>
        </div>

        <div className='flex items-center justify-center mt-10 font2 rounded-3xl gap-5'>
            <Pro_Box_1 project_number={one} data={data}/>
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
