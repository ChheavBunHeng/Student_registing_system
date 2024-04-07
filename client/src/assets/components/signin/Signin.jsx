import React from "react";
import "./Signin.css";

function Signin() {
    return (
        <div className="w-screen h-screen flex flex-row gap-10 justify-center align-middle">
            {/* Signup Panel */}
            <div className="Signup-Panel flex flex-col gap-10 ">
                <h1>Welcome Back</h1>   
                <h3>Today is an exciting day for you to sign in to your account</h3>
                <div className="flex flex-col">
                <div className="flex">
                    <label>User Name</label>
                    <input type="text" className="UserName" placeholder="Input user name" />
                </div>
                <div className="flex">
                    <label>Password</label>
                    <input type="password" className="Password" placeholder="Input password" />
                </div>
                </div>
                <button className="Signin">Signin</button>
            </div>
            {/* Image */}
            <div className="Image-Panel flex">
                <img src="https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    );
}   
export default Signin;
