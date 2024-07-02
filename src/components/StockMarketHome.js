import React from "react";
import { cards2 } from "../util/data";
function StockMarketHome() {
  return (
    <div className=" space-y-6">
      <h2 className=" font-bold text-3xl">Stock Market</h2>
      <ul className="grid md:grid-cols-3 gap-4">
        {cards2?.length > 0 &&
          cards2.map((e, i) => (
            <li key={e + i}>
              <div className=" space-y-4">
                <div>
                  <img src={require(`../assets/home/${e.photo}`)} />
                </div>
                <div className="space-y-1">
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

export default StockMarketHome;
