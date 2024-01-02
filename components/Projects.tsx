/** @format */
"use client"
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {links} from "@/lib/links"
gsap.registerPlugin(ScrollTrigger);


export default function Projects() {
  const projects = [
    {
      title: "E-commerce Site",
      description: "It is an intuitive e-commerce platform, ensuring seamless navigation, secure transactions, and responsive design for optimal user experience. ",
      image: "card1.png",
      gitHub: links.project1,
      live: null,
    },
    {
      title: "Food Ordering Website",
      description:
        "The online food shopping website is designed allows convenient browsing, selection, and purchase of various food items.",
      image: "foodie.jpg",
      gitHub:  links.project2,
      live: null,
    },
    {
      title: "Blog Portal",
      description:
        "Delivered a feature-rich blog application that not only provides users with a seamless reading experience but also fosters community engagement through comments.",
      image: "card7.png",
      gitHub:  links.project3 ,
      live: null,
    },
    {
      title: "E-Learning Website",
      description:
        "This Learning Management System serves as a centralized hub for educational content, enabling easy access, interaction, and tracking of courses and materials.",
      image: "card2.png",
      gitHub:  links.project4,
      live: null,
    },
    {
      title: "Social Media Site",
      description:
        "A comprehensive social media platform with features like messaging, posts, and notifications, connecting users seamlessly in a vibrant online community.",
      image: "card5.png",
      gitHub: links.project5,
      live: null,
    },
    {
      title: "Crossplatform Mobile App",
      description:
        "It is a React Native-based news link sharing app enables users to discover, share, news, study articles easily, fostering community engagement  around trending topics.",
      image: "card6.jpg",
      gitHub:  links.project6,
      live: null,
    },

  ];
  const projectsRef = useRef(null);

  useEffect(() => {
   const projectsSection = projectsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSection,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.fromTo(
            projectsSection,
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
    <div className="mx-8 mt-10 md:mt-1 mb-8" id="projects" ref={projectsRef}>
      <div className="  flex flex-col  gap-8 lg:pl-[5rem] ">
        <div className="block  h-[60px]"></div>
        <div className="flex flex-row justify-between">
          <div className="flex  flex-col md:flex-row items-center justify-start gap-4 md:gap-6">
            <p className=" text-aliceblue text-4xl font-bold">Projects</p>

            <div className="w-20 md:w-80 h-[3px] bg-orange-400"></div>
          </div>

          <div>
            <a href={links.git} target="_blank" rel="noopener noreferrer">
              <button className="border-purple-600 border font-medium text-base py-2 px-4 hover:text-white rounded-xl hover:bg-purple-600 hover:border-0">
                View All
              </button>
            </a>
          </div>
        </div>
        <p className="text-mediumaquamarine  font-normal text-base max-sm:text-sm">
          Here is the list of some of my projects i have worked on,feel free to
          check it out
        </p>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:
       col-span-full gap-x-5 gap-y-5"
        >
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              gitHub={item.gitHub}
              live={item.live}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
