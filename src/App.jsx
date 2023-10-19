import { useState } from 'react';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <>
      <div id="container">
        <h1 id="heading">My App</h1>
        <div id="navbar">
          <Link to="/home">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/about">About</Link>
        </div>
        <div id="main-section">
          {}
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

