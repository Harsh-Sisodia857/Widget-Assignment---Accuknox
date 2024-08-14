import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { searchWidget, setCategory } from "../store/slice/widgetSlice";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch(searchWidget(searchTerm));
  };

  return (
    <div className="px-2 flex items-center justify-between mx-auto w-[70%]">
      <div className="flex items-center">
        <div>Home</div>
        <div className="mx-2">{">"}</div>
        <div className="text-gray-500">Dashboard</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search anything..."
            className="border border-border rounded-lg p-2 w-full pl-10"
          />
          <FaSearch className="absolute inset-y-0 left-0 ml-3 mt-2.5 text-gray-500" />
        </div>
        <button
          onClick={handleSearchSubmit}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>
      
    </div>
  );
}

export default Navbar;
