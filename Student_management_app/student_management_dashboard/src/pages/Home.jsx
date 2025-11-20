import React, { useState } from 'react';
import { FaSun, FaMoon, FaQuoteLeft } from 'react-icons/fa';

// Welcome Component (Accepts Props)
const Welcome = ({ title, subtitle }) => (
  <header className="text-center py-12 bg-indigo-50 rounded-lg shadow-inner">
    <h1 className="text-5xl font-extrabold text-indigo-700 mb-3">{title}</h1>
    <p className="text-xl text-gray-600">{subtitle}</p>
  </header>
);

// Theme Switcher (Uses State and Conditional Rendering)
const ThemeSwitcher = () => {
  // true = Dark mode, false = Light mode
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode); // Applies 'dark' class to <html>
  };

  return (
    <div className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition duration-300">
      <button
        onClick={toggleTheme}
        className={`flex items-center p-3 rounded-full text-white transition-all duration-300 ${
          isDarkMode ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-indigo-600 hover:bg-indigo-700'
        }`}
      >
        {isDarkMode ? (
          <FaSun className="text-2xl" />
        ) : (
          <FaMoon className="text-2xl" />
        )}
        <span className="ml-3 font-semibold">
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </span>
      </button>
    </div>
  );
};

// Motivational Quote Component (Static JSX)
const QuoteComponent = () => (
  <div className="p-6 bg-yellow-100 dark:bg-yellow-800 rounded-xl shadow-md border-l-4 border-yellow-500">
    <blockquote className="text-lg italic text-gray-800 dark:text-gray-200">
      <FaQuoteLeft className="inline mr-2 text-yellow-500 text-xl" />
      The future belongs to those who believe in the beauty of their dreams.
    </blockquote>
    <p className="mt-3 text-right font-medium text-yellow-700 dark:text-yellow-300">- Eleanor Roosevelt</p>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 transition duration-500">
      <div className="max-w-4xl mx-auto space-y-10">
        <Welcome 
          title="🎓 Student Management Dashboard" 
          subtitle="Your central hub for intern data and favorite tracking." 
        />
        <ThemeSwitcher />
        <QuoteComponent />
      </div>
    </div>
  );
};

export default Home;