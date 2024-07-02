import React from "react";

function ForPageInteractiveSessions() {
  return (
    <div className=" px-4 xl:px-0">
      <div className="space-y-10">
        <div className="xl:max-w-[960px] mx-auto space-y-8">
          <div className=" space-y-5 md:space-y-8">
            <h1 className=" text-3xl md:text-5xl text-gray-900 font-bold text-center">
              Interactive Sessions
            </h1>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className=" space-y-6">
            <div className="flex items-center space-x-1 md:space-x-2 lg:space-y-0">
              <div className=" w-full border-b border-gray-500"></div>
              <div className=" tracking-widest w-[1150px] md:w-[590px] text-center text-gray-600">
                UPCOMING SESSIONS
              </div>
              <div className=" w-full border-b border-gray-500"></div>
            </div>
            <div className=" md:flex md:space-x-3 space-y-8 md:space-y-0 lg:space-x-8">
              <div className=" space-y-4">
                <div>
                  <img src={require(`../assets/interactive-sessions/1.jpg`)} />
                </div>
                <div className="space-y-4">
                  <h1 className=" font-bold text-gray-800 text-xl md:text-2xl">
                    Transform 2021
                  </h1>
                  <p className="text-gray-600 text-sm pr-20">
                    Dui volutpat platea mattis mattis netus tortor lacinia id
                    orci tellus amet viverra quis lacus, orci senectus sed
                    sagittis pellentesque vitae quis.
                  </p>
                  <div className="flex items-center space-x-12">
                    <div className=" space-y-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-blue-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                      <p className=" font-bold text-sm text-gray-700">When</p>
                      <p className="text-sm text-gray-600">14 - 16 Jul</p>
                    </div>

                    <div className=" space-y-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-blue-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>

                      <p className=" font-bold text-sm text-gray-700">
                        Hosted by
                      </p>
                      <p className="text-sm text-gray-600">Steven Green</p>
                    </div>

                    <div className=" space-y-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-blue-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>

                      <p className=" font-bold text-sm text-gray-700">
                        Speaker
                      </p>
                      <p className="text-sm text-gray-600">Thomas Martin</p>
                    </div>
                  </div>
                  <div className="pt-5">
                    <button className=" px-9 font-medium hover:bg-[#111218] transition-all duration-500 hover:text-white py-[8px] border-gray-800 border">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>

              <div className=" space-y-4">
                <div>
                  <img src={require(`../assets/interactive-sessions/2.jpg`)} />
                </div>
                <div className="space-y-4">
                  <h1 className=" font-bold text-gray-800 text-xl md:text-2xl">
                    Cryptocurrency
                  </h1>
                  <p className="text-gray-600 text-sm pr-20">
                    Dui volutpat platea mattis mattis netus tortor lacinia id
                    orci tellus amet viverra quis lacus, orci senectus sed
                    sagittis pellentesque vitae quis.
                  </p>
                  <div className="flex items-center space-x-12">
                    <div className=" space-y-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-blue-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                      <p className=" font-bold text-sm text-gray-700">When</p>
                      <p className="text-sm text-gray-600">20 - 22 Jul</p>
                    </div>

                    <div className=" space-y-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-blue-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>

                      <p className=" font-bold text-sm text-gray-700">
                        Hosted by
                      </p>
                      <p className="text-sm text-gray-600">Gary O'neil</p>
                    </div>

                    <div className=" space-y-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 text-blue-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>

                      <p className=" font-bold text-sm text-gray-700">
                        Speaker
                      </p>
                      <p className="text-sm text-gray-600">Emily Dunn</p>
                    </div>
                  </div>
                  <div className="pt-5">
                    <button className=" px-9 font-medium hover:bg-[#111218] transition-all duration-500 hover:text-white py-[8px] border-gray-800 border">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" space-y-12">
          <div className="w-full pt-2 border-b border-gray-600"></div>
          <div className=" space-y-8">
            <div>
              <h1 className=" font-bold text-gray-800 text-3xl">
                Past Sessions
              </h1>
            </div>
            <div className=" md:space-x-3 lg:space-x-6 md:flex  space-y-8 md:space-y-0">
              <div className=" space-y-5 w-full">
                <div>
                  <img
                    className="w-full"
                    src={require(`../assets/interactive-sessions/3.jpg`)}
                  />
                </div>
                <div className=" space-y-1">
                  <h2 className=" text-gray-800 font-bold text-xl md:text-2xl">
                    Luxury Connect Las Vegas
                  </h2>
                  <p className="">
                    Quis amet mollis quam ut neque egestas viverra nam nunc
                    commodo porta.
                  </p>
                </div>
              </div>

              <div className=" space-y-5 w-full">
                <div>
                  <img
                    className="w-full"
                    src={require(`../assets/interactive-sessions/4.jpg`)}
                  />
                </div>
                <div className=" space-y-1">
                  <h2 className=" text-gray-800 font-bold text-xl md:text-2xl">
                    Florida Infrastructure
                  </h2>
                  <p className="">
                    Sed ullamcorper vitae integer eget amet in congue bibendum
                    sed nisl volutpat.
                  </p>
                </div>
              </div>

              <div className=" space-y-5 w-full">
                <div>
                  <img
                    className="w-full"
                    src={require(`../assets/interactive-sessions/5.jpg`)}
                  />
                </div>
                <div className=" space-y-1">
                  <h2 className=" text-gray-800 font-bold text-xl md:text-2xl">
                    The Way of Living
                  </h2>
                  <p className="">
                    Proin dictum ultrices diam mi tortor in lorem cursus
                    pellentesque amet aliquet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForPageInteractiveSessions;
