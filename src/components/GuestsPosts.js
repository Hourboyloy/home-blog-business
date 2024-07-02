import React from "react";

function GuestsPosts() {
  return (
    <div className=" space-y-11">
      <div className=" space-y-8">
        <div className="space-y-6">
          <div className=" flex items-center justify-between">
            <h3 className=" font-bold text-3xl">Guests Posts</h3>
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
          <div className=" space-y-2 md:space-y-0 md:flex w-full">
            <div className=" w-full relative">
              <img
                className=" w-full"
                src={require(`../assets/home/20.jfif`)}
                alt=""
              />
              <div className=" absolute h-full w-full bg-gray-900 inset-0 bg-opacity-25"></div>
              <div className=" absolute left-2 pr-2 md:left-5 bottom-3 md:bottom-5 md:space-y-2">
                <button className=" text-white text-[10px] md:text-[12px]">
                  Stock Market
                </button>
                <h2 className=" font-semibold text-white text-base md:text-lg lg:text-xl xl:text-2xl">
                  15 Shocking Elon Musk Tweets About Stock Market
                </h2>
                <p className=" text-white text-[12px]">akbarh June 28, 2021</p>
              </div>
            </div>
            <div className=" w-full relative">
              <img
                className=" w-full"
                src={require(`../assets/home/21.jfif`)}
                alt=""
              />
              <div className=" absolute h-full w-full bg-gray-900 inset-0 bg-opacity-25"></div>
              <div className=" absolute left-2 pr-2 md:left-5 bottom-3 md:bottom-5 md:space-y-2">
                <button className=" text-white text-[10px] md:text-[12px]">
                  Stock Market
                </button>
                <h2 className=" font-semibold text-white text-base md:text-lg lg:text-xl xl:text-2xl">
                  15 Shocking Elon Musk Tweets About Stock Market
                </h2>
                <p className=" text-white text-[12px]">akbarh June 28, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-10 px-5 md:p-10 bg-white rounded flex flex-col md:flex-row justify-center items-center md:justify-between space-y-5 md:space-y-0">
        <div className=" space-y-2 w-full md:w-[65%] lg:w-auto">
          <h4 className=" font-bold text-xl md:text-2xl text-center md:text-start">
          Your posts will be the next
          </h4>
          <p className=" font-light md:text-base text-sm text-center md:text-start">
          Egestas suspendisse bibendum tempus cursus pulvinar eget odio ultricies augue.
          </p>
        </div>
        <div className=" flex justify-center md:justify-end w-full md:w-[35%] lg:w-auto">
          <button className="w-full focus:outline-none px-6 py-3 border border-gray-500 font-semibold text-gray-700 select-none hover:bg-gray-900 transition-all duration-300 hover:text-white">Be A Guest Author</button>
        </div>
      </div>
    </div>
  );
}

export default GuestsPosts;
