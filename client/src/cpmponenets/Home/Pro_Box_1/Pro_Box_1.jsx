import React from 'react'

export default function Pro_Box_1({id,data}) {
    console.log(id)
  return (
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
  )
}
