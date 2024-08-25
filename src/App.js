import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
