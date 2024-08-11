import React, { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "../../cpmponenets/Home/Hero/Hero";
import Skill from "../../cpmponenets/Home/Skill/Skill";
import Project_1 from "../../cpmponenets/Home/Project_1/Project_1";
import Project_2 from "../../cpmponenets/Home/Project_2/Project_2";
import Project_3 from "../../cpmponenets/Home/Project_3/Project_3";
import Project_4 from "../../cpmponenets/Home/Project_4/Project_4";
import Skills from "../../cpmponenets/Home/Skill/Skills";
import TextReveal from "../../cpmponenets/Home/Skill/TextReveal";
import TextReveal_2 from "../../cpmponenets/Home/Skill/TextReveal_2";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { projects } from "../../data.js";

import { useTransform, motion, useScroll } from "framer-motion";
import Card from "../../cpmponenets/card/Card";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function Home() {
  const navigate = useNavigate();
  const [offsetY, setOffsetY] = useState(window.scrollY);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const lastCard = document.querySelector(".card.scroll_img");
  //   const pinnedCard = document.querySelectorAll("");

  //   pinnedCard.forEach((div, index, sections) => {
  //     let img = div.querySelector(".img");
  //     let nextSection = sections[index + 1] || lastCard;
  //     let endScalePoint = `top+=${
  //       nextSection.offsetTop - div.offsetTop
  //     } top`;

  //     gsap.to(div, {
  //       scrollTrigger: {
  //         trigger: '.card',
  //         start: "top top",
  //         end:
  //           index === sections.length
  //             ? `+=${lastCard.offsetHeight / 3}`
  //             : "window.innerHeight",
  //         pin: true,
  //         pinSpacing: false,
  //         scrub: 1,
  //       },
  //     });
  //     console.log(window.innerHeight);
  //     console.log(div.offsetTop);
  //     console.log(nextSection.offsetTop);
  //     console.log(endScalePoint);
  //     gsap.fromTo(
  //       img,
  //       { scale: 1 },
  //       {
  //         scale: 0.5,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: div,
  //           start: "top center",
  //           end: endScalePoint,
  //           scrub: 1,
  //         },
  //       }
  //     );
  //   });

  //   // Cleanup function to remove event listeners on unmount (optional)
  //   return () => {
  //     // Remove event listeners here if needed
  //   };
  // }, [window.innerHeight]);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end end"],
  });

  // useEffect( () => {
  //   const lenis = new Lenis()

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // })

  return (
    <div className="h-auto">
      <Hero offsetY={offsetY} />
      <Skills />
      <div className="flex flex-col items-end justify-end mt-10 mr-14">
        <p className="text-2xl lg:text-8xl font1 z-10 text-shades-8">
          Projects
        </p>
        <div className="lg:w-[18rem] h-[4rem] -mt-[38px] -mr-4 border-2 border-shades-4"></div>
      </div>
      {/* // ref={container} */}
      <div className=" mt-[15vh] cardContainer">
          <div className="sticky bg-red-300 top-0  h-screen w-full cardContainer items-center justify-center">
            <div className="custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-panoverlay card  opacity-100">
              <p className="text-[20px]">asjfhas</p>
            </div>
          </div>

          <div className="sticky bg-blue-300 top-0 flex h-screen w-full items-center justify-center">
            <div className="custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-panoverlay card  opacity-100">
              <p className="text-[20px]">Second Section</p>
            </div>
          </div>

          <div className="sticky bg-green-300 top-0 flex h-screen w-full items-center justify-center">
            <div className="custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-panoverlay card  opacity-100">
              <p className="text-[20px]">Third Section</p>
            </div>
          </div>

          <div className="sticky bg-yellow-300 top-0 flex h-screen w-full items-center justify-center">
            <div className="custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-panoverlay card  opacity-100">
              <p className="text-[20px]">Fourth Section</p>
            </div>
          </div>
        </div>

    </div>
  );
}
