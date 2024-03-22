import React from 'react';
import './QuestionCard.css'; 

const QuestionCard = ({ question }) => {
    return (
      <div className="question-card">
        <h3>{question.Question}</h3>
        <p>{question.Answer}</p>
        {/* Include other question details as necessary */}
      </div>
    );
  };

export default QuestionCard;
