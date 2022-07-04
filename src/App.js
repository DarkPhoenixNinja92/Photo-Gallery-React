import React from 'react';
import './App.css';
import Header from './components/Header.js';
import PhotoList from './components/PhotoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <PhotoList/>
    </div>
  );
}

export default App;
