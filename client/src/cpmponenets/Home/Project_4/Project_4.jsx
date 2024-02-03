import React from "react";
import "../Project_1/Project_1.css";
import Pro_Box_1 from "../Pro_Box_1/Pro_Box_1";

export default function Project_4() {
  const one = 1;
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/rbcr3Dy/Screenshot-2024-01-27-221813.png",
    },
    {
      id: 2,
      image: "https://i.ibb.co/rbcr3Dy/Screenshot-2024-01-27-221813.png",
    },
    {
      id: 3,
      image: "https://i.ibb.co/rbcr3Dy/Screenshot-2024-01-27-221813.png",
    },
    {
      id: 4,
      image: "https://i.ibb.co/rbcr3Dy/Screenshot-2024-01-27-221813.png",
    },
    {
      id: 5,
      image: "https://i.ibb.co/rbcr3Dy/Screenshot-2024-01-27-221813.png",
    },
    {
      id: 6,
      image: "https://i.ibb.co/rbcr3Dy/Screenshot-2024-01-27-221813.png",
    },
    {
      id: 7,
      image: "https://i.ibb.co/rbcr3Dy/Screenshot-2024-01-27-221813.png",
    },
  ];

  return (
    <section className="h-auto flex  bg-shades-1 z-20 ">
      <div className="lg:p-20 p-5 flex flex-col w-full">
        <div className="flex flex-col items-end justify-end">
          <p className="text-2xl lg:text-8xl font1 z-10 text-shades-8">
            Projects
          </p>
          <div className="lg:w-[18rem] h-[4rem] -mt-[38px] -mr-7 border-2 border-shades-4"></div>
        </div>

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
                    <p className="text-2xl text-white">Medvision-Ai</p>
                    <p className="text-white text-xl text-font">
                      A Machine Learning project
                    </p>

                    <div className="flex mt-2 text-sm opacity-80">
                      <div className="b bg-waka_total rounded text-font text-white lg:text-[16px] pl-1 pr-1 shadow-sm">
                        <p className="d drop-shadow-md px-2 py-1 text-sm">January 2023 - January 2024</p>
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
                <p>
                  Medical Image Recognition Web App utilizing Machine Learning
                </p>
                <br />
                <p>Features:</p>
                <p className="t text-base 2xl:text-lg">
                  <ul>
                    <li>
                      ◼ Developed a Streamlit web app for medical image analysis.
                    </li>
                    <li>
                      ◼ Tested and validated models on diverse datasets.
                    </li>
                    <li>
                      ◼ Achieved 72% accuracy in Naive Bayes and CNN attained
                      87% accuracy in Chest X-ray classification.
                    </li>
                    <li>
                      ◼ Collaboratively developed Transfer Learning for enhanced
                      accuracy.
                    </li>
                  </ul>
                </p>
                <br />
                <p>Technology Stack:</p>
                <div className="flex flex-wrap gap-2 text-base mt-2">
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">
                  Python
                  </p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">
                    OpenCV
                  </p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">
                  Streamlit
                  </p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">
                  TensorFlow
                  </p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">
                    CNN
                  </p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">
                    Transfer Learning
                  </p>
                  <p className="b bg-shades-1 text-shades-8 p-2 px-4 rounded-xl">
                    Naive Bayes
                  </p>
                </div>
              </div>
              <div className="w-full h-auto rounded-3xl border border-shades-5 text-stone-400 flex items-center justify-center">
                <a
                  className="lg:w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl"
                  href="https://github.com/TeamMalloc/final-year-ML-projcet"
                >
                  <div>Github link</div>
                </a>
                <div></div>
                <a
                  className="lg:w-1/2 rounded-3xl bg-shades-8 h-full flex items-center justify-center text-shades-1 p-5 border border-shades-7 text-xl"
                  href="https://huggingface.co/spaces/kopildas/medvision-ai"
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
