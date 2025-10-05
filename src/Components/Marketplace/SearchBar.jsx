// SearchBar.jsx
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {



    
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex items-center justify-between">
      <div className="relative flex-grow mr-4">
        <input
          type="text"
          placeholder="I wanna buy..."
          className="w-full pl-4 pr-10 py-2 border border-gray-300 bg-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={28} />
      </div>
      <button className="px-6 py-2 border border-gray-300 rounded-lg text-white bg-[#3B82F6] hover:bg-blue-700 transition cursor-pointer">
        Order List
      </button>
      <button className="ml-2 px-6 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
        My Product
      </button>
    </div>
  );
};

export default SearchBar;