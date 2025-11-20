import React from 'react';
import { FaReact, FaJs, FaHeart, FaCodeBranch } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 transition duration-500">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 space-y-6">
        <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 border-b pb-3">
          Project Overview
        </h2>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          <p>
            Welcome to the **Student Management Dashboard**, a project built to demonstrate proficiency in modern front-end development using **React** and **Redux**.
          </p>

          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-500 mt-6 flex items-center">
            <FaCodeBranch className="mr-2" /> Core Technologies
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="flex items-center"><FaReact className="mr-2 text-sky-400" /> **React & JavaScript:** For building a component-based user interface.</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-purple-600" /> **Redux Toolkit:** For centralized, predictable state management (specifically for tracking **Favorites**).</li>
            <li className="flex items-center"><FaJs className="mr-2 text-yellow-500" /> **React Router DOM:** For declarative routing and creating dynamic URLs (`/students/:id`).</li>
            <li className="flex items-center">✨ **Tailwind CSS:** For attractive, utility-first styling.</li>
          </ul>

          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-500 mt-6 flex items-center">
            <FaReact className="mr-2" /> Key Features
          </h3>
          <p>
            The dashboard covers fundamental React concepts, including **Props**, **State**, **Conditional Rendering** (Loading/Error states), **API Integration** (`useEffect` and `axios`), and advanced concepts like **Redux State Management** and **Dynamic Routing**.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;