import React from "react";
import HomeFirst from "../components/HomeFirst";
import StockMarketHome from "../components/StockMarketHome";
import LatestTechnologyHome from "../components/LatestTechnologyHome";
import Politics from "../components/Politics";
import AutomobileAndHealth from "../components/AutomobileAndHealth";
import GuestsPosts from "../components/GuestsPosts";



function Home() {
  return (
    <div>
      <div className=" h-full w-full">
        <div className="max-w-[1200px] mx-auto px-4 2xl:px-0">
          <HomeFirst />
        </div>
        <div className="w-full bg-[#F7F7F8]">
          <div className="border-b border-gray-500 max-w-[1200px] mx-auto px-4 2xl:px-0 py-14">
            <StockMarketHome />
          </div>
        </div>
        <div className="w-full bg-[#F7F7F8]">
          <div className="border-b border-gray-500 max-w-[1200px] mx-auto px-4 2xl:px-0 pb-80 pt-14 md:py-14">
            <LatestTechnologyHome />
          </div>
        </div>
        <div className="w-full bg-[#F7F7F8]">
          <div className="border-b border-gray-500 max-w-[1200px] mx-auto px-4 2xl:px-0  py-12 md:py-14">
            <Politics />
          </div>
        </div>
        <div className="w-full bg-[#F7F7F8]">
          <div className=" max-w-[1200px] mx-auto px-4 2xl:px-0 py-12 md:py-14">
            <AutomobileAndHealth />
          </div>
        </div>
        <div className="w-full bg-[#F7F7F8]">
          <div className=" max-w-[1200px] mx-auto px-4 2xl:px-0 pb-12 md:pb-14">
            <GuestsPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
