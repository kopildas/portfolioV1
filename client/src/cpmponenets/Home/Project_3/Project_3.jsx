import React from 'react'
import Pro_Box_1 from '../Pro_Box_1/Pro_Box_1'

export default function Project_3() {
    const one=3;
    const data = [
        { id: 1, image: "https://i.ibb.co/RbpwHgB/mobile-19.png" },
        { id: 2, image: "https://i.ibb.co/qrKQ124/mobile-20.png" },
        { id: 3, image: "https://i.ibb.co/2k64VYd/mobile-21.png" },
        { id: 4, image: "https://i.ibb.co/9qZRNdH/mobile-22.png" },
        { id: 5, image: "https://i.ibb.co/vqTtxDs/mobile-23.png" },
    ];
  return (
    <section className='h-auto flex  bg-shades-1 '>
      <div className='lg:p-20 p-5 flex flex-col w-full'>
       

        <div className='lg:px-10 bg-red-00 flex flex-col lg:flex-row items-center justify-center mt-10 mb-10 font2 rounded-3xl gap-5 border border-shades-3 p-[5px]'>
            <div className='lg:w-3/5 h-auto hover:bg-gradient-1 ease-in-out duration-500 rounded-3xl'>
            <div className=' h-auto rounded-3xl flex flex-col border border-shades-4 backdrop-blur-lg ' style={{
              backgroundColor: "#0f3a3322",
            }} >
                <div className=' backdrop-blur-md rounded-3xl'>
                    <div className='flex items-center justify-between lg:p-10 p-5 border m-1 border-shades-6 rounded-3xl'>
                        <div className='flex flex-col'>
                            <p className='text-2xl text-white'>Karfolio</p>
                            <p className='text-white text-xl text-font'>React Web App</p>
                            <div className='flex mt-2 opacity-80 text-sm'>
                                <div className='b bg-waka_total rounded text-font text-white text-[16px] pl-1 pr-1 shadow-sm'><p className='d drop-shadow-md'>total:</p></div>
                            <img src="https://wakatime.com/badge/user/0a39de3e-3235-4c6e-a595-07957c7f5086/project/853b9743-48fd-4c16-ace8-d44df5571454.svg" alt=""/>

                            </div>
                        </div>
                        {/* <div>arrow</div> */}
                    </div>
                    <Pro_Box_1 project_number={one} data={data}/>
                </div>
            </div>
            </div>
            <div className='lg:w-2/5 h-full flex items-end justify-end'>
                <div className='w-full h-auto bg-shades-7 border border-shades-8 rounded-3xl'>
                    <div className='w-full h-auto p-5 rounded-3xl border border-shades-5 text-stone-400 text-font text-xl'>
                        <p>That's My Client Portfolio React Web App
                       </p>

                       <br />
                <p>Features:</p>
                <p className="t text-base 2xl:text-lg">
                  <ul>
                    <li>◼ Seamless transformation into a single-page application</li>
                    <li>◼ Implementation of complex UI designs</li>
                    <li>◼ Captivating animations brought to life by Framer Motion
</li>
                  </ul>
                </p>

                       <br />
                <p>Technology Stack:</p>
                <div className="flex flex-wrap gap-2 text-base mt-2">
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">React</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">Tailwind CSS</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">Framer Motion</p>
                  
                </div>
                    </div>
                    <div className='w-full h-auto rounded-3xl border border-shades-5 text-stone-400 flex items-center justify-center'>
                    <a className='lg:w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl' href="https://github.com/kopildas/karprotfolio">
                        <div >Github link</div></a>
                        <div></div>
                        <a className='lg:w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl' href="https://karfolio.onrender.com/">
                        <div >Go to the website</div></a> 
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
   
        
        </div>
    </section>
  )
}
