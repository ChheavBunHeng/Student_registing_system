import React from "react";
import "./Home_page.css";
import { BrowserBrowserRouter, Routes, Route, Link } from "react-BrowserRouter-dom";
import Officeimg from "./image/Office.png";
import coding from "./image/coding.png";
import accounting from "./image/accounting.png";
import montage from "./image/montage.png";
import desgin from "./image/illustration.png";
import databaseManagment from "./image/database-management.png";
import webdev from "./image/app-development.png";
import { BrowserRouter } from "react-router-dom";

function Home_Page() {
    const Products = [
        {Name: "Office", Image:Officeimg, Desc:"Learn with expert anytime anywhere",Path:"/office"},
        {Name: "Coding", Image:coding, Desc:"Learn with expert anytime anywhere",Path:"/coding"},
        {Name: "Accounting", Image:accounting, Desc:"Learn with expert anytime anywhere",Path:"/accounting"},
        {Name: "Montage", Image:montage, Desc:"Learn with expert anytime anywhere",Path:"/montage"},
        {Name: "Design", Image:desgin, Desc:"Learn with expert anytime anywhere",Path:"/design"},
        {Name: "Database", Image:databaseManagment, Desc:"Learn with expert anytime anywhere",Path:"/database"},
        {Name: "WebDev", Image:webdev, Desc:"Learn with expert anytime anywhere",Path:"/webdev"},
    ];
    return (
        <div className="Home_Page flex justify-center w-full ">
            {/* Top Panel */}
            <div className="Home_Panel flex flex-row justify-around w-screen flex-wrap h-[30vh] bg-slate-500">
                <div className="Text-panel w-1/2 h-36 flex justify-center align-middle ">
                    <h1 className="text-3xl">Learn with expert anytime anywhere</h1>
                    <h3>Our mission is to help people to find the best course for 
                    their needs with the experience of our teacher</h3>
                </div>
                <div className="Image-panel w-1/2 flex justify-center align-middle bg-slate-200">
                    <img src="" alt="" />
                </div>
            </div> 
            <BrowserRouter>
                {Products.map((Product, index) =>(
                    <Link key={index} to={Product.Path}>{Product.Name}</Link>
                ))}
                <Routes>
                    {Products.map((Product,index)=>(
                        <Route key={index} path={Product.Path} element={
                            <div>
                                <img src={Product.Name} alt="" />
                                <h1>{Product.Name}</h1>
                                <p>{Product.Desc}</p>
                            </div>
                        }></Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Home_Page;
