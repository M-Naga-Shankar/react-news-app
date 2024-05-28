import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact  path="/" element={<NewsCard key='general' category='general'/>} />
          <Route exact  path="/business" element={<NewsCard key='business' category='business'/>} />
          <Route exact  path="/entertainment" element={<NewsCard key='entertainment' category='entertainment' />} />
          <Route exact  path="/health" element={<NewsCard key='health' category='health' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
