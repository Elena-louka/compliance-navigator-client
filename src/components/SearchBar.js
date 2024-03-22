import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto bg-white rounded overflow-hidden shadow my-8">
      <input
        type="text"
        className="w-full px-4 py-2 text-gray-700 leading-tight focus:outline-none"
        placeholder="Search questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2">
        {/* Insert SVG or <i> tag for icon here */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
