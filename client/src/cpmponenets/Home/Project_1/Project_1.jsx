import React from "react";
import "./Project_1.css";
import Pro_Box_1 from "../Pro_Box_1/Pro_Box_1";
export default function Project_1() {
  const one = 1;
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
    <section className="h-auto flex  bg-shades-1 z-20 ">
      <div className="lg:p-20 p-5 flex flex-col w-full">

        <div className="lg:px-10 bg-red-00 flex flex-col lg:flex-row items-center justify-center mt-10 mb-10 font2 rounded-3xl gap-5 border border-shades-3 p-[5px]">
          
          <div className="lg:w-3/5 h-auto hover:bg-gradient-1 ease-in-out duration-500 rounded-3xl">
            <div
              className=" h-auto rounded-3xl flex flex-col border border-shades-4 backdrop-blur-xl back "
              style={{
                backgroundColor: "#0f3a3322",
              }}
            >
              <div className=" backdrop-blur-md rounded-3xl">
                <div className="flex items-center justify-between lg:p-10 p-5 border m-1 border-shades-6 rounded-3xl">
                  <div className="flex flex-col">
                    <p className="text-2xl text-white">Woodhy</p>
                    <p className="text-white text-xl text-font">
                      A MERN stack project
                    </p>

                    <div className="flex mt-2 text-sm opacity-80">
                      <div className="b bg-waka_total rounded text-font text-white lg:text-[16px] pl-1 pr-1 shadow-sm">
                        <p className="d drop-shadow-md px-2 py-1 text-sm">October 2023 – December 2023</p>
                      </div>
                      
                    </div>
                  </div>
                  {/* <div>arrow</div> */}
                </div>
                <Pro_Box_1 project_number={one} data={data} />
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 h-full flex items-end justify-end">
            <div className="w-full h-auto bg-shades-7 border border-shades-8 rounded-3xl">
              <div className="w-full h-auto p-5 rounded-3xl border border-shades-5 text-stone-400 text-font text-xl">
                <p>Woodhy, is my latest MERN Stack creation!</p>
                <br />
                <p>Features:</p>
                <p className="t text-base 2xl:text-lg">
                  <ul>
                    <li>◼ User-friendly single page application</li>
                    <li>◼ Sleek admin panel for efficient management</li>
                    <li>◼ Dynamic sorting for an enhanced user experience</li>
                    <li>◼ Features dynamic sorting, customizable pricing options, and seamless review addition </li>
                    <li>◼ JWT ensuring secure user authentication</li>
                    <li>◼ Innovative "favorite" button for personalized interaction
</li>
                  </ul>
                </p>
                <br />
                <p>Technology Stack:</p>
                <div className="flex flex-wrap gap-2 text-base mt-2">
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">React</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">Tailwind CSS</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">MongoDB</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">Mongoose ODM</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">Node.js</p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">Express.js</p>
                </div>

              </div>
              <div className="w-full h-auto rounded-3xl border border-shades-5 text-stone-400 flex items-center justify-center">
                <a
                  className="lg:w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl"
                  href="https://github.com/kopildas/furniture"
                >
                  <div>Github link</div>
                </a>
                <div></div>
                <a
                  className="lg:w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl"
                  href="https://woodhy.vercel.app/"
                >
                  <div>Go to the website</div>
                </a>
                <div></div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
