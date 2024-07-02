import React from "react";
import { cards3 } from "../util/data";

function Politics() {
  return (
    <div className=" space-y-6">
      <div className=" flex items-center justify-between">
        <h3 className=" font-bold text-3xl">Politics</h3>
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
      <ul className="grid md:grid-cols-3 gap-4">
        {cards3?.length > 0 &&
          cards3.map((e, i) => (
            <li key={e + i}>
              <div className=" space-y-4">
                <div>
                  <img src={require(`../assets/home/${e.photo}`)} alt="" />
                </div>
                <div className=" space-y-1">
                  <p className=" text-[12px] text-blue-700">{e.categoroy}</p>
                  <h3 className=" font-bold text-2xl">{e.title}</h3>
                  <p className="text-[13px] text-gray-800">{e.date}</p>
                  <p className=" text-gray-600">{e.description}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Politics;
