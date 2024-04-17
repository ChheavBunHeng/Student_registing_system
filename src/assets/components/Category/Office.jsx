import React from "react";
import "./Office.css";

function Office() {
    return (
        <div className="flex flex-row flex-wrap gap-10">
            <div className="Card w-[300px] h-[350px] border flex flex-col flex-wrap">
                 <div className="Card-Image flex justify-center align-middle">
                    <img className="w-[250px] h-[150px] m-[10px] border-r object-cover rounded" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                 </div>
                 <div className="flex justify-center Card-Content m-[10px] gap-[10px]">
                    <div className="flex flex-row justify-around w-[250px]">
                        <h1 className="px-[10px] text-center text-xl font-semibold bg-yellow-100 text-blue-400 font-bold">Desgin</h1>
                        <h1 className="px-[10px] text-center text-xl font-semibold bg-yellow-100 text-blue-400 font-bold">$30</h1>
                    </div>
                    <h1 className="px-[10px] bg-blue-100 text-blue-400 font-bold">Adobe Photoshop</h1>
                    <h1>The ultimate tool for photo editing and design. Unlock your creativity with powerful features and precise control.</h1>
                 </div>
            </div>
            <div className="Card w-[300px] h-[350px] border flex flex-col flex-wrap">
                 <div className="Card-Image flex justify-center align-middle">
                    <img className="w-[250px] h-[150px] m-[10px] border-r object-cover rounded" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                 </div>
                 <div className="flex justify-center Card-Content m-[10px]">
                    <div className="flex flex-row justify-around w-[250px]">
                        <h1 className="text-xl font-semibold">Office</h1>
                        <h1 className="text-xl font-semibold">$30</h1>
                    </div>
                    <h1>Office Suite</h1>
                    <h1>Word for documents, Excel for spreadsheets, and PowerPoint for presentations. Create, analyze, and present effortlessly.</h1>
                 </div>
            </div>
        </div>
        
    );
}

export default Office;
