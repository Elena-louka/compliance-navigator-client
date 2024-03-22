import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../services/api';
import QuestionCard from './QuestionCard'; 

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions);
    };

    getQuestions();
  }, []);

  return (
    <div className="space-y-4">
      {questions.map(question => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionList;

  