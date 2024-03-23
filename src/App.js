import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import CreateQuestionForm from './components/CreateQuestionForm';
import QuestionsHeader from './components/QuestionsHeader';
import QuestionList from './components/QuestionList';
import SecondaryNavBar from './components/SecondaryNavBar';
import CreateQuestionModal from './components/CreateQuestionModal';
import UpdateQuestionModal from './components/UpdateQuestionModal';
import { fetchQuestions, searchQuestions, createQuestion, updateQuestion} from './services/api';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleEditClick = (question) => {
    setCurrentQuestion(question);
    setIsUpdateModalOpen(true);
  };
  
  const handleUpdateQuestion = async (id, updatedData) => {
    try {
      await updateQuestion(id, updatedData); 
      const updatedQuestionsList = await fetchQuestions();
      setQuestions(updatedQuestionsList);
      setIsUpdateModalOpen(false);
    } catch (error) {
      console.error('Failed to update question:', error);
    }
  };
  

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
      setIsLoading(true); 
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        console.error('Failed to load questions:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadQuestions();
  }, []);

  const handleCreateQuestion = async (formData) => {
    try {
      console.log(formData)
      const newQuestion = await createQuestion(formData); 
      setQuestions([newQuestion, ...questions]); 
      setIsModalOpen(false);
      console.log(newQuestion)
    } catch (error) {
      console.error('Failed to create question:', error);
    }
  };


  return (
    <div className="App">
      <TopBar />
      <SecondaryNavBar onCreate={() => setIsModalOpen(true)} />
      <CreateQuestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateQuestionForm onSubmit={handleCreateQuestion} />
      </CreateQuestionModal>
      <SearchBar onSearch={handleSearch} />
      <QuestionsHeader />
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <QuestionList questions={questions} onEdit={handleEditClick}/>
      )}
      <UpdateQuestionModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        question={currentQuestion}
        onUpdate={handleUpdateQuestion}
      />
    </div>
  );
}

export default App;

