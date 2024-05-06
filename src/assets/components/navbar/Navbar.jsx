/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css"; // Make sure this file exists and contains CSS definitions.
import WebDev from "../Category/WebDev"; // Import WebDev component if needed.
import Office from "../Category/Office";
function Navbar() {
    return (
        <div>
            <h1>Navbar</h1>
            <BrowserRouter>
                <div>
                    {/* Use Link component to create a clickable link */}
                    <Link to="/webdev">WebDev</Link>
                    <Link to="/office">Office</Link>
                </div>
                <Routes>
                    {/* Define your routes here */}
                    <Route path="/office" element={<Office />}></Route>
                    <Route path="/webdev" element={<WebDev />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navbar;
