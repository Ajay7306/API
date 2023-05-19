import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex flex-row w-full gap-1 justify-center h-[80px]">
      <div className="hidden md:flex w-full">
        <div className="border border-white rounded-[40px] w-[296px]  p-1">
          <div className="w-full h-full bg-white rounded-[40px] px-7 flex items-center">
            <h1 className="w-full text-[40px] font-extrabold text-[#1c1c1c]">
              API
            </h1>
          </div>
        </div>
        <div className="border border-white rounded-[40px] w-full h-full gap-8 flex justify-end items-center">
          <div className="flex flex-row gap-2">
            <h1 className="font-semibold text-lg text-white">Posts</h1>
            <h1 className="font-semibold text-lg text-white">Photos</h1>
          </div>
          <div className="flex flex-row items-center px-1  gap-4">
            <h1 className="font-extrabold text-[18px] text-white">Sign Up</h1>
            <button className="flex justify-center items-center bg-white p-5 w-[180px] rounded-[47px] font-extrabold text-lg text-[#1c1c1c]">
              Login
            </button>
          </div>
        </div>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} color="#1c1c1c"/> : <AiOutlineMenu size={24} color="#ffffff" />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0  h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500 p-10"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="flex justify-center items-center flex-col p-2 gap-4">
          <div onClick={handleNav}>
          <AiOutlineClose size={24} color="#1c1c1c"/>
          </div>
          <div className="border border-[#1c1c1c] rounded-[20px] w-[296px]  p-1">
            <div className="w-full h-full bg-[#1c1c1c] rounded-[20px] px-4 flex items-center">
              <h1 className="w-full text-[30px] font-extrabold text-white">
                API
              </h1>
            </div>
          </div>
          <li className="p-4 border-b border-gray-800 text-[#1c1c1c]">Posts</li>
          <li className="p-4 border-b border-gray-800 text-[#1c1c1c]">
            Photos
          </li>
          <li className="p-4 border-b border-gray-800 text-[#1c1c1c]">
            Sign Up
          </li>
          <button className="flex justify-center items-center bg-[#1c1c1c] p-5 w-[180px] rounded-[47px] font-extrabold text-lg text-white">
            Login
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
