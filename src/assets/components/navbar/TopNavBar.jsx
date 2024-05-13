import React from "react";
import Logo from "./image.png"
function TopNavBar() {
  return (
    <div className="w-screen h-[12vh] flex flex-row justify-around align-middle flex-wrap gap-10 text-xs">
      <div>
        <img src={Logo} className="" />
      </div>
      <div className="flex gap-[100px] flex-row font-bold text-lg">
      <a href="#" className="">Home</a>       
      <a href="#" className="">Courses</a>
      </div>
      <div className="flex gap-[100px] flex-row font-bold text-lg">
      <a href="#" className="">Contact</ a>
      <a href="#" className="">about</a>
      </div>
    </div>
  );
}

export default TopNavBar;
