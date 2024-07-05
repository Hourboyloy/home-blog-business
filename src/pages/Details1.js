import React from "react";
import { Link } from "react-router-dom";

function Details1() {
     const scrollToTop = () => {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
     };
  return (
    <div className="bg-[rgb(248,248,248)] pt-5 md:pt-8 xl:pt-16 pb-8 md:pb-10 xl:pb-20">
      <div className="xl:px-0 px-2 md:px-5 lg:px-8 xl:max-w-[960px] mx-auto space-y-8">
        <div className="w-full px-4 md:px-10 xl:px-28 md:py-10 py-6 lg:py-14 xl:py-20 bg-white">
          <div className=" space-y-7">
            <div className=" space-y-2">
              <img src={require(`../assets/home/2.jfif`)} alt="" />
              <h2 className="font-bold text-2xl text-gray-900">
                Want a Career in Technology? Make This Your Secret Weapon
              </h2>
              <div>
                <Link className=" text-blue-800">
                  Leave a Comment / Technology / By akbarh
                </Link>
              </div>
            </div>

            <div className=" space-y-5">
              <div>
                <h2 className=" text-gray-900 font-bold text-2xl">
                  Cursus iaculis etiam in
                </h2>
              </div>
              <div>
                <p className=" text-gray-600">
                  In nullam donec sem sed consequat scelerisque nibh amet, massa
                  egestas risus, gravida vel amet, imperdiet volutpat rutrum
                  sociis quis velit, commodo enim aliquet.
                </p>
              </div>
              <div>
                <p className=" text-gray-600">
                  In nullam donec sem sed consequat scelerisque nibh amet, massa
                  egestas risus, gravida vel amet, imperdiet volutpat rutrum
                  sociis quis velit, commodo enim aliquet.
                </p>
              </div>
              <div className=" text-gray-600 px-6 py-4 border-l-4 border-gray-200 space-y-5">
                <p>
                  Nulla pharetra, massa feugiat nisi, tristique nisi, adipiscing
                  dignissim sit magna nibh purus erat nulla enim id consequat
                  faucibus luctus volutpat senectus montes.
                </p>
                <p>Lorem Ipsum</p>
              </div>

              <div>
                <h2 className=" text-gray-900 font-bold text-2xl">
                  Magna enim, convallis ornare
                </h2>
              </div>

              <div>
                <p className=" text-gray-600">
                  Sollicitudin bibendum nam turpis non cursus eget euismod
                  egestas sem nunc amet, tellus at duis suspendisse commodo
                  lectus accumsan id cursus facilisis nunc eget elementum non ut
                  elementum et facilisi dui ac viverra sollicitudin lobortis
                  luctus sociis sed massa accumsan amet sed massa lectus id
                  dictum morbi ullamcorper.
                </p>
              </div>
              <div>
                <p className=" text-gray-600">
                  Morbi ut viverra massa mattis vitae blandit ut integer non
                  vestibulum eros, diam in in et hac mauris maecenas sed sapien
                  fermentum et eu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-blue-700 md:flex-row flex flex-col items-center justify-center space-y-6 md:justify-between md:px-1">
          <div className="flex items-center justify-center md:space-x-2">
            <span className=" hidden md:block">←</span>{" "}
            <span>Previous Post</span>
          </div>

          <div className="flex items-center justify-center md:space-x-2">
            <span>Next Post</span>
            <span className=" hidden md:block">→</span>
          </div>
        </div>

        <div className=" bg-white space-y-6 py-12 md:px-10 px-4">
          <div>
            <h2 className="font-bold text-2xl text-gray-900">Must Read</h2>
          </div>
          <div className=" md:flex md:space-x-4 space-y-8 md:space-y-0">
            <div className="w-full">
              <Link
                onClick={scrollToTop}
                to="/the-health-industry-is-changing-fast-heres-how-to-keep-pace"
              >
                <div className="w-full space-y-2">
                  <div className=" pb-1">
                    <img src={require(`../assets/home/3.jfif`)} alt="" />
                  </div>
                  <h3 className=" font-bold text-xl text-gray-600 pr-20">
                    The Health Industry Is Changing Fast. Here’s How to Keep
                    Pace
                  </h3>
                  <p className=" text-blue-700 text-[14px]">Health</p>
                </div>
              </Link>
            </div>

            <div className="w-full">
              <Link
                onClick={scrollToTop}
                to="/everything-you-ever-wanted-to-know-about-technology"
              >
                <div className="w-full space-y-2">
                  <div className=" pb-1">
                    <img src={require(`../assets/home/4.jfif`)} alt="" />
                  </div>
                  <h3 className=" font-bold text-xl text-gray-600 pr-20">
                    Everything You Ever Wanted to Know About Technology
                  </h3>
                  <p className=" text-blue-700 text-[14px]">Technology</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className=" bg-white space-y-6  xl:py-16 xl:px-24 w-full px-4 md:px-10 md:pb-10 md:pt-12 pb-6 pt-8 lg:pt-14 lg:pb-12">
          <div className=" space-y-1">
            <h2 className=" text-xl font-bold text-gray-900">
              Leave a Comment
            </h2>
            <p className=" text-gray-600 text-[14px]">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div>
            <textarea
              maxLength={895}
              placeholder="Type here.."
              className="w-full h-[236.80px] focus:outline-none bg-[#FAFAFA] border-dashed border border-gray-400 py-3 px-3 text-gray-500"
            />
          </div>

          <div className="md:flex items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className=" w-full">
              <input
                type="text"
                placeholder="Name*"
                className="w-full text-gray-500 focus:outline-none border h-14 bg-[#FAFAFA] border-gray-300 flex items-center pl-3"
              />
            </div>
            <div className=" w-full">
              <input
                type="email"
                placeholder="Email*"
                className="w-full text-gray-500 focus:outline-none border h-14 bg-[#FAFAFA] border-gray-300 flex items-center pl-3"
              />
            </div>

            <div className=" w-full">
              <input
                type="text"
                placeholder="Website*"
                className="w-full text-gray-500 focus:outline-none border h-14 bg-[#FAFAFA] border-gray-300 flex items-center pl-3"
              />
            </div>
          </div>

          <div className=" space-y-5">
            <div className=" space-x-2">
              <span>
                <input type="checkbox" />
              </span>
              <span className=" text-[14px] text-gray-600">
                Save my name, email, and website in this browser for the next
                time I comment.
              </span>
            </div>

            <div>
              <button className="text-lg font-bold text-gray-800 hover:bg-black hover:text-white py-3 px-5 rounded focus:outline-none transition-all duration-300">
                Post Comment »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details1;
