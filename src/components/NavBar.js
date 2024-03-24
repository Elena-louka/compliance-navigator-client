import React, { useState } from 'react';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'; 
import { AdjustmentsIcon } from '@heroicons/react/solid'; 

function NavBar({ onSearch, onClickCreate, onOpenFilterModal }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center justify-between px-12 py-8 bg-white shadow">

      <div className="border-r border-gray-200 pr-4">
        <button onClick={onOpenFilterModal} className="text-gray-500 hover:text-gray-700">
          <AdjustmentsIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-grow flex justify-center px-4">
        <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 rounded-full overflow-hidden">
          <input
            type="text"
            className="py-2 px-4 text-gray-700 leading-tight focus:outline-none bg-gray-100 rounded-full"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
            <SearchIcon className="h-5 w-5" />
          </button>
        </form>
      </div>

      <div className="border-l border-gray-200 pl-4">
        <button onClick={onClickCreate} className="text-blue-500 hover:text-blue-600">
          <PlusCircleIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
