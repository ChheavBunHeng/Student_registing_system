import React from "react";
import "./Signup.css";
function Signup() {
    return (
        <div className="grid place-content-center align-middle w-screen h-screen">
            <h1>Signup</h1>

            <div className="UserName flex">
            {/* User Name */}
                <div>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <input type="text" placeholder="Email" className="Duck bg-slate-700" p-8/>

            </div>
        </div>
    );
}
export default Signup;