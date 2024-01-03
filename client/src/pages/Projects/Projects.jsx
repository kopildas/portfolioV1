import React, { useEffect, useState } from "react";
import Under_construnction from "../../cpmponenets/Under_construnction";
import { data } from "../../Data/Data";
import Project_card from "../../cpmponenets/Project_card/Project_card";

export default function Projects() {
  const [projects,setProjects] = useState(data)
  const category = [
    { value: "All" },
    {
      value: "MERN",
    },
    {
      value: "React",
    },
    { value: "HTML" },
    { value: "Java" },
    { value: "ML" },
  ];
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    if (filter !== "All") {
      setProjects(data?.filter((n) => n.category === filter));
    }
    else{
      setProjects(data)
    }
  }, [data, filter]);
  console.log(data);
  console.log(projects)
  return (
    <div className="h-auto flex flex-col bg-shades-1">
      <div className="flex mt-16 p-10 flex-col">
        <p className="text-xl lg:text-7xl font1  text-shades-8">Projects</p>
        <div className="lg:w-[15rem] h-[4rem] -mt-[29px] -ml-5 border-2 border-shades-4"></div>
      </div>

      <div className="w-full h- bg-shades-1 flex items-center justify-center">
        <div className="w- flex gap-5 font1">
        {category &&
                      category.map((category) => (
                        <div
                          key={category?.id}
                          onClick={() => setFilter(category.value)}
                        >
                          <div
                            className={`group ${
                              filter === category.value
                                ? "bg-orange-300"
                                : "bg-slate-100 hover:bg-orange-100"
                            } w-20 h-8  cursor-pointer rounded-lg drop-shadow-xl flex flex-row md:flex-col gap-3 items-center justify-center duration-200 transition-all ease-in-out `}
                          >
                            <p className="text-md font-semibold">
                               {category.value}
                            </p>
                          </div>
                        </div>
                      ))}
        </div>
        
      </div>

      <div className="w-full h-auto bg-shades-1 flex items-center justify-center ">
        {projects && <Project_card projects={projects}/>}
</div>
    </div>
  );
}
