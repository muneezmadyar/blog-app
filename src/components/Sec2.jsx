import React from "react";
// import bgImage from "../assets/assets/Ai-imgae-sec-2.png";
// import { assets } from '../assets/assets' 

const Sec2 = () => {
  return (
    <div className="relative flex justify-center items-center p-6">
      {/* Background Image */}
      <div
        className="w-full max-w-6xl h-[500px] md:h-[500px] bg-cover bg-center rounded-xl overflow-hidden"
        style={{backgroundImage: "url('/Ai-imgae-sec-2.png')"}} 
      ></div>

      {/* Content Box */}
      <div className="absolute bottom-[-30px] left-[42%] md:left-50 bg-white p-6 md:p-8 shadow-lg rounded-xl w-11/12 md:w-3/4 lg:w-1/2">
        <p className="text-sm text-gray-500 uppercase font-semibold">
          Development <span className="ml-2">16 March 2023</span>
        </p>
        <h2 className="text-xl md:text-2xl font-bold mt-2">
          How to make a Game look more attractive with New VR & AI Technology
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses, and communities...
        </p>
        <button className="mt-4 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Sec2;
