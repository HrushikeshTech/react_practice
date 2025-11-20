import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentCard from '../components/StudentCard';
import { FaUserGraduate, FaSyncAlt, FaExclamationTriangle } from 'react-icons/fa';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setError(null);
        // Random User API example
        const response = await axios.get('https://randomuser.me/api/?results=15&seed=student-dashboard'); 
        setStudents(response.data.results); 
      } catch (err) {
        console.error('API Fetch Error:', err);
        setError('Failed to fetch student data. Please check the API URL.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  let content;

  if (loading) {
    content = (
      <div className="text-center p-12">
        <FaSyncAlt className="animate-spin text-5xl text-indigo-500 mx-auto mb-4" />
        <p className="text-xl text-indigo-600">Loading student data...</p>
      </div>
    );
  } else if (error) {
    content = (
      <div className="text-center p-12 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <FaExclamationTriangle className="text-3xl mx-auto mb-3" />
        <p className="font-bold">Error:</p>
        <p>{error}</p>
      </div>
    );
  } else if (students.length === 0) {
    content = (
      <div className="text-center p-12 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
        <FaUserGraduate className="text-3xl mx-auto mb-3" />
        <p className="font-bold">No Students Found</p>
        <p>The API returned an empty list.</p>
      </div>
    );
  } else {
    // Student List/Grid (using a grid layout)
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student) => (
          // Important: Use a unique key for list items! 
          <StudentCard key={student.login.uuid} student={student} /> 
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 transition duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-8 border-b pb-2">
          Students List
        </h2>
        {content}
      </div>
    </div>
  );
};

export default Students;