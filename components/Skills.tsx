/** @format */

"use client";
// components/Skills.tsx
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const languages = [
  { name: "JavaScript", logo: "/js.png" },
  { name: "TypeScript", logo: "/ts.png" },
  // { name: "Solidity", logo: "/solidity.svg" },
  { name: "C++", logo: "/c++.png" },
  { name: "Java", logo: "/java.png" },
  { name: "Python", logo: "/python.png" },
  { name: "PHP", logo: "/php.png" },
];
const frameworks = [

  // { name: "Angular", logo: "/ng.png" },
  { name: "Node & Express", logo: "/NodeJs.png" },
  { name: "React", logo: "/React.png" },
  { name: "Next", logo: "/next.webp" },
  { name: "Laravel", logo: "/laravel.png" },
  { name: "Django", logo: "/dj.png" },
  { name: "SpringBoot", logo: "/spring.png" },
  { name: "React Native", logo: "/rn.png" },
  { name: "HTML", logo: "/html-5.png" },
  { name: "CSS", logo: "/css-3.png" },
];

const databasesAndTools = [
  { name: "MongoDB", logo: "/mongo.png" },
  { name: "MySql", logo: "/mySQL.png" },
  { name: "PostgreSQL", logo: "/pg.png" },
  { name: "Git", logo: "/git.png" },
  { name: "Postman", logo: "/postman.svg" },
  { name: "Figma", logo: "/figma.png" },
  { name: "Jira", logo: "/jira.png" },
  { name: "AWS", logo: "/aws.png" },
  { name: "Docker", logo: "/docker.png" },
];

interface SkillsProps {
  isHomePage?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isHomePage = true }) => {
  const textRef = useRef(null);
  useEffect((): any => {
    const text = textRef.current;
 
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
      onEnter: () => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          }
        );
      },
    },
  });

  // Refresh ScrollTrigger whenever the component unmounts
  return () => tl?.scrollTrigger?.refresh();
  }, []);
  return (
    <div id="skills" className="my-2 md:my-6" ref={textRef}>
      <div className="mx-8 mt-10 md:mt-1 mb-6">
        <div className="flex flex-col gap-6 lg:pl-[5rem]">
          <div className="block  h-[60px]"></div>
          <div className="flex  flex-col md:flex-row items-center justify-start gap-4 md:gap-6">
            <p className="text-aliceblue text-4xl font-bold">My Skills</p>
            <div className=" w-20 md:w-80 h-[3px] bg-orange-400 "></div>
          </div>
          <div>
            <h2 className="  mb-4 text-lg font-medium max-sm:text-base  uppercase text-mediumaquamarine">
              Languages
            </h2>
            <ul className="grid grid-cols-6 lg:grid-cols-12 gap-4">
              {languages.map((skill, index) => (
                <div
                  key={index}
                  className="bg-transparent p-2   rounded-lg flex flex-col items-center justify-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} `}
                    className="md:w-16 lg:w-20 lg:h-20 md:h-16 mb-2 bg-transparent object-contain overflow-hidden w-8 h-8"
                  />
                  <p className="text-white text-xs md:text-sm">{skill.name}</p>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="  mb-4 text-lg font-medium max-sm:text-base uppercase text-mediumaquamarine">
              Web Technologies & Frameworks
            </h2>
            <ul className="grid grid-cols-6 lg:grid-cols-12 gap-4">
              {frameworks.map((skill, index) => (
                <div
                  key={index}
                  className="bg-transparent p-2   rounded-lg flex flex-col text-center items-center justify-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} `}
                    className="md:w-16 md:h-16 mb-2 bg-transparent overflow-hidden w-8 h-8"
                  />
                  <p className="text-white text-xs md:text-sm">{skill.name}</p>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="  mb-4 text-lg font-medium max-sm:text-base uppercase text-mediumaquamarine">
              Databases & Dev Tools
            </h2>
            <ul className="grid grid-cols-6 lg:grid-cols-12 gap-1 md:gap-4 ">
              {databasesAndTools.map((skill, index) => (
                <div
                  key={index}
                  className="bg-transparent p-2   rounded-lg flex flex-col items-center justify-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} `}
                    className="md:w-16 md:h-16 mb-2 bg-transparent overflow-hidden w-8 h-8"
                  />
                  <p className="text-white text-xs md:text-sm">{skill.name}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
