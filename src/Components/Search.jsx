// Search.jsx
import React from 'react';
import { useGlobalContext } from '../Context';

const Search = () => {
  const {query, setQuery}= useGlobalContext()
  return (
    <nav className="w-full bg-gray-800 p-4 flex items-center justify-between">
      {/* Left side text */}
      <div className="text-white text-xl font-semibold">
        Bilal Ahmad
      </div>

      {/* Right side search bar */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder="Search..."
          className="pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          🔍
        </button>
      </div>
    </nav>
  );
};

export default Search;
