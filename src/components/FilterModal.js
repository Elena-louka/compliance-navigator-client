import React, { useState } from 'react';

const FilterModal = ({ isOpen, onClose, onApplyFilter }) => {
    const [assignedTo, setAssignedTo] = useState('');
    const [properties, setProperties] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Filter Questions</h3>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Assigned to:</label>
                        <input
                            id="assignedTo"
                            type="email"
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="user@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="properties" className="block text-sm font-medium text-gray-700">Properties:</label>
                        <input
                            id="properties"
                            type="text"
                            value={properties}
                            onChange={(e) => setProperties(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="section:Workforce Personnel,vendor:IBM"
                        />
                    </div>
                </div>
                <div className="mt-5 sm:mt-6">
                    <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm"
                        onClick={() => onApplyFilter(assignedTo, properties)}
                    >
                        Apply Filters
                    </button>
                    <button
                        type="button"
                        className="mt-3 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:text-sm"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
