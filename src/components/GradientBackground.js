import React, { useState, useEffect } from 'react';

const GradientBackground = ({ children, isDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const lightGradient = `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.2) 0%, rgba(16, 185, 129, 0.2) 50%, rgba(249, 115, 22, 0.2) 100%)`;
  const darkGradient = `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(4, 120, 87, 0.5) 0%, rgba(4, 120, 87, 0.2) 50%, transparent 100%)`;

  const gradientStyle = {
    background: isDarkMode
      ? `#1f2937 ${darkGradient}`
      : lightGradient,
    transition: 'background 0.3s ease',
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`} style={gradientStyle}>
      {children}
    </div>
  );
};

export default GradientBackground;