import React from "react";
import "./Home_page.css";
import Officeimg from "./image/Office.png";
import coding from "./image/coding.png";
import accounting from "./image/accounting.png";
import montage from "./image/montage.png";
import desgin from "./image/illustration.png";
import databaseManagment from "./image/database-management.png";
import webdev from "./image/app-development.png";

// import Office from "../page/Office";
function Home_Page()
{
    return(
        <div className="Home_Page flex justify-center w-full ">
            <div className="Home_Panel flex flex-row justify-around w-screen flex-wrap h-[30vh] bg-slate-500">
                <div className="Text-panel w-1/2 h-36 flex justify-center align-middle ">
                    <h1 className="text-3xl">Learn with expert anytime anywhere</h1>
                    <h3>Our mission is to help people to find the best course for 
                    their needs with the expereince of our teacher</h3>
                </div>
                <div className="Image-panel w-1/2 flex justify-center align-middle bg-slate-200">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="Category flex flex-col justify-center align-middle gap-10 ">
                <h1>Browse top category</h1>    
                <div className="flex flex-row gap-10 h-1/3 justify-center align-middle flex-wrap">
                    <a href="#" className="flex flex-row border p-[10px] w-[450px] h-[150px]">
                    <img src={Officeimg} alt="Office Image" className="w-[50px] mx-[10px]" />
                        <div className="p-1">
                            <h1 className="text-xl font-extrabold">Office</h1>
                            <h3>Learn with expert anytime anywhere</h3>    
                        </div>
                    </a>
                    <a href="https://www.youtube.com" className="flex flex-row border p-[10px] w-[450px] h-[150px]">
                    <img src={desgin} alt="Office Image" className="w-[50px] mx-[10px]" />
                        <div className="p-1">
                            <h1 className="text-xl font-extrabold">Design</h1>
                            <h3>Learn with expert anytime anywhere</h3>    
                        </div>
                    </a>
                    <a href="https://www.youtube.com" className="flex flex-row border p-[10px] w-[450px] h-[150px] ">
                    <img src={accounting} alt="Office Image" className="w-[50px] mx-[10px]" />
                    <div className="p-1">
                            <h1 className="text-xl font-extrabold">Accounting</h1>
                            <h3>Learn with expert anytime anywhere</h3>    
                        </div>
                    </a>
                </div>
                <div className="flex flex-row gap-10 h-1/3 justify-center align-middle flex-wrap">
                    <a href="https://www.youtube.com" className="flex flex-row border p-[10px] w-[450px] h-[150px]  ">
                    <img src={coding} alt="Office Image" className="w-[50px] mx-[10px]" />
                    <div className="p-1">
                            <h1 className="text-xl font-extrabold">Computer Programming</h1>
                            <h3>Learn with expert anytime anywhere</h3>    
                        </div>
                    </a>
                    <a href="https://www.youtube.com" className="flex flex-row border p-[10px] w-[450px] h-[150px] ">
                    <img src={databaseManagment} alt="Office Image" className="w-[50px] mx-[10px]" />
                    <div className="p-1">
                            <h1 className="text-xl font-extrabold">Database Management</h1>
                            <h3>Learn with expert anytime anywhere</h3>    
                        </div>
                    </a>
                    <a href="https://www.youtube.com" className="flex flex-row border p-[10px] w-[450px] h-[150px] ">
                    <img src={webdev} alt="Office Image" className="w-[50px] mx-[10px]" />
                    <div className="p-1">
                            <h1 className="text-xl font-extrabold">Web Design & Development</h1>
                            <h3>Learn with expert anytime anywhere</h3>    
                        </div>
                    </a>
                </div>
                <div className="flex flex-row gap-10 h-1/3 justify-center align-middle flex-wrap">
                    <a href="https://www.youtube.com" className="flex flex-row border p-[10px] w-[450px] h-[150px]  ">
                    <img src={montage} alt="Office Image" className="w-[50px] mx-[10px]" />
                    <div className="p-1">
                            <h1 className="text-xl font-extrabold">Video Editing</h1>
                            <h3>Learn with expert anytime anywhere</h3>    
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Home_Page;  