import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import images
import Officeimg from "./image/Office.png";
import coding from "./image/coding.png";
import accounting from "./image/accounting.png";
import montage from "./image/montage.png";
import desgin from "./image/illustration.png";
import databaseManagement from "./image/database-management.png"; // Corrected import name
import webdevimg from "./image/app-development.png";
import CitoImage from "./image/PanelImage.jpg";

// Import components
import Office from "../Category/Office.jsx";
import Design from "../Category/Design.jsx";
import Account from "../Category/Account.jsx";
import Programming from "../Category/Programming.jsx";
import Database from "../Category/Database.jsx";
import WebDev from "../Category/WebDev.jsx";
import VideoEditing from "../Category/VideoEditing.jsx";

function Home_Page() {
    const Products = [
        { Name: "Office", Component: Office, Image: Officeimg, Desc: "Master Office Skills On-the-Go", Path: "/office" },
        { Name: "Coding", Component: Programming, Image: coding, Desc: "Dive into Coding Expertise", Path: "/coding" },
        { Name: "Accounting", Component: Account, Image: accounting, Desc: "Explore Accounting Mastery", Path: "/accounting" },
        { Name: "Video Editing", Component: VideoEditing, Image: montage, Desc: "Craft Montage Magic Anywhere", Path: "/montage" },
        { Name: "Design", Component: Design, Image: desgin, Desc: "Unleash Design Brilliance On-the-Go", Path: "/design" },
        { Name: "Database", Component: Database, Image: databaseManagement, Desc: "Delve into Database Mastery", Path: "/database" },
        { Name: "WebDev", Component: WebDev, Image: webdevimg, Desc: "Discover Web Development Expertise", Path: "/webdev" }
        
    ];

    // Function to handle smooth scrolling behavior
    const scrollToSection = (path) => {
        const section = document.getElementById(path.substring(1));
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Effect to handle scrolling when the URL changes
    useEffect(() => {
        const path = window.location.pathname;
        scrollToSection(path);
    }, []);

    return (
        <div className="Home_Page flex justify-center w-full">
            {/* Top Panel */}
            <div className="Home_Panel flex flex-row w-screen flex-wrap h-[30vh] bg-gray-100 ">
                <div className="Text-panel w-1/2 h-36 flex justify-center align-middle p-10">
                    <h1 className="font-roboto text-sm md:text-2xl font-bold">Learn with expert anytime anywhere</h1>
                    <h3 className="text-sm md:text-2xl">Our mission is to help people to find the best course for their needs with the experience of our teacher</h3>
                </div>
                <img src={CitoImage} className="w-1/2 h-[30vh] object-cover"/>
            </div>

            <BrowserRouter>
                <div className="w-full flex justify-center items-center flex-wrap flex-row px-[10px] sm:px-[32px]">
                    {/* Render navigation links */}
                    {Products.map((Product, index) => (
                        <a key={index} href={Product.Path} onClick={() => scrollToSection(Product.Path)} className="flex flex-col items-center justify-center border m-2 p-[10px] w-[150px] h-[100px] sm:w-[350px] sm:h-[250px] sm:p-[30px] sm:m-4">
                            <img src={Product.Image} alt={Product.Name} className="w-10 h-10 sm:w-32 sm:h-32" />
                            <h1 className="text-[12px] font-bold font-roboto sm:text-lg ">{Product.Name}</h1> 
                            <p className="text text-[9px] font-roboto font-medium sm:text-sm">{Product.Desc}</p>
                        </a>
                    ))}
                </div>
                <Routes>
                    {/* Render routes dynamically */}
                    {Products.map((Product, index) => (
                        <Route key={index} path={Product.Path} element={
                            <div id={Product.Path.substring(1)} className="transition-opacity duration-500">
                                <Product.Component />
                            </div>
                        } />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Home_Page;
