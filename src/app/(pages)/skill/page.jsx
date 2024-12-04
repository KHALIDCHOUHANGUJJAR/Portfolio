"use client";
import React from "react";
import Image from "next/image";
import { SkillText2 } from "@/utils/home-text";
import { skills } from "@/utils/home-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { proficiencyskills } from "@/utils/home-text";
const Skills = () => {
  const { heading, pHeading, image, Text1, Text2, Text3 } = SkillText2[0];

  return (
    <div>
      <div className="mt-[5vh] sm:mt-[5vh] p-10 flex flex-col-reverse lg:flex-row justify-between items-center">
        <div>
          <Image
            src={image}
            alt="Developer Image"
            width={500}
            height={500}
            className="object-cover opacity-1 transform hover:rotate-12 w-[100vw] sm:w-[45vw] sm:h-[70vh]  mt-16 sm:mt-0  rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        <div className="flex flex-col sm:text-left text-center gap-8 w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-extrabold">{heading}</h1>
            <h2 className="text-base font-bold">{pHeading}</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((item, key) => (
              <div
                key={key}
                className="flex flex-col transform scale-x-[-1] items-center  justify-center space-y-2 bg-[hsla(100, 100%, 100%, 0.25)] hover:bg-slate-400 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <FontAwesomeIcon
                  icon={item.image}
                  size="3x"
                  color="#E34F26"
                  title={item.name}
                />

                <p className="text-sm font-medium text-gray-700">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="text-gray-500 font-medium">
            <p>{Text1}</p>
            <p>{Text2}</p>
            <p>{Text3}</p>
          </div>
        </div>
      </div>
      <section className=" text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 hover:translate-y-2 ">Proficiency</h2>
          {proficiencyskills.map((skill, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-medium hover:translate-x-1 mb-2">{skill.label}</h3>
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-indigo-500 h-4 rounded-full cursor-pointer transition-all text-center duration-500"
                  style={{ width: `${skill.percentage}%` }}
                >
                  {skill.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
