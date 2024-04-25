/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";


function Navbar() {
    return (
        <div className="flex flex-row justify-around align-middle bg-blue-200 h-[10vh]">
            <a href="#">School Logo</a>
            <div className="flex flex-row gap-10">
                <a href="#">Course</a>
                <a href="#">Location</a>
            </div>
            <div className="width-500px bg-red-300">
                <a href="#">Login/Register</a>
            </div>
        </div>
    );
}

export default Navbar;
