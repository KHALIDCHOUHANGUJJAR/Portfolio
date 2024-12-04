import React from "react";

const Education = () => {
  return (
    <div className="container  px-4">
     
      <div className="space-y-8 p-8  ">
      <h2 className="text-3xl font-bold mb-6 hover:translate-x-2  ">Education</h2>
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-400 hover:border-b-gray-500 transition-all duration-300 ease-in-out p-6 rounded-lg shadow-lg">
          <div>
            <h3 className="text-xl font-semibold">Intermediate in Commerce</h3>
            <p className="text-sm text-gray-400">2023 - 2025</p>
            <p className="mt-2">Karachi, Pakistan</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="bg-yellow-500 text-black py-1 px-3 rounded-full text-sm">
              Ongoing
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-400 hover:border-b-gray-500 transition-all duration-300 ease-in-out p-6 rounded-lg shadow-lg">
          <div>
            <h3 className="text-xl font-semibold">Matric in Science</h3>
            <p className="text-sm text-gray-400">2021 - 2023</p>
            <p className="mt-2">Mansehra, Pakistan</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="bg-green-500 text-black py-1 px-3 rounded-full text-sm">
              Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
