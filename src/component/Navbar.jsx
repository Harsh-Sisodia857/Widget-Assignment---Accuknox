import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="px-2 flex items-center justify-between mx-auto w-[70%]">
      <div className="flex items-center">
        <div>Home</div>
        <div className="mx-2">{'>'}</div>
        <div className="text-gray-500">Dashboard</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            id="search"
            placeholder="Search anything..."
            className="border border-border rounded-lg p-2 w-full pl-10"
          />
          <FaSearch className="absolute inset-y-0 left-0 ml-3 mt-2.5 text-gray-500" />
        </div>
      </div>

    </div>
  );
}

export default Navbar;
