import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import CreateQuestionForm from './components/CreateQuestionForm';
import QuestionsHeader from './components/QuestionsHeader';
import QuestionList from './components/QuestionList';
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

  const [selectedQuestions, setSelectedQuestions] = useState([]);

  // function for toggling question selection
  const handleSelectQuestion = (questionId) => {
    setSelectedQuestions((prevSelected) =>
      prevSelected.includes(questionId)
        ? prevSelected.filter(id => id !== questionId)
        : [...prevSelected, questionId]
    );
  };

  // function for handling 'Select All' toggle
  const handleSelectAll = () => {
    if (selectedQuestions.length === questions.length) {
      setSelectedQuestions([]);
    } else {
      setSelectedQuestions(questions.map(q => q.id));
    }
  };

  // function for clearing the selection
  const handleClearSelection = () => {
    setSelectedQuestions([]);
  };

  // function for handling bulk assignment
  const handleBulkAssign = () => {
    const emailToAssign = window.prompt('Please enter the email address to assign the questions to:');
    if (emailToAssign && emailToAssign.trim()) {
      selectedQuestions.forEach(async (questionId, index, array) => {
        try {
          await updateQuestion(questionId, { 'Assigned To': emailToAssign });
          if (index === array.length - 1) {
            await refreshQuestions();
            setSelectedQuestions([]); 
          }
        } catch (error) {
          console.error(`Failed to assign question ${questionId}:`, error);
        }
      });
    }
  };

  // Helper function to refresh questions from the server
  const refreshQuestions = async () => {
    try {
      const updatedQuestionsList = await fetchQuestions();
      setQuestions(updatedQuestionsList);
    } catch (error) {
      console.error('Failed to refresh questions:', error);
    }
  };


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
      <CreateQuestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateQuestionForm onSubmit={handleCreateQuestion} />
      </CreateQuestionModal>
      <NavBar 
        onSearch={handleSearch} 
        onClickCreate={() => setIsModalOpen(true)}
      />
      <QuestionsHeader 
        handleSelectAll={handleSelectAll}
        areAllQuestionsSelected={selectedQuestions.length === questions.length}
        handleClearSelection={handleClearSelection}
        handleBulkAssign={handleBulkAssign}
        selectedQuestionsCount={selectedQuestions.length}
      />
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <QuestionList 
          questions={questions}
          onEdit={handleEditClick}
          selectedQuestions={selectedQuestions}
          onSelect={handleSelectQuestion}
        />
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

