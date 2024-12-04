"use client";
import { useRef } from "react";

import Education from "@/app/(pages)/education/education";
import Home from "./(pages)/home/page";
import Skills from "./(pages)/skill/page";
import MuTipleCard from "@/components/muTipleCard/muTipleCard";
import Contact from "./(pages)/contact/page";
import useScrollReveal from "@/utils/scroll";
import ThemeProvider from "@/Context/ThemeProvider";
import Projects from "./(pages)/projects/page";

const Page = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const mulCard = useRef(null);

  useScrollReveal([
    homeRef,
    skillsRef,
    educationRef,
    projectsRef,
    contactRef,
    mulCard,
  ]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div ref={homeRef} className="w-full flex items-center justify-center">
        <Home isdisplay="display" />
      </div>

      <div ref={skillsRef} className="w-full">
        <Skills />
      </div>
      <div ref={educationRef} className="w-full">
        <Education />
      </div>
      <div ref={mulCard}>
        <MuTipleCard />
      </div>
      <div className="w-full">
        <ThemeProvider ref={projectsRef}>
          <Projects />
        </ThemeProvider>
      </div>
      <div ref={contactRef} className="w-full">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
