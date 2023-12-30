import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

const navItems = ["home", "about us", "menu", "location", "contact"];

const HamOpen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const HamClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="white"
    class="w-10 h-10"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navScroll, setScroll] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 500) setScroll(true);
    else setScroll(false);
  };

  return (
    // navbar component
    <>
      <nav
        className={`w-full flex flex-row justify-between py-2 z-50 fixed transition duration-600 ${
          navScroll ? "shadow-xl bg-head" : ""
        }`}
      >
        {/* logo  */}
        <div
          className={`logo px-4 py-4 md:px-8 md:py-4 flex justify-center items-center w-1/3 h-1/3 ${
            !navScroll
              ? "lg:w-1/3 lg:h-1/3"
              : "md:w-1/3 md:h-1/3 lg:w-1/5 lg:h-1/5"
          } xs:px-8 xs:py-8 transition duration-600`}
        >
          {/* <Link to="#"></Link> */}
          <h2 className={`text-4xl ${navScroll?"text-white":"text-primary"} font_lily text-center`}>
            Quibeez
          </h2>
        </div>

        {/* Navigation Menu  */}
        <div className="container hidden md:flex justify-end px-3 xl:px-12 ">
          <ul className="text-white text-sm flex flex-row justify-center items-center">
            {navItems.map((item) => (
              <a
                href="#"
                className="mx-2 px-1 lg:mx-4 lg:px-2 relative  before:content-[''] before:absolute before:bg-white before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full"
              >
                <li className="cursor-pointer" key={`link-${item}`}>
                  {item.toUpperCase()}
                  {/* <div />
            <Link to={`${item}`} smooth={true} duration={500}>
              {item}
            </Link> */}
                </li>
              </a>
            ))}
            <a
              href="/auth"
              className="mx-4 px-6 py-4 bg-custom-secondary text-custom-dark font-bold shadow-[inset_0_0_0_0_rgb(241,74,65)] hover:text-white hover:shadow-[inset_15em_0_0_0_rgb(241,74,65)] transition ease-in-out delay-50 duration-300"
            >
              <li className="cursor-pointer" key={`link-confirmYourSeat`}>
                BOOK A TABLE
              </li>
            </a>
          </ul>
        </div>

        {/* Hamburger Navigation Menu  */}
        <div className="md:hidden relative flex justify-center items-center cursor-pointer mr-3">
          <div className="flex" onClick={() => setToggle(true)}>
            {HamOpen}
          </div>
          {toggle && (
            <div>
              <motion.div
                id="NavBlur"
                className="fixed top-0 left-0 right-0 z-50 flex flex-col items-end justify-end w-screen p-1 pb-4 shadow-lg md:hidden bg-warm"
                animate={{ y: [-500, 0] }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  damping: 9,
                  mass: 0.5,
                }}
              >
                <div
                  className="flex z-10 cursor-pointer mr-[30px] mt-[20px]"
                  onClick={() => setToggle(false)}
                >
                  {HamClose}
                </div>

                <div className="logo mt-[-30px] mb-[-10px] w-full z-0 flex justify-center items-center">
                  {/* <img className="w-[40%]" src={logo} alt="Renaissance Logo" /> */}
                </div>

                <ul className="flex mt-[15px] flex-col items-center justify-start sm:mt-[-20px] w-full h-full p-0 m-0 text-xs text-black">
                  {navItems.map((item) => (
                    <li
                      className="mx-10 font-Mont pb-[20px] my-2 cursor-pointer"
                      key={`link-${item}`}
                    >
                      <a
                        onClick={() => setToggle(false)}
                        to={`${item}`}
                        className="mt-[-25px] text-white text-base mx-2 px-1 lg:mx-4 lg:px-2 relative font-Mont before:content-[''] before:absolute before:bg-dark before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-dark"
                        smooth={true}
                        duration={500}
                      >
                        {item.toUpperCase()}
                      </a>
                    </li>
                  ))}
                  {/* <a
                  href="/team"
                  className="mt-[8px] mb-[28px] text-base mx-2 px-1 lg:mx-4 lg:px-2 relative font-Mont before:content-[''] before:absolute before:bg-dark before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-dark"
                >
                  <li key={`link-teampage`} className="text-white">
                    TEAM
                  </li>
                </a>
                <a
                  href="/sponsors"
                  className="mt-[8px] text-base mx-2 px-1 lg:mx-4 lg:px-2 relative font-Mont before:content-[''] before:absolute before:bg-dark before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-dark"
                >
                  <li key={`link-teampage`} className="text-white">
                    SPONSORS
                  </li>
                </a>
                <a href={!auth.isauth ? "/login" : "/dashboard"} className="">
                  <li className="px-6 uppercase text-white mt-[30px] mb-[30px] py-4 mx-4 text-lg font-bold transition duration-700 ease-in-out font-Mont hover:text-grey hover:bg-dark">
                    {!auth.isauth ? "REGISTER NOW" : "DASHBOARD"}
                  </li>
                </a>
                {auth.isauth && (
                  <div className="px-6 mt-[-20px] mb-[20px] py-4 mx-4 text-lg font-bold transition duration-700 ease-in-out font-Mont text-black">
                    <button>LOGOUT</button>
                  </div>
                )} */}
                </ul>
              </motion.div>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
export default Navbar;
