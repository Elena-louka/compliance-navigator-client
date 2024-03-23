import React from 'react';

const SecondaryNavBar = ({ onCreate}) => {
    return (
      <nav className="secondary-nav">
        <ul className="flex justify-between items-center p-4 bg-gray-200">
          <li onClick={onCreate} className="text-blue-600 hover:text-blue-800 cursor-pointer">Create</li>
        </ul>
      </nav>
    );
  };

export default SecondaryNavBar;
