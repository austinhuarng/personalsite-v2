import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  );
}

export default App;
