import React from 'react';

function QuestionsHeader() {
  return (
    <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
      <div className="grid grid-cols-4 gap-4 flex-grow">
        <div>QUESTION</div>
        <div>ANSWER</div>
        <div>CREATED AT</div>
        <div>CREATED BY</div>
      </div>
      <div className="p-3">  </div>
    </div>
  );
}
  
export default QuestionsHeader;
  