import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import CreateQuestionForm from './components/CreateQuestionForm';
import QuestionsHeader from './components/QuestionsHeader';
import QuestionList from './components/QuestionList';
import CreateQuestionModal from './components/CreateQuestionModal';
import UpdateQuestionModal from './components/UpdateQuestionModal';
import FilterModal from './components/FilterModal';
import { fetchQuestions, searchQuestions, createQuestion, updateQuestion} from './services/api';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Function to handle the application of filters
  const handleApplyFilter = (assignedTo, properties) => {
    setIsFilterModalOpen(false);
    const filters = { assignedTo, properties };
    refreshQuestions(filters);
  };

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

  // Helper function to normalize property strings
  const normalizeProperties = (propertiesString) => {
    return propertiesString.split(',')
      .map(prop => prop.trim().toLowerCase()) 
      .sort(); // sort properties to ensure consistent order
  };

  // refreshQuestions function
  const refreshQuestions = async (filters) => {
    setIsLoading(true);
    try {
      const allQuestions = await fetchQuestions();
      let filteredQuestions = allQuestions;

      if (filters) {
        const { assignedTo, properties } = filters;
        if (assignedTo) {
          filteredQuestions = filteredQuestions.filter(q => q['Assigned To'] === filters.assignedTo);
        }
        if (properties) {
          const normalizedFilterProperties = normalizeProperties(properties);
          filteredQuestions = filteredQuestions.filter(q => {
            const normalizedQuestionProperties = normalizeProperties(q.Properties || '');
            return normalizedFilterProperties.every(filterProp => normalizedQuestionProperties.includes(filterProp));
          });
        }
      }
      setQuestions(filteredQuestions);
    } catch (error) {
      console.error('Failed to refresh questions:', error);
    } finally {
      setIsLoading(false);
    };
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
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilter={handleApplyFilter}
      />
      <CreateQuestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateQuestionForm onSubmit={handleCreateQuestion} />
      </CreateQuestionModal>
      <NavBar 
        onSearch={handleSearch} 
        onClickCreate={() => setIsModalOpen(true)}
        onOpenFilterModal={() => setIsFilterModalOpen(true)}
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

