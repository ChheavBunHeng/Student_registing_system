import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Home_page.css";

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
        { Name: "Office", Component: Office, Image: Officeimg, Desc: "Learn with expert anytime anywhere", Path: "/office" },
        { Name: "Coding", Component: Programming, Image: coding, Desc: "Learn with expert anytime anywhere", Path: "/coding" },
        { Name: "Accounting", Component: Account, Image: accounting, Desc: "Learn with expert anytime anywhere", Path: "/accounting" },
        { Name: "Video Editing", Component: VideoEditing, Image: montage, Desc: "Learn with expert anytime anywhere", Path: "/montage" },
        { Name: "Design", Component: Design, Image: desgin, Desc: "Learn with expert anytime anywhere", Path: "/design" },
        { Name: "Database", Component: Database, Image: databaseManagement, Desc: "Learn with expert anytime anywhere", Path: "/database" },
        { Name: "WebDev", Component: WebDev, Image: webdevimg, Desc: "Learn with expert anytime anywhere", Path: "/webdev" },
    ];

    return (
        <div className="Home_Page flex justify-center w-full">
            {/* Top Panel */}
            <div className="Home_Panel flex flex-row w-screen flex-wrap h-[30vh] bg-gray-100 ">
                <div className="Text-panel w-1/2 h-36 flex justify-center align-middle p-10">
                    <h1 className="text-3xl font-bold">Learn with expert anytime anywhere</h1>
                    <h3 className="text-lg">Our mission is to help people to find the best course for their needs with the experience of our teacher</h3>
                </div>
                <img src={CitoImage} className="w-1/2 h-[30vh] object-cover"/>
            </div>

            <BrowserRouter>
            <div className="flex justify-center items-center flex-wrap flex-row px-[32px] sm:">
            {/* Render navigation links */} 
            {Products.map((Product, index) => (
                <Link key={index} to={Product.Path} className="flex flex-col items-center justify-center m-4 border p-[30px] ">
                    <img src={Product.Image} alt={Product.Name} className="max-w-xs" />
                    <h1 className="text-lg font-semibold">{Product.Name}</h1> 
                    <p className="text-sm">{Product.Desc}</p>
                </Link>
            ))}
            </div>
                <Routes>
                    {/* Render routes dynamically */}
                    {Products.map((Product, index) => (
                        
                        <Route key={index} path={Product.Path} element={
                            <div>
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
