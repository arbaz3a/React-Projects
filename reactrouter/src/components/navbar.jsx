import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
<div className="flex justify-between items-center h-14 w-full px-4 bg-gray-300 text-black mb-3">
      <div className="w-32">
        <img
          className="w-full h-full object-contain"
          src="/Logo.png"
          alt="Logo"
        />
      </div>
      <div className="md:block hidden">
        <ul className="flex list-none justify-center font-medium text-gray-700">
          <Link to="/home"><li className="mr-6 cursor-pointer hover:text-teal-600">Home</li></Link>
          <Link to="/blog"><li className="cursor-pointer hover:text-teal-600">Blog</li></Link>
          <Link to="/about/arbaز"><li className="ml-6 cursor-pointer hover:text-teal-600">About</li></Link>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-white rounded-xl px-1">
          <input
            className="bg-transparent outline-none py-1 md:px-2 
               w-24 sm:w-32 md:w-40 lg:w-52"
            type="text"
            placeholder="Search here"
          />
          <img
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
            src="/search-outline.png"
            alt="Search"
          />
        </div>
        <img
          className="h-6 w-9 cursor-pointer md:block hidden"
          src="/Swich.png"
          alt="Switch"
        />
      </div>
      <div className="block md:hidden">
        <p className="md:text-2xl text-xl">&#9776;</p>
      </div>
    </div>
  );
}

export default Navbar;
