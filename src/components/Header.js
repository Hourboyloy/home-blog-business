import React from "react";
import {NavLink } from "react-router-dom";


function Header({ handleSetToggle }) {
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};





  return (
    <div className="max-w-[1200px] lg:mx-auto py-3 lg:space-y-5 px-4 2xl:px-0">
      <div className="hidden lg:flex w-full justify-between items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="pl-28">
          <h1 className=" font-bold text-4xl uppercase">Businessly</h1>
        </div>
        <div>
          <button className=" px-9 font-medium hover:bg-[#111218] transition-all duration-500 hover:text-white py-[8px] border-gray-800 border">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full hidden lg:flex items-center justify-center space-x-8 *:text-gray-600">
        <NavLink onClick={scrollToTop} to="/">Home</NavLink>
        <NavLink onClick={scrollToTop} to="/stock-marker">Stock Market</NavLink>
        <NavLink onClick={scrollToTop} to="/technology">Technology</NavLink>
        <NavLink onClick={scrollToTop} to="/politics">Politics</NavLink>
        <NavLink onClick={scrollToTop} to="/automobiles">Automobile</NavLink>
        <NavLink onClick={scrollToTop} to="/health">Health</NavLink>
        <NavLink onClick={scrollToTop} to="/interactive-sessions">Interactive Sessions</NavLink>
      </div>
      <div className="lg:hidden flex justify-between items-center">
        <div className="">
          <h1 className=" font-bold text-xl uppercase">Businessly</h1>
        </div>

        <div>
          <button onClick={handleSetToggle} className=" focus:outline-none">
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
