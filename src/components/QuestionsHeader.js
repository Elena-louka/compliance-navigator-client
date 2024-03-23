import React from 'react';

function QuestionsHeader({ handleSelectAll, areAllQuestionsSelected, handleClearSelection, handleBulkAssign, selectedQuestionsCount }) {
  const dynamicButtonStyle =
    'text-white font-bold py-2 px-4 rounded opacity-90 hover:opacity-100 transition-opacity duration-300';
  
    return (
      <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="selectAll"
            className="mr-2"
            onChange={handleSelectAll}
            checked={areAllQuestionsSelected}
          />
          <label htmlFor="selectAll" className="mr-4">Select All</label>
  
          {/* Conditionally render Clear and Assign To buttons */}
          {selectedQuestionsCount > 0 && (
            <>
              <button
                onClick={handleClearSelection}
                className={`${dynamicButtonStyle} bg-blue-300 hover:bg-blue-400 mr-2`}
              >
                Clear
              </button>
              <button
                onClick={handleBulkAssign}
                className={`${dynamicButtonStyle} bg-blue-300 hover:bg-blue-400`}
              >
                Assign To
              </button>
            </>
          )}
        </div>
      <div className="grid grid-cols-4 gap-4 flex-grow">
        <div>QUESTION</div>
        <div>ANSWER</div>
        <div>CREATED AT</div>
        <div>CREATED BY</div>
      </div>
    </div>
  );
}
  
export default QuestionsHeader;
