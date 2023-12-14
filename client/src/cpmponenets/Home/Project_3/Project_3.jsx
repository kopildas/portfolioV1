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
      <div className='p-20 flex flex-col w-full'>
       

        <div className='flex items-center justify-center mt-10 font2 rounded-3xl gap-5'>
            <div className='w-3/5 h-auto hover:bg-gradient-1 ease-in-out duration-500 rounded-3xl'>
            <div className=' h-auto rounded-3xl flex flex-col border border-shades-4 backdrop-blur-lg ' style={{
              backgroundColor: "#0f3a3322",
            }} >
                <div className=' backdrop-blur-md rounded-3xl'>
                    <div className='flex items-center justify-between p-10 border m-1 border-shades-6 rounded-3xl'>
                        <div className='flex flex-col'>
                            <p className='text-2xl text-white'>Karfolio</p>
                            <p className='text-white text-xl text-font'>That's My Client Portfolio React Web App </p>
                        </div>
                        <div>arrow</div>
                    </div>
                    <Pro_Box_1 project_number={one} data={data}/>
                </div>
            </div>
            </div>
            <div className='w-2/5 h-full flex items-end justify-end'>
                <div className='w-full h-auto bg-shades-7 border border-shades-8 rounded-3xl'>
                    <div className='w-full h-auto p-5 rounded-3xl border border-shades-5 text-stone-400 text-font text-xl'>
                        <p>Crafted with precision using React JS, Tailwind CSS, and the enchanting dance of Framer Motion, this web app is a symphony of innovation and design. <br /> <br />
                        🔄 React Router Magic: Transforming the website into a seamless, single-page application for a fluid user experience. <br />
                        🎨 Design Elegance: Implementing complex UI designs that showcase both skill and aesthetic finesse. <br />
🎭 Animated Symphony: Infusing life into the interface with captivating animations brought to life by Framer Motion. <br />
                       </p>
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
