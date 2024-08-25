import React, { useState, useEffect } from 'react';

const GradientBackground = ({ children }) => {
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

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.2) 0%, rgba(16, 185, 129, 0.2) 50%, rgba(249, 115, 22, 0.2) 100%)`,
    transition: 'background 0.3s ease',
  };

  return (
    <div className="min-h-screen bg-gray-100" style={gradientStyle}>
      {children}
    </div>
  );
};

export default GradientBackground;