"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import ToggleSwitch from "../toggle-switch";
import ThemeProvider from "@/Context/ThemeProvider";

const Header = (pageProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[hsla(0, 0%, 100%, 0.25)] flex flex-wrap justify-between items-center p-5 text-white font-bold z-50">
      <div className="text-lg">
        <Link
          href="/"
          className="font-extrabold text-2xl text-blue-300 hover:text-blue-500 transition-all duration-300"
        >
          <span className="grey-color"> &lt;</span>
          <span className="logo-name"> KC</span>
          <span className="grey-color">/&gt;</span>
        </Link>
      </div>

      <button
        className="md:hidden text-xl focus:outline-none"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        ☰
      </button>

      <nav
        className={`${
          isNavOpen ? "block" : "hidden"
        } w-full md:flex md:items-center md:gap-4 text-center md:w-auto`}
      >
        <Link
          href="/"
          className="block md:inline transition-transform duration-300 hover:scale-125  hover:text-blue-300"
        >
          Home
        </Link>
        <Link
          href="/home"
          className="block md:inline transition-transform duration-300 hover:scale-125  hover:text-blue-300"
        >
          About
        </Link>
        <Link
          href="/skill"
          className="block md:inline transition-transform duration-300 hover:scale-125  hover:text-blue-300"
        >
          Skills
        </Link>
        <Link
          href="/projects"
          className="block md:inline transition-transform duration-300 hover:scale-125  hover:text-blue-300"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="block md:inline transition-transform duration-300 hover:scale-125  hover:text-blue-300"
        >
          Contact
        </Link>
        <ThemeProvider>
          <ToggleSwitch {...pageProps} />
        </ThemeProvider>
      </nav>

      <Button variant="default">
        <Link
          href="/Assets/my_resume.pdf"
          target="_blank"
          className=" md:block"
        >
          Resume
        </Link>
      </Button>
    </header>
  );
};

export default Header;
