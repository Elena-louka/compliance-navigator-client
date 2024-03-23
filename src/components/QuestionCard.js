import React from 'react';
import { PencilIcon } from '@heroicons/react/solid';


function QuestionCard({ question, onEdit }) {
    return (
        <div className="bg-white shadow-md rounded-lg mb-4 p-4 flex justify-between items-center">
            <div className="grid grid-cols-4 gap-4 flex-grow">
                <div className="font-semibold text-gray-800">{question.Question}</div>
                <div className="text-gray-600">{question.Answer?.trim()}</div>
                <div className="text-gray-500 text-sm">{question['Created At']}</div>
                <div className="text-gray-500 text-sm">{question['Created By']}</div>
            </div>
            <button onClick={() => onEdit(question)} className="ml-4 p-1 rounded hover:bg-gray-200">
                <PencilIcon className="h-5 w-5 text-gray-600" />
            </button>
        </div>
    );
}


  
export default QuestionCard;
  