import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Support from "./Support";
function Footer() {
  return (
<div className="flex flex-col md:flex-row justify-evenly items-start bg-blue-50 w-full py-8 md:h-[20vh] flex-wrap gap-4">
      {/* Media Section */}
      <div className="media-contain w-full md:w-[300px] flex flex-col justify-center  ">
        <h4 className="title text-xl md:text-2xl font-extrabold mb-4">Media</h4>
        <p className="text-sm md:text-base text-center">Stay updated by connecting with us on Facebook and Telegram.</p>
        <ul className="flex flex-row gap-2 md:gap-4 justify-center">
          <li><a href="https://web.facebook.com/citocomputer" className="text-blue-900 hover:text-blue-600 transition duration-300 font-bold">Facebook</a></li>
          <li><a href="https://t.me/citocomputer" className="text-blue-900 hover:text-blue-600 transition duration-300 font-bold">Telegram</a></li>
          <li><a href="https://www.youtube.com/@citocomputer" className="text-blue-900 hover:text-blue-600 transition duration-300 font-bold">Youtube</a></li>
        </ul>
      </div>

      {/* Category Section */}
      <div className="category-contain w-full md:w-[300px] flex flex-col justify-center items-center">
        <h4 className="title text-xl md:text-2xl font-extrabold mb-4">Contact Us</h4>
        <ul className="text-sm md:text-base">
          
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="links-contain w-full md:w-[300px] flex flex-col justify-center items-center">
        <h4 className="title text-xl md:text-2xl font-extrabold mb-4">Locations</h4>
        <ul className="text-sm md:text-base">
          <li><a href="https://maps.app.goo.gl/XgaYEJVfiWEw9tEc6" className="text-blue-900 hover:text-blue-600 transition duration-300 font-bold">Baktouk Branch</a></li>
          <li><a href="https://maps.app.goo.gl/i7w4tSXfXq1PFZod9" className="text-blue-900 hover:text-blue-600 transition duration-300 font-bold">Chhouk Meas Branch</a></li>
          <li><a href="https://maps.app.goo.gl/HnauEoJaqzsktw4EA" className="text-blue-900 hover:text-blue-600 transition duration-300 font-bold">Wat Chhouk Branch</a></li>
        </ul>
      </div>

      {/* Support Section */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/support" element={<Support />}></Route>
        </Routes>
      </BrowserRouter> */}
        <div className="support-contain w-full md:w-[300px] flex flex-col justify-center items-center">
          <h4 className="title text-xl md:text-2xl font-extrabold mb-4">Support</h4>
          <nav>
          <ul className="text-sm md:text-base">
            <li><a href="" className="text-blue-900 hover:text-blue-600 transition duration-300 font-bold">Help Center</a></li>
            <li><Link></Link></li>
          </ul>
          </nav>
        </div>
    </div>
  );
}

export default Footer;
