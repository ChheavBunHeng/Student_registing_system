import React from "react";
import Logo from "./image.png"
import Home_Page from "../homepage/Home_Page";
function TopNavBar() {
  return (
    <div className="w-screen h-[12vh] md:h-[15vh] flex flex-col md:flex-row justify-around items-center flex-wrap">
      <div>
        <img src={Logo} className="h-[5vh] md:h-[12vh] object-contain" alt="Logo" />
      </div>
      <div className="flex flex-row">
      <div className="font-bold text-xs md:text-2xl">
        <a href={Home_Page} className="p-5 md:p-10 hover:text-gray-700 text-bold text-[15px] md:text-[25px] transition duration-300">Home</a>
        <a href="#" className="p-5 md:p-10 hover:text-gray-700 text-bold text-[15px] md:text-[25px] transition duration-300">Courses</a>
      </div>
      <div className="font-bold text-xs md:text-2xl">
        <a href="#" className="p-5 md:p-10 hover:text-gray-700 tex`t-bold text-[15px] md:text-[25px] transition duration-300">Contact</a>
        <a href="#" className="p-5 md:p-10 hover:text-gray-700 text-bold text-[15px] md:text-[25px] transition duration-300">About</a>
      </div>
      </div>
    </div>
  );
}

export default TopNavBar;
