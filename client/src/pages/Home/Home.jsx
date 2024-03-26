import React, { useEffect, useState } from 'react';
import Hero from '../../cpmponenets/Home/Hero/Hero';
import Skill from '../../cpmponenets/Home/Skill/Skill';
import Project_1 from '../../cpmponenets/Home/Project_1/Project_1';
import Project_2 from '../../cpmponenets/Home/Project_2/Project_2';
import Project_3 from '../../cpmponenets/Home/Project_3/Project_3';
import Project_4 from '../../cpmponenets/Home/Project_4/Project_4';
import Skills from '../../cpmponenets/Home/Skill/Skills';
import TextReveal from '../../cpmponenets/Home/Skill/TextReveal';
import TextReveal_2 from '../../cpmponenets/Home/Skill/TextReveal_2';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [offsetY, setOffsetY] = useState(window.scrollY);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div className='overflow-hidden z-0'>
      {/* <Parallax_1/> */}
      <Hero offsetY={offsetY}/>
      <Skills/>
      {/* <TextReveal/>
      <TextReveal_2/> */}
      {/* <Skill /> */}
      <Project_4 />
      <Project_1 />
      <Project_2 />

      <div className='w-full bg-red-00 flex items-center justify-center -mt-10 mb-20'>
          <p className='px-7 py-2 bg-shades-4 text-xl font-semibold text-shades-1 rounded-2xl hover:scale-110 duration-200 transition ease-in-out cursor-pointer' onClick={() => {
            navigate("/projects");
          }}>VIew More</p>
        </div>
    </div>
  );
}
