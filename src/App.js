import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleSetToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="bg-[#FCFCFD]">
      <div
        className={`${
          toggleMenu
            ? "fixed w-[80%] h-screen z-30 transition-all duration-500 left-0"
            : "fixed w-[80%] h-screen z-30 -left-full transition-all duration-500"
        }`}
      >
        <div className=" *:focus:outline-none lg:hidden top-0 left-0 flex flex-col space-y-5 z-30 bg-white h-screen w-full pl-8 text-gray-600 pt-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/stock-marker">Stock Market</NavLink>
          <NavLink to="/technology">Technology</NavLink>
          <NavLink to="/politics">Politics</NavLink>
          <NavLink to="/automobiles">Automobile</NavLink>
          <NavLink to="/health">Health</NavLink>
          <NavLink to="/interactive-sessions">Interactive Sessions</NavLink>
        </div>
        <div className=" text-gray-900 absolute border border-dashed border-gray-300 p-2 top-4 right-4 z-30 flex items-center justify-center">
          <button
            onClick={handleSetToggle}
            className=" focus:outline-none flex items-center justify-center"
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" sticky top-0 z-20 bg-[#FCFCFD]">
        <Header handleSetToggle={handleSetToggle} />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
