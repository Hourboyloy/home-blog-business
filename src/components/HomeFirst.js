import React from "react";
import { cards, Texts } from "../util/data";
function homeFirst() {
  return (
    <div className=" space-y-10">
      <div className=" space-y-10 md:space-y-96 2xl:space-y-10">
        <div className="md:flex md:h-[172px] xl:h-[220px] 2xl:h-auto space-y-4 md:space-y-0  md:space-x-5 pt-4 xl:pt-16">
          <div className="bg-img-1 h-[200px] md:h-[505px] md:w-[50%] relative ">
            <div className=" inset-0 bg-gray-800 bg-opacity-15 w-full h-full absolute"></div>
            <div className=" absolute left-5 bottom-5 md:space-y-2">
              <button className="bg-[#45485F] px-2 py-1 text-white text-[10px] md:text-[12px]">
                Stock Market
              </button>
              <h2 className=" font-semibold text-white text-base md:text-xl lg:text-2xl xl:text-3xl">
                15 Shocking Elon Musk Tweets About Stock Market
              </h2>
              <p className=" text-white text-[12px]">akbarh June 28, 2021</p>
            </div>
          </div>
          <div className="md:w-[50%] md:h-full">
            <ul className=" space-y-4 md:h-full">
              {cards?.length > 0 &&
                cards.map((e, i) => (
                  <li key={i + e} className="md:h-full">
                    <div className=" flex items-center  space-x-4 md:h-full">
                      <div className="w-full xl:w-[70%] md:h-full overflow-hidden">
                        <img
                          className="h-32 md:h-full"
                          src={require(`../assets/home/${e.photo}`)}
                        />
                      </div>
                      <div className="w-[100%] space-y-1">
                        <button className="bg-[#45485F] px-2 py-1 text-white text-[12px]">
                          {e.categoroy}
                        </button>

                        <h2 className=" font-semibold text-sm md:text-base lg:text-base xl:text-xl text-wrap">
                          {e.title}
                        </h2>
                        <p className="text-[12px]">{e.date}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="w-full border-b border-gray-500 sticky"></div>
      </div>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
          {Texts?.length > 0 &&
            Texts.map((e, i) => (
              <li key={e + i}>
                <div className=" space-y-2">
                  <div className=" flex items-center space-x-1 text-[12px] text-gray-700">
                    <p>{e.left}</p>
                    <p>|</p>
                    <p>{e.right}</p>
                  </div>
                  <p className=" font-semibold">{e.description}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="xl:flex items-center xl:h-[200px] space-y-6 xl:space-y-0 xl:space-x-6">
        <div className="w-full md:h-auto h-24 overflow-hidden">
          <img className="w-full" src={require(`../assets/home/5.jfif`)} />
        </div>
        <div className="w-full xl:w-[60%] border bg-white border-gray-100 h-full p-5 rounded shadow-xl text-xs md:text-sm space-y-[6px]">
          <h3 className=" font-semibold text-lg">Subscribe To Our Newsletter</h3>
          <p>Egestas eu molestie lacus, rhoncus, gravida aliquet sociis</p>
          <p>vulputate faucibus tristique odio</p>
        </div>
      </div>
    </div>
  );
}

export default homeFirst;
