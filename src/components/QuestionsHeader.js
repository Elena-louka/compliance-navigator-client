import React from 'react';

function QuestionsHeader() {
    return (
      <div className="bg-blue-600 text-white p-3 grid grid-cols-4 gap-4">
        <div>QUESTION</div>
        <div>ANSWER</div>
        <div>CREATED AT</div>
        <div>CREATED BY</div>
      </div>
    );
  }
  
  export default QuestionsHeader;
  