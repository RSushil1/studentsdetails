import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Search from './pages/Search';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </>
  );
}

export default App;
