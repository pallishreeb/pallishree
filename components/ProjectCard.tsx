/** @format */

/// components/Card.js
import Link from "next/link";
import React from "react";
type ProjectCardProps = {
  title: string;
  image: string; // Assuming the image is local to your project
  gitHub: string;
  description: string;
  live: string | null;
};
const ProjectCard = ({
  title,
  image,
  gitHub,
  description,
  live,
}: ProjectCardProps) => {
  return (
    <div className="flip">
      <div
        className="front"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {/* <h1 className="bg-transparent text-black">{title}</h1> */}
      </div>
      <div className="back bg-slate-800  md:h-1/2">
        <h2 className="bg-transparent">{title}</h2>
        <p className="bg-transparent">{description}</p>
        <div className="flex py-4  gap-4 items-center lg:justify-start  justify-center bg-transparent">
            {live !== null &&
            <a href={live} target="_blank" rel="noopener noreferrer" className="bg-transparent">
            <button className=" border-purple-600 border font-medium text-base py-2 px-4 hover:text-white rounded-xl hover:bg-purple-600 hover:border-0">
             View Live
            </button>
          </a>
            }
            <a href={gitHub} target="_blank" rel="noopener noreferrer" className="bg-transparent">
              <button className="  border-purple-600 border font-medium text-base md:text-sm lg:text-base py-2 px-4 hover:text-white rounded-xl hover:bg-purple-600 hover:border-0">
                View Github
              </button>
            </a>
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
