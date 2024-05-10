import React from "react";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center bg-blue-300 w-full py-8 md:h-[30vh] flex-wrap gap-4">
      {/* Media Section */}
      <div className="media-contain w-full md:w-[300px] flex flex-col justify-center items-center">
        <h4 className="title text-xl md:text-2xl font-extrabold mb-4">Media</h4>
        <p className="text-sm md:text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <ul className="flex flex-row gap-2 md:gap-4 justify-center">
          <li><a href="https://web.facebook.com/citocomputer" className="text-blue-900 hover:text-blue-600">Facebook</a></li>
          <li><a href="https://t.me/citocomputer" className="text-blue-900 hover:text-blue-600">Telegram</a></li>
        </ul>
      </div>

      {/* Category Section */}
      <div className="category-contain w-full md:w-[300px] flex flex-col justify-center items-center">
        <h4 className="title text-xl md:text-2xl font-extrabold mb-4">Top 4 categories</h4>
        <ul className="text-sm md:text-base">
          <li><a href="" className="text-blue-900 hover:text-blue-600">Finance & Accounting</a></li>
          <li><a href="" className="text-blue-900 hover:text-blue-600">Development</a></li>
          <li><a href="" className="text-blue-900 hover:text-blue-600">Design</a></li>
          <li><a href="" className="text-blue-900 hover:text-blue-600">Business</a></li>
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="links-contain w-full md:w-[300px] flex flex-col justify-center items-center">
        <h4 className="title text-xl md:text-2xl font-extrabold mb-4">Quick Links</h4>
        <ul className="text-sm md:text-base">
          <li><a href="" className="text-blue-900 hover:text-blue-600">About</a></li>
          <li><a href="" className="text-blue-900 hover:text-blue-600">Contact</a></li>
          <li><a href="" className="text-blue-900 hover:text-blue-600">Career</a></li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="support-contain w-full md:w-[300px] flex flex-col justify-center items-center">
        <h4 className="title text-xl md:text-2xl font-extrabold mb-4">Support</h4>
        <ul className="text-sm md:text-base">
          <li><a href="" className="text-blue-900 hover:text-blue-600">Help Center</a></li>
          <li><a href="" className="text-blue-900 hover:text-blue-600">FAQs</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
