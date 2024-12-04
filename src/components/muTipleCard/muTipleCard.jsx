import React from "react";
import { Button } from "../ui/button";
import { mulCards } from "@/utils/home-text";
import Image from "next/image";

const MuTipleCard = () => {
  return (
    <div>
      <div className="flex flex-col p-10 items-center justify-center gap-6">
        <Button className="bg-white text-black font-bold relative group">
          My Approach
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin"></span>
        </Button>
        <h1 className="text-4xl font-extrabold">From an idea to execution</h1>
        <p className=" md:max-w-[50vw] max-w-[100%]  font-bold text-center">
          I have a step-by-step procedure for making your ideas come to life.
          From research and planning, I emphasize teamwork, iterative process
          while ensuring there is quality control to guarantee the outcome is
          better than anticipated.
        </p>
      </div>

      <div className="flex items-center justify-center gap-14 p-4  flex-wrap ">
        {mulCards.map((card, index) => {
          return (
            <div
              key={index}
              className="relative group md:w-[25vw] w-[55vw] h-80 shadow-xl   rounded-lg overflow-hidden   "
            >
              <div className="absolute border-2 inset-0 flex items-center rounded-xl justify-center border-teal-100 text-gray-700 font-semibold text-lg transition-all duration-300 ease-in-out group-hover:opacity-0">
                <Button className=" font-extrabold text-xl border-pink-900 rounded-full ">Phase {card.id}</Button>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={card.Image}
                    alt="Card Image"
                    className="w-full h-full object-scale-down"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-4">
                  <h3 className="text-lg font-bold">{card.text}</h3>
               
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MuTipleCard;
