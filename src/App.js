import React from 'react';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import QuestionList from './components/QuestionList';
import './App.css';

function App() {

    return (
        <div className="App">
            <TopBar />
            <SearchBar/>
            <QuestionList />
        </div>
    );
}

export default App;

