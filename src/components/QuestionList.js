import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../services/api';
import QuestionCard from './QuestionCard'; 
import './QuestionList.css';

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
      <div className="question-list">
        {questions.map((question) => (
          <QuestionCard key={question._recordId} question={question} />
        ))}
      </div>
    );
  };

export default QuestionList;

  