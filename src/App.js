import React from 'react';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import QuestionsHeader from './components/QuestionsHeader';
import QuestionList from './components/QuestionList';
import './App.css';

function App() {

  return (
    <div className="App">
      <TopBar />
      <SearchBar />
      <QuestionsHeader />
      <QuestionList />
    </div>
  );
}

export default App;

