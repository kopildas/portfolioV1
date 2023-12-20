import React, { useEffect, useState } from 'react';
import Hero from '../../cpmponenets/Home/Hero/Hero';
import Skill from '../../cpmponenets/Home/Skill/Skill';
import Project_1 from '../../cpmponenets/Home/Project_1/Project_1';
import Project_2 from '../../cpmponenets/Home/Project_2/Project_2';
import Project_3 from '../../cpmponenets/Home/Project_3/Project_3';


export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div className='overflow-hidden z-0'>
      {/* <Parallax_1/> */}
      <Hero />
      <Skill />
      <Project_1 />
      <Project_2 />
      <Project_3 />
    </div>
  );
}
