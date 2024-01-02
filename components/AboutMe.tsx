/** @format */
"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function AboutMe() {
  function calculateYears() {
    const startYear = 2019;
    const currentYear = new Date().getFullYear();
    const yearDifference = currentYear - startYear;
  
    return yearDifference;
  }

  const leftComponentRef = useRef(null);
  const rightComponentRef = useRef(null);
  useEffect(() => {
    const leftComponent = leftComponentRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftComponent,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.fromTo(
            leftComponent,
            {
              opacity: 0,
              x: -50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 1,
            }
          );
        },
      },
    });

    // Refresh ScrollTrigger whenever the component unmounts
    return () => tl.scrollTrigger?.refresh();
  }, []);

  useEffect(() => {
    const rightComponent = rightComponentRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rightComponent,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.fromTo(
            rightComponent,
            {
              opacity: 0,
              x: 50,
            },
            {
              opacity: 1,
              x: 0,
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
    <div className="my-6 min-h-max" id="about">
      <div className="mx-8   md:mt-1">
        <div className="flex flex-col gap-6 lg:pl-[5rem]">
          <div className="block md:hidden h-[60px]"></div>
          <div
            className="flex  flex-col md:flex-row items-center justify-start gap-4 md:gap-6"
            ref={leftComponentRef}
          >
            <p className="text-aliceblue text-4xl font-bold">About me</p>
            <div className=" w-20 md:w-80 h-[3px] bg-orange-400 "></div>
          </div>
          <div
            className="flex flex-col  justify-center md:justify-between lg:flex-row gap-8 items-center  lg:items-center"
            ref={rightComponentRef}
          >
            <div className="lg:flex-4 ">
              <img
                src={"profile.jpeg"}
                className=" w-[12rem] h-[12rem] md:w-[20rem] lg:w-[25rem] bg-cover md:h-[20rem] lg:border-t-[6px] lg:border-l-[6px] border-slate-800 rounded-[80%] border-[6px] lg:border-b-0 lg:border-r-0 lg:rounded-lg"
                alt="Profile"
              />
            </div>
            <div className="text-lg max-sm:text-center  max-sm:text-sm flex-1 mx-4">
              <p className="text-mediumaquamarine">
               With {calculateYears()} years of experience as a seasoned full-stack developer, 
              I bring an extensive range of knowledge in developing end-to-end online solutions.
               I have successfully led the development, implementation, and maintenance of high-performance
                applications with a solid background in Devops Principles.
{/* 
                Hi! I am  a Full-Stack  developer  with two years of hands-on experience, 
                I specialize in crafting dynamic and user-centric web applications. 
                Proficient in both front-end and back-end technologies, 
                I bring a passion for innovation and a proven  record of delivering user friendly, robust,
                scalable solutions. */}
              </p>
              <p className="text-mediumaquamarine my-8"> 
                I bring a passion for innovation and a proven  record of delivering user friendly, robust,
                scalable solutions.
              </p>
              <p className="text-mediumaquamarine">
              
                 Beyond that, I am diving into IoT, exploring its exciting possibilities as a part of my continuous
                  learning journey.
{/* 
                 Beyond that, I am diving into Solidity and Web3, exploring its exciting possibilities as a part of my continuous
                  learning journey. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
