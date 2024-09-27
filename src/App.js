import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <ScrollToTop>
        <div className="relative">
          <Routes>
            <Route exact path="/" element={<Portfolio isDarkMode={isDarkMode} />} />
            <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
          </Routes>
          <div className="fixed bottom-4 right-4">
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
