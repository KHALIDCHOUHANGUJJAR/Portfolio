"use client";

import { homeText } from "@/utils/home-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = ({ isdisplay }) => {
  const handleDownload = () => {
    const fileUrl = "/Assets/my_resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "sample.pdf";
    anchor.click();
  };

  const { name, intro, image, image2 } = homeText[0];

  return (
    <div>
      <div className="mt-[10vh] sm:mt-[20vh] p-10 flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/2">
          {isdisplay === "display" ? (
            <h2 className="text-3xl transform hover:backdrop-hue-rotate-60 md:text-4xl font-bold text-center lg:text-left">
              {name}
              <span className="inline-block animate-wave origin-bottom-right">
                👋
              </span>
            </h2>
          ) : (
            <h1 className="text-3xl transform hover:backdrop-hue-rotate-60 md:text-4xl font-bold text-center lg:text-left">
              Reach Out to me!
            </h1>
          )}
          {isdisplay === "display" ? (
            <p className="text-lg md:text-xl transition-transform duration-300 hover:scale-30 text-gray-700 text-center lg:text-left leading-relaxed">
              {intro}
            </p>
          ) : (
            <div>
              <p className="text-lg md:text-xl transition-transform duration-300 hover:scale-30 text-gray-700 text-center lg:text-left leading-relaxed">
                Discuss a project or just want to say hi? My Inbox is open for
                all.
              </p>
              <br />
              <h1 className="text-xl transform hover:backdrop-hue-rotate-60 md:text-3xl font-bold text-center lg:text-left">
                Full Stack Developer @Khalidchouhan | building refactornow.dev
              </h1>
              <div className="flex flex-col gap-4 mt-4 font-bold">
                <div>
                  <FontAwesomeIcon icon={faLocationPin} /> Remote,
                </div>
                <div>Open For Opertunites: yes</div>
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-10 justify-center sm:justify-start mt-8 items-center w-full">
            <a
              href="https://www.linkedin.com/in/khalid-chouhan-427a222a6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 w-10"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-gray-400 text-3xl transition-transform duration-300 hover:scale-125 hover:text-blue-500 hover:shadow-[0_0_20px_8px_rgba(0,125,255,0.7)]"
              />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/KHALIDCHOUHANGUJJAR/khalidchouhandeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 w-10"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-400 transition-transform duration-300 hover:scale-125 text-3xl hover:text-gray-600 hover:shadow-[0_0_20px_8px_rgba(0,125,255,0.7)]"
              />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://wa.me/923485020076"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 w-10"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-gray-400 text-3xl transition-transform duration-300 hover:scale-125 hover:text-green-500 hover:shadow-[0_0_20px_8px_rgba(0,125,255,0.7)]"
              />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href="mailto:Khalidchuhan7886@gmail.com"
              className="flex flex-col items-center space-y-2 w-10"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 text-3xl transition-transform duration-300 hover:scale-125 hover:text-red-500 hover:shadow-[0_0_20px_8px_rgba(0,125,255,0.7)]"
              />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
          {isdisplay === "display" && (
            <div className="flex gap-10 space-x-10 mt-6 hover:scale-y-150">
              <Button>
              <Link
          href="/contact"
          className="block md:inline transition-transform duration-300 hover:scale-125  hover:text-blue-300"
        >
          Contact with me 
        </Link>
              </Button>
              <Button onClick={handleDownload}>Download Resume</Button>
            </div>
          )}
        </div>
        {isdisplay === "display" ? (
          <div className="lg:w-1/2 sm:mt-0 mt-16 flex justify-center">
            <Image
              src={image}
              alt="Developer Image"
              width={500}
              height={500}
              className="w-[100vw] sm:w-[30vw] h-auto rounded-lg shadow-lg transition-transform hover:-rotate-12 duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <Image
              src={image2}
              alt="Developer Image"
              width={1000}
              height={1000}
              className="rounded-full border-[6px] object-fill  border-[#6C63FF] w-[200vw] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] shadow-2xl transition-transform hover:rotate-2 duration-300 hover:scale-105 hover:shadow-purple-500"
              />
          </div>
        )}
      </div>
      <Link
        href={"/"}
        className="bg-black-500 shadow-[0_0_15px_5px_rgba(0,125,255,0.5)] hover:shadow-[0_0_20px_8px_rgba(0,125,255,0.7)] sm:w-[4vw] w-[16vw] h-[8vh] flex items-center justify-center rounded-full fixed top-[80%] right-[5%] z-10"
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-gray-400 cursor-pointer text-3xl transition-transform duration-300 hover:scale-125 hover:shadow-[0_0_20px_8px_rgba(0,125,255,0.7)]"
        />
      </Link>
    </div>
  );
};

export default Home;
