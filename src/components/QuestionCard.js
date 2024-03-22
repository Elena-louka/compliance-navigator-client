import React from 'react';

function QuestionCard({ question }) {
    return (
        <div className="border border-gray-200 rounded-md p-4 m-2 flex flex-col">
            <span className="text-sm text-gray-600">ID: {question._recordId}</span>
            <h3 className="font-semibold">{question.Question}</h3>
            <p>{question.Answer}</p>
            <p className="text-gray-500 text-xs">{question.Detail}</p> {/* Assuming 'Detail' exists */}
        </div>
    );
}

export default QuestionCard;
