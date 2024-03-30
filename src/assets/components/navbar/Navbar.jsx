import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="flex justify-around align-middle w-screen h-10 bg-slate-600 text-xl">
            <img src="https://img.freepik.com/free-vector/gradient-school-logo-design-template_23-2149664341.jpg?w=826&t=st=1711782841~exp=1711783441~hmac=ac52840c3200819bb8c347dbc8ddceae448f3c74d73a81fb4205fdb181f81eb9" alt="" />
            <div className="flex gap-10">
                <a href="#">Programs</a>
                <a href="#">Extra-Curricular</a>
            </div>
            <div className="width-500px bg-red-300">
                <a href="#">Login/Register</a>
            </div>
        </div>
    );
}

export default Navbar;
