import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, clearFavorites } from '../redux/favoritesSlice'; 
import { Link } from 'react-router-dom';
import { FaHeartBroken, FaTrash, FaUserGraduate } from 'react-icons/fa';

// Helper function to get the unique ID consistently (Good practice!)
const getStudentId = (student) => student.id.value || student.login.uuid;

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  // Function to remove a single student
  const handleRemove = (id) => {
    dispatch(removeFavorite(id)); 
  };

  // Function to remove ALL students (Clear All functionality)
  const handleClear = () => {
    dispatch(clearFavorites());
  };
  
  const totalFavorites = favorites.length;

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 transition duration-500">
      <div className="max-w-5xl mx-auto">
        
        {/* === HEADER & CLEAR ALL BUTTON (Functionality confirmed) === */}
        <div className="flex justify-between items-center mb-8 border-b pb-2">
          <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400">
            ⭐ My Favorite Students 
            <span className="ml-3 text-2xl text-red-500">({totalFavorites})</span>
          </h2>
          
          {/* Conditional Rendering for Clear All Button */}
          {totalFavorites > 0 && (
            <button
              onClick={handleClear} // This executes the clearFavorites Redux action
              className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition font-semibold"
            >
              <FaTrash className="mr-2" /> Clear All
            </button>
          )}
        </div>
        {/* ========================================================== */}

        {totalFavorites === 0 ? (
          // Empty State JSX
           <div className="text-center p-12 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
            <FaHeartBroken className="text-6xl text-red-400 mx-auto mb-4" />
            <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              You haven't added any favorites yet.
            </p>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
              Go to the <Link to="/students" className="text-indigo-600 hover:underline">Students page</Link> to start adding!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {favorites.map((student) => {
              // Retrieve the EXACT unique ID used for adding/tracking
              const studentId = getStudentId(student); 
              const name = `${student.name.first} ${student.name.last}`;

              return (
                <div 
                  key={studentId} 
                  className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <FaUserGraduate className="text-indigo-500 text-2xl" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{student.email}</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Link 
                        to={`/students/${studentId}`}
                        className="bg-indigo-100 text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-200 transition text-sm font-medium"
                    >
                        View Profile
                    </Link>
                    <button
                      onClick={() => handleRemove(studentId)}
                      className="bg-red-100 text-red-600 py-2 px-4 rounded-md hover:bg-red-200 transition text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;