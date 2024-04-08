import React from "react";
import "./Home_page.css";
import Office from "./image/Office.png";
function Home_Page()
{
    return(
        <div className="Home_Page">
            <div className="Home_Panel flex flex-row justify-around w-screen">
                <div className="Text-panel w-1/2 h-36 flex justify-center align-middle bg-slate-500">
                    <h1>Learn with expert anytime anywhere</h1>
                    <h3>Our mission is to help people to find the best course for 
                    their needs with the expereince of our teacher</h3>
                </div>
                <div className="Image-panel w-1/2 flex justify-center align-middle bg-slate-200">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="Category flex flex-col justify-center align-middle gap-10 ">
                <h1>Browse top category</h1>    
                <div>
                    <a href="https://www.youtube.com" className="flex flex-row">
                    <img src={Office} alt="Office Image" />
                        <div>
                            <h1>Office</h1>
                            <h3>Learn with expert anytime anywhere</h3>    
                        </div>
                    </a>
                </div>
                <div>
                    <a href="#">Label</a>
                    <a href="#">Label</a>
                    <a href="#">Label</a>
                </div>
                <div>
                    <a href="#">Label</a>
                    <a href="#">Label</a>
                    <a href="#">Label</a>
                </div>
            </div>
        </div>
    );
};
export default Home_Page;  