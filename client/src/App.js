import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Search from './pages/Search';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Policy from './pages/Policy';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/policy' element={<Policy/>}/>
    </Routes>
    </>
  );
}

export default App;
