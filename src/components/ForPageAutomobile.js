import React from 'react'
import ContainerRight from "../components/ContainerRight";
import { Link } from "react-router-dom";
function ForPageAutomobile() {
  return (
    <div>
      <div className="lg:flex px-4 2xl:px-0 w-full">
        <div className=" lg:w-[70%] lg:border-r pb-2 lg:pb-5 lg:pt-10 xl:pt-20 lg:pr-14 space-y-0">
          <h1 className=" text-blue-700 font-bold text-3xl lg:text-4xl pl-10 lg:pl-16 xl:pl-20 pb-10">
            Automobile
          </h1>
          <div className="border-t border-gray-300 py-10 space-y-5">
            <img src={require(`../assets/automobile/1.jpg`)} alt="" />
            <div className=" space-y-1">
              <h2 className="  font-bold text-gray-700 text-2xl">
                Automobile: All the Stats, Facts, and Data You’ll Ever Need to
                Know
              </h2>
              <p className=" text-blue-700 text-[14px]">
                Automobile, Editors Pick
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
            <img src={require(`../assets/automobile/2.jpg`)} alt="" />
            <div className=" space-y-1">
              <h2 className="  font-bold text-gray-700 text-2xl">
                How Millennials Are Disrupting Automobile
              </h2>
              <p className=" text-blue-700 text-[14px]">Automobile</p>
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
            <img src={require(`../assets/automobile/3.jpg`)} alt="" />
            <div className=" space-y-1">
              <h2 className="  font-bold text-gray-700 text-2xl">
                7 Answers to the Most Frequently Asked Questions About
                Automobile
              </h2>
              <p className=" text-blue-700 text-[14px]">Automobile</p>
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

          <div className="border-t border-b border-gray-300 py-10 space-y-5">
            <img src={require(`../assets/automobile/4.jpg`)} alt="" />
            <div className=" space-y-1">
              <h2 className="  font-bold text-gray-700 text-2xl">
                The Fascinating Science of Automobile
              </h2>
              <p className=" text-blue-700 text-[14px]">Automobile</p>
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
        </div>

        <div className="lg:w-[30%]">
          <ContainerRight />
        </div>
      </div>
    </div>
  );
}

export default ForPageAutomobile
