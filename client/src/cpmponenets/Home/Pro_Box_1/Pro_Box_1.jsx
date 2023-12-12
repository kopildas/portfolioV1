import React, { useEffect, useState } from 'react'
import { IoMdArrowDropright,IoMdArrowDropleft,IoMdArrowDropleftCircle,IoMdArrowDroprightCircle } from "react-icons/io";

export default function Pro_Box_1({project_number,data}) {

    const[number,setNumber] = useState(1)
    const[displayImage,setDisplayImage] = useState(data[0].image)


    const decrease = ()=> {
        if(number <= 1)
        {
            setNumber(data.length)
        }else {
            setNumber(number - 1)
        }
    }
    const increase = ()=> {
        if(number >= data.length)
        {
            setNumber(1)
        }else {
            setNumber(number + 1)
        }
    }

    useEffect(() => {
      setDisplayImage(data[number-1].image) // because number started from 1 and id also started from 1 so we have to decrease it by 1
    }, [number])


  return (
    <div className='w-3/5 h-auto hover:bg-gradient-1 ease-in-out duration-500 rounded-3xl'>
            <div className=' h-auto rounded-3xl flex flex-col border border-shades-4 backdrop-blur-xl back ' style={{
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
                    <div className='o object-contain p-5 relative flex items-center justify-center'>
                    <img src={displayImage} alt="mobile" border="0" className='w-full rounded-3xl'/>
                    
                    <div className='w-full  h-10 bg-red-40 absolute flex items-center justify-between p-5'>
                        <div className=' w-10 h-10 flex bg-orange-200 opacity-60 hover:opacity-100 hover:text-7xl hover:w-12 hover:h-12 ease-in-out duration-300 items-center justify-center text-5xl cursor-pointer rounded-full' onClick={decrease}>
                            <IoMdArrowDropleft/>
                        </div>
                        <div className=' w-10 h-10 bg-orange-200 opacity-60 hover:opacity-100 hover:text-7xl hover:w-12 hover:h-12 ease-in-out duration-300 cursor-pointer rounded-full flex items-center justify-center text-5xl' onClick={increase}>
                        <IoMdArrowDropright />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
  )
}
