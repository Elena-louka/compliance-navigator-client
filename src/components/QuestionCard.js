import React from 'react';


function QuestionCard({ question }) {
    return (
        <div className="bg-white shadow-md rounded-lg mb-4 p-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="font-semibold text-gray-800">{question.Question}</div>
            <div className="text-gray-600">{question.Answer?.trim()}</div>
            <div className="text-gray-500 text-sm">{question['Created At']}</div>
            <div className="text-gray-500 text-sm">{question['Created By']}</div>
          </div>
        </div>
    );
}
  
  export default QuestionCard;
  