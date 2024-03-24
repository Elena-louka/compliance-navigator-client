import React from 'react';
import { TrashIcon, UserAddIcon } from '@heroicons/react/solid';

function QuestionsHeader({ handleSelectAll, areAllQuestionsSelected, handleClearSelection, handleBulkAssign, selectedQuestionsCount }) {
  return (
    <div className="bg-gray-100 p-3 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="selectAll"
          className="form-checkbox rounded text-blue-500 focus:ring-0 mr-2"
          onChange={handleSelectAll}
          checked={areAllQuestionsSelected}
        />
        <label htmlFor="selectAll" className="text-gray-700 font-medium mr-4">Select All</label>
        {selectedQuestionsCount > 0 && (
          <>
            <button
              onClick={handleClearSelection}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mr-2"
            >
              <TrashIcon className="h-5 w-5 mr-1" /> Clear
            </button>
            <button
              onClick={handleBulkAssign}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <UserAddIcon className="h-5 w-5 mr-1" /> Assign To
            </button>
          </>
        )}
      </div>
    </div>
  );
}
  
export default QuestionsHeader;
