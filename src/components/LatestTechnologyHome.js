import React from "react";

function LatestTechnologyHome() {
  return (
    <div className=" space-y-6">
      <div className=" flex items-center justify-between">
        <h2 className=" font-bold lg:text-3xl md:text-2xl text-xl">Latest Technology</h2>
        <div className="flex items-center space-x-2 font-semibold text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
          <p className=" md:text-base text-sm">View All</p>
        </div>
      </div>
      <div className=" space-y-3 md:space-y-0 md:flex items-center h-[250px] md:h-[380px]">
        <div className="bg-img-2 h-full w-full relative">
          <div className=" inset-0 bg-gray-800 bg-opacity-15 w-full h-full absolute"></div>
          <div className=" absolute left-5 bottom-5 md:space-y-2">
            <button className=" py-1 text-white text-[12px] md:text-[13px]">
              Technology
            </button>
            <h2 className=" font-semibold text-white text-base md:text-xl lg:text-2xl pr-12 lg:pr-20">
              This Will Fundamentally Change the Way You Look at Technology
            </h2>
            <p className=" text-white text-[12px]">akbarh June 28, 2021</p>
          </div>
        </div>
        <div className="bg-img-3 h-full w-full relative">
          <div className=" inset-0 bg-gray-800 bg-opacity-15 w-full h-full absolute"></div>
          <div className=" absolute left-5 bottom-5 md:space-y-2">
            <button className=" py-1 text-white text-[12px] md:text-[13px]">
              Technology
            </button>
            <h2 className=" font-semibold text-white text-base md:text-xl lg:text-2xl pr-10 lg:pr-32">
              Technology Changed My Life. Here’s My Story
            </h2>
            <p className=" text-white text-[12px]">akbarh June 28, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestTechnologyHome;
