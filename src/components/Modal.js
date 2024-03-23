import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl m-4 sm:max-w-xl sm:w-full sm:m-8 relative"> {/* Add relative here */}
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-900">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Modal Content */}
        <div className="p-4">
          {children}
        </div>
        {/* Moved Create Question Button inside Modal Content for now */}
        {/* Depending on your design, you might want to place this button differently */}
      </div>
    </div>
  );
};

export default Modal;
