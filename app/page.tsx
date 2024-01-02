/** @format */

import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-md:mt-[80px] flex flex-col">
      <HeroSection />
      <Projects />
      <Skills />
      <AboutMe />
    </main>
  );
}
