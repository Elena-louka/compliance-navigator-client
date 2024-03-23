import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import CreateQuestionForm from './components/CreateQuestionForm';
import QuestionsHeader from './components/QuestionsHeader';
import QuestionList from './components/QuestionList';
import SecondaryNavBar from './components/SecondaryNavBar';
import Modal from './components/Modal';
import { fetchQuestions, searchQuestions} from './services/api';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleCreateQuestion = async (formData) => {
    // API call to create a question
    console.log(formData);
    setIsModalOpen(false); // Optionally close the modal after form submission
  };


  return (
    <div className="App">
      <TopBar />
      <SecondaryNavBar onCreate={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateQuestionForm onSubmit={handleCreateQuestion} />
      </Modal>
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

