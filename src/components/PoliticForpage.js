import React from "react";
import ContainerRight from "../components/ContainerRight";
import { Link } from "react-router-dom";
function PoliticForpage() {
  return (
    <div>
      <div className="lg:flex px-4 2xl:px-0 w-full">
        <div className=" lg:w-[70%] lg:border-r pb-2 lg:pb-5 lg:pt-10 xl:pt-20 lg:pr-14 space-y-0">
          <h1 className=" text-blue-700 font-bold text-3xl lg:text-4xl pl-10 lg:pl-16 xl:pl-20 pb-10">
            Politics
          </h1>
          <div className="border-t border-gray-300 py-10 space-y-5">
            <img src={require(`../assets/politics/1.jpg`)} alt="" />
            <div className=" space-y-1">
              <h2 className="  font-bold text-gray-700 text-2xl">
                The Frightening Affect of Climate Change on Government
              </h2>
              <p className=" text-blue-700 text-[14px]">
                Editors Pick, Politics
              </p>
            </div>
            <div>
              <p>
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh amet, massa egestas risus, gravida vel amet,
                imperdiet volutpat rutrum sociis quis velit, commodo enim
                aliquet. Nunc volutpat tortor libero at augue mattis neque,
                suspendisse aenean praesent sit habitant laoreet felis lorem
                nibh diam faucibus viverra penatibus donec etiam sem consectetur
                vestibulum purus […]
              </p>
            </div>
            <div>
              <Link className=" text-blue-700 text-[14px]">Read More »</Link>
            </div>
          </div>

          <div className="border-t border-gray-300 py-10 space-y-5">
            <img src={require(`../assets/politics/2.jpg`)} alt="" />
            <div className=" space-y-1">
              <h2 className="  font-bold text-gray-700 text-2xl">
                Don’t Share This Politics Insider Secret
              </h2>
              <p className=" text-blue-700 text-[14px]">
                Editors Pick, Politics
              </p>
            </div>
            <div>
              <p>
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh amet, massa egestas risus, gravida vel amet,
                imperdiet volutpat rutrum sociis quis velit, commodo enim
                aliquet. Nunc volutpat tortor libero at augue mattis neque,
                suspendisse aenean praesent sit habitant laoreet felis lorem
                nibh diam faucibus viverra penatibus donec etiam sem consectetur
                vestibulum purus
              </p>
            </div>
            <div>
              <Link className=" text-blue-700 text-[14px]">Read More »</Link>
            </div>
          </div>

          <div className="border-t border-gray-300 py-10 space-y-5">
            <img src={require(`../assets/politics/3.jpg`)} alt="" />
            <div className=" space-y-1">
              <h2 className="  font-bold text-gray-700 text-2xl">
                The Joy, Comfort, and Stress-Reducing Power of Politics
              </h2>
              <p className=" text-blue-700 text-[14px]">Politics</p>
            </div>
            <div>
              <p>
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh amet, massa egestas risus, gravida vel amet,
                imperdiet volutpat rutrum sociis quis velit, commodo enim
                aliquet. Nunc volutpat tortor libero at augue mattis neque,
                suspendisse aenean praesent sit habitant laoreet felis lorem
                nibh diam faucibus viverra penatibus donec etiam sem consectetur
                vestibulum purus
              </p>
            </div>
            <div>
              <Link className=" text-blue-700 text-[14px]">Read More »</Link>
            </div>
          </div>

          <div className="border-t border-gray-300 py-10 space-y-5">
            <img src={require(`../assets/politics/4.jpg`)} alt="" />
            <div className=" space-y-1">
              <h2 className="  font-bold text-gray-700 text-2xl">
                What Politics Says About Your Personal Style
              </h2>
              <p className=" text-blue-700 text-[14px]">Politics</p>
            </div>
            <div>
              <p>
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh amet, massa egestas risus, gravida vel amet,
                imperdiet volutpat rutrum sociis quis velit, commodo enim
                aliquet. Nunc volutpat tortor libero at augue mattis neque,
                suspendisse aenean praesent sit habitant laoreet felis lorem
                nibh diam faucibus viverra penatibus donec etiam sem consectetur
                vestibulum purus
              </p>
            </div>
            <div>
              <Link className=" text-blue-700 text-[14px]">Stock Market</Link>
            </div>
          </div>

          <div className="border-t border-b border-gray-300 py-10 space-y-5">
            <img src={require(`../assets/politics/5.jpg`)} alt="" />
            <div className=" space-y-1">
              <h2 className="  font-bold text-gray-700 text-2xl">
                8 Surprising Ways Politics Can Affect You
              </h2>
              <p className=" text-blue-700 text-[14px]">Politics</p>
            </div>
            <div>
              <p>
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh amet, massa egestas risus, gravida vel amet,
                imperdiet volutpat rutrum sociis quis velit, commodo enim
                aliquet. Nunc volutpat tortor libero at augue mattis neque,
                suspendisse aenean praesent sit habitant laoreet felis lorem
                nibh diam faucibus viverra penatibus donec etiam sem consectetur
                vestibulum purus
              </p>
            </div>
            <div>
              <Link className=" text-blue-700 text-[14px]">Read More »</Link>
            </div>
          </div>
        </div>

        <div className="lg:w-[30%]">
          <ContainerRight />
        </div>
      </div>
    </div>
  );
}

export default PoliticForpage;
