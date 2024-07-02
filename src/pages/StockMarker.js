import React from "react";
import FirstStockMarker from "../components/FirstStockMarker";

function StockMarker() {
  return (
    <div className="bg-[#F7F7F8] py-12">
      <div className="max-w-[1200px] mx-auto space-y-10">
        <div className=" w-full">
          <FirstStockMarker />
        </div>
      </div>
    </div>
  );
}

export default StockMarker;
