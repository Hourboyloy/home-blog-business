import React from "react";
import {Link} from 'react-router-dom'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" bg-[#F7F7F8]">
      <div>
        <div className="h-28 w-full bg-[#FFFFFF] md:border border-gray-200">
          <div className="max-w-[1200px] lg:mx-auto lg:space-y-5 space-y-8 px-4 2xl:px-0">
            <div className="w-full md:border flex xl:flex-row flex-col xl:justify-between space-y-6 xl:space-y-0 md:px-8 py-6 md:py-14 bg-white border-gray-500">
              <div className=" md:flex-row flex flex-col items-center space-y-4 md:space-x-4 xl:w-[55%]">
                <div className=" ">
                  <img className=" " src={require(`../assets/image.png`)} alt=""/>
                </div>
                <div className=" space-y-3">
                  <h2 className=" font-bold md:text-2xl text-2xl lg:text-3xl">
                    Sign up for our newsletters
                  </h2>
                  <p>The best of Business news, in your inbox.</p>
                </div>
              </div>
              <div className="md:pl-14 xl:pl-0 md:flex items-start space-y-4 md:space-y-0 md:space-x-2 xl:w-[45%]">
                <input
                  className=" border h-14 px-4 w-full"
                  placeholder="Email address"
                />
                <button className="  px-9 w-full md:w-56 font-semibold hover:bg-[#111218] transition-all duration-500 hover:text-white py-[8px] border-gray-800 border">
                  Subscribe
                </button>
              </div>
            </div>
            <div className=" md:pt-6 pb-10 border-b-2 border-gray-500 space-y-4 md:space-y-0 md:space-x-10 lg:space-x-0 md:flex md:justify-between">
              <h3 className=" text-3xl font-bold">BUSINESSLY</h3>
              <div className=" *:text-blue-600 space-y-2 md:space-y-0 md:*:px-2 md:flex-row flex-col flex flex-wrap">
                <Link onClick={scrollToTop} to="/">Home</Link>
                <Link onClick={scrollToTop} to="/stock-marker">Stock Market</Link>
                <Link onClick={scrollToTop} to="/technology">Technology</Link>
                <Link onClick={scrollToTop} to="/politics">Politics</Link>
                <Link onClick={scrollToTop} to="/automobiles">Automobile</Link>
                <Link onClick={scrollToTop} to="/health">Health</Link>
                <Link onClick={scrollToTop} to="/interactive-sessions">Interactive Sessions</Link>
              </div>
            </div>

            <div className=" grid md:grid-cols-4 gap-10 pt-6 md:pb-10">
              <div className=" space-y-5">
                <h2 className=" text-xl font-bold text-gray-600">About</h2>
                <p className=" text-gray-600">
                  Turpis erat tincidunt et viverra id nunc molestie et faucibus
                  diam, proin lectus aliquam mattis ac nunc elementum accumsan
                  libero.
                </p>
              </div>
              <div className=" space-y-5">
                <h2 className=" text-xl font-bold text-gray-600">Company</h2>
                <div className=" flex flex-col space-y-3 text-gray-500">
                  <Link>About Us</Link>
                  <Link>Contact Us</Link>
                  <Link>Our Staff</Link>
                  <Link>Advertise</Link>
                </div>
              </div>

              <div className=" space-y-5">
                <h2 className=" text-xl font-bold text-gray-600">Legal</h2>
                <div className=" flex flex-col space-y-3 text-gray-500">
                  <Link>Privacy Policy</Link>
                  <Link>Terms of Service</Link>
                  <Link>Extra Crunch Terms</Link>
                  <Link>Code of Conduct</Link>
                </div>
              </div>

              <div className=" space-y-5">
                <h2 className=" text-xl font-bold text-gray-600">Follow Us</h2>
                <div className=" flex flex-col space-y-3 text-gray-500">
                  <Link>Facebook</Link>
                  <Link>Youtube</Link>
                  <Link>Twitter</Link>
                  <Link>Instagram</Link>
                </div>
              </div>
            </div>

            <div className=" md:flex-row flex flex-col space-y-4 md:space-y-0 justify-center md:justify-between items-center text-gray-500 text-[14px] pt-2 md:pt-0 pb-14">
              <p>Copyright © 2024 Business Blog</p>
              <p>Powered by Business Blog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
