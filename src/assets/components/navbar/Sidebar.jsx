import React from "react";
function Sidebar() {
  return (
    <div className="w-screen h-[15vh] flex flex-row justify-around align-middle bg-blue-300 text-xs">
      <a href="#" className="">Student Registration</a>
      <a href="#" className="">Student list</a>
      <a href="#" className="">Student Information</a>
      <a href="#" className="">Admin</a>
      <a href="#" className="">Setting</a>
    </div>
  );
}

export default Sidebar;
