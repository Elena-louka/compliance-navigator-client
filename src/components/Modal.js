import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl m-4 sm:max-w-xl sm:w-full sm:m-8">
          <div className="flex justify-between items-center border-b p-4 rounded-t-lg">
            <h3 className="text-xl font-semibold">Create a Question</h3>
            <button onClick={onClose}>
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    );
  };
  

export default Modal;
