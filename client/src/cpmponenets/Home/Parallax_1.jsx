// import React, { useRef } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
// import Hero from "./Hero/Hero";
// import Skill from "./Skill/Skill";
// import Icon_Magnetic from "./Hero/Icon_Magnetic";
// export default function Parallax_1() {
//   const ref = useRef();
//   return (
//     <div style={{ width: '100%', height: '100%', background: '#253237' }}>
//     <Parallax ref={ref} pages={3}>
//       <ParallaxLayer offset={1} speed={2} factor={3} style={{ backgroundColor: '#292327' }} />
//       <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#0173ba' }} />

//       <ParallaxLayer
//         offset={0}
//         speed={1}
//         factor={2.5}
//         style={{
//           // backgroundImage: url('stars', true),
//           // backgroundSize: 'cover',
//           backgroundColor: '#87BCDE'
//         }}
//       />

//       <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
//         {/* <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} /> */}
//       </ParallaxLayer>

//       <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} /> */}
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} /> */}
//       </ParallaxLayer>

//       <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} /> */}
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} /> */}
//       </ParallaxLayer>

//       <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} /> */}
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} /> */}
//       </ParallaxLayer>

//       <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} /> */}
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} /> */}
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} /> */}
//       </ParallaxLayer>

//       <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} /> */}
//         {/* <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} /> */}
//       </ParallaxLayer>

//       <ParallaxLayer
//         offset={2.5}
//         speed={-0.4}
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           pointerEvents: 'none',
//         }}
//       >
//         {/* <img src={url('earth')} style={{ width: '60%' }} /> */}
//       </ParallaxLayer>

//       <ParallaxLayer
//         offset={2}
//         speed={-0.3}
//         style={{
//           backgroundSize: '80%',
//           backgroundPosition: 'center',
//           // backgroundImage: url('clients', true),
//         }}
//       />

//       <ParallaxLayer
//         offset={0}
//         speed={-1}
//         factor={1}
//         onClick={() => parallax.current.scrollTo(1)}
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//          <div className="w w- h-screen bg-shades-1 flex items-start justify-center overflow-hidden z-20">
//         <div className="flex flex-col w-40 items-center h-screen justify-center gap-5 ml-4 text-shades-4 z-10">
       
          
//           <Icon_Magnetic>
//           <a href="https://www.linkedin.com/in/kopildas/" className='cursor-pointer'><FaLinkedinIn /></a>
              
            
//           </Icon_Magnetic>
//           <Icon_Magnetic>
//           <a href="https://github.com/kopildas" className='cursor-pointer'><FaGithub /></a>
              
            
//           </Icon_Magnetic>
//           <Icon_Magnetic>
//           <a href="https://twitter.com/KopilDas_" className='cursor-pointer'><FaTwitter /></a>
              
            
//           </Icon_Magnetic>
//           <Icon_Magnetic>
//           <a href="https://www.instagram.com/kopildas_/" className='cursor-pointer'> <FaInstagram /></a>
             
            
//           </Icon_Magnetic>
//         </div>

//         <div className=" h-screen bg-shades-1 flex flex-col items-start p-20 justify-center z-10 mt-14 overflow-hidden">
//           <p className="text-[4.2rem] text-gray-300 font1">Web Developer</p>
//           <p className="mt-10 text-shades-8 text-[27px] text-font">
//             Hola This is Kopil..! <br /> I'm a{" "}
//             <span className="">Front-end Developer</span> turning concepts into
//             digital art. Learning MERN Development to make your websites not
//             just visually enchanting, but fully functional. <br /> Let's
//             co-create digital wonders!
//           </p>
//           <div className="relative group">
//             <div className="absolute inset-0 bg-shades-4 rounded-2xl mt-6 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition ease-in-out duration-700 group-hover:duration-200 animate-tilt"></div>
//             <button className="w-auto h-auto rounded-2xl text-shades-8 bg-shades-1  px-8 py-2 font2 mt-6 relative">
//               Resume <span className="text-shades-4">-</span>
//             </button>
//           </div>
//         </div>

//       </div>
//         {/* <img src={url('server')} style={{ width: '20%' }} /> */}
//       </ParallaxLayer>

//       <ParallaxLayer
//         offset={0}
//         speed={-1}
//         onClick={() => parallax.current.scrollTo(2)}
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
        
//         {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
//       </ParallaxLayer>

//       <ParallaxLayer
//         offset={2}
//         speed={-0}
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//         onClick={() => parallax.current.scrollTo(0)}
//       >
//         {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
//       </ParallaxLayer>
//     </Parallax>
//   </div>
//   );
// }
