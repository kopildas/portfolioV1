import React from 'react'
import Pro_Box_1 from '../Pro_Box_1/Pro_Box_1';

export default function Project_2() {
    const one=2;
    const data = [
        { id: 1, image: "https://i.ibb.co/HTcV66Q/mobile-10.png" },
        { id: 2, image: "https://i.ibb.co/YBypffp/mobile-11.png" },
        { id: 3, image: "https://i.ibb.co/kBr0c29/mobile-12.png" },
        { id: 4, image: "https://i.ibb.co/NskxnjJ/mobile-13.png" },
        { id: 5, image: "https://i.ibb.co/BC0scRD/mobile-14.png" },
        { id: 6, image: "https://i.ibb.co/6gdQ68G/mobile-15.png" },
        { id: 7, image: "https://i.ibb.co/gZQ8RTJ/mobile-18.png" },
    ];
  return (
    <section className='h-auto flex  bg-shades-1 '>
    <div className='lg:p-20 p-5 flex flex-col w-full'>

      <div className='lg:px-10 bg-red-00 flex flex-col lg:flex-row items-center justify-center mt-10 mb-10 font2 rounded-3xl gap-5 border border-shades-3 p-[5px]'>
         

          <div className='lg:w-2/5 h-full flex items-start justify-start'>
              <div className='w-full h-auto bg-shades-7 border border-shades-8 rounded-3xl'>
                  <div className='w-full h-auto p-5 rounded-3xl border border-shades-5 text-stone-400 text-font text-xl'>
                      <p>Fashioned with the delectable trio of React, Firebase, and Tailwind CSS, Omano orchestrates a seamless blend of design and functionality.</p>
                      <br />
                <p>Features:</p>
                <p className="t text-base 2xl:text-lg">
                  <ul>
                    <li>◼ Dynamic table booking system,View table availability</li>
                    <li>◼ User authentication via JWT</li>
                    <li>◼ Empowers admins to manage food items</li>
                    <li>◼ Dynamic sorting for an enhanced user experience</li>
                    <li>◼ User-friendly features, Dynamic sorting for enhanced experience</li>
                
                  </ul>
                </p>

                <br />
                <p>Technology Stack:</p>
                <div className="flex flex-wrap gap-2 text-base mt-2">
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">React</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">Tailwind CSS</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">MongoDB</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">Node.js</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">Express.js</p>
                </div>


                  </div>
                  <div className='w-full h-auto rounded-3xl border border-shades-5 text-stone-400 flex items-center justify-center'>
                  <a className='lg:w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl' href="https://github.com/kopildas/omano-restaurant">
                        <div >Github link</div></a>
                      <div></div>
                      <a className='lg:w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl' href="https://omano-restaurant.vercel.app/">
                        <div >Go to the website</div></a>
                      <div></div>
                  </div>
              </div>
          </div>


          <div className='lg:w-3/5 h-auto hover:bg-gradient-1 ease-in-out duration-500 rounded-3xl'>
          <div className=' h-auto rounded-3xl flex flex-col border border-shades-4 backdrop-blur-lg ' style={{
            backgroundColor: "#1213221f",
          }} >
              <div className=' backdrop-blur-md rounded-3xl'>
                  <div className='flex items-center justify-between lg:p-10 p-5 border m-1 border-shades-6 rounded-3xl'>
                      <div className='flex flex-col'>
                          <p className='text-2xl text-white'>Omano</p>
                          <p className='text-white text-xl text-font'>A Food ordering and restaurant booking project</p>

                          <div className='flex mt-2 text-sm opacity-80'>
                                <div className='b bg-waka_total rounded text-font text-white text-[16px] pl-1 pr-1 shadow-sm'><p className='d drop-shadow-md px-2 py-1 text-sm'>June 2023 – August 2023</p></div>
                            

                            </div>
                      </div>
                      {/* <div>arrow</div> */}
                  </div>
                  <Pro_Box_1 project_number={one} data={data}/>

              </div>
          </div>
          </div>

      </div>
 
      
      </div>
  </section>
  )
}
