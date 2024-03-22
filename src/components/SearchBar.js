import React from 'react';

function SearchBar({ setSearchTerm }) {
    return (
        <div className="py-2 px-4">
            <input
                type="text"
                placeholder="Search questions..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
                Search
            </button>
        </div>
    );
}


export default SearchBar;
