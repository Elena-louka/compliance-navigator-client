import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import QuestionsHeader from './components/QuestionsHeader';
import QuestionList from './components/QuestionList';
import { fetchQuestions, searchQuestions } from './services/api';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      const data = await searchQuestions(query);
      setQuestions(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    };
  }

  useEffect(() => {
    const loadQuestions = async () => {
      setIsLoading(true); // Start loading
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        console.error('Failed to load questions:', error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };
    loadQuestions();
  }, []);


  return (
    <div className="App">
      <TopBar />
      <SearchBar onSearch={handleSearch} />
      <QuestionsHeader />
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <QuestionList questions={questions} />
      )}
    </div>
  );
}

export default App;

