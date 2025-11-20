import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { FaHeart, FaUserCircle } from 'react-icons/fa';

const StudentCard = ({ student }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  
  // Use a unique property for the key/ID, e.g., 'id' or 'login.uuid' from an API
  const studentId = student.id.value || student.login.uuid; 
  const isFavorite = favorites.some((fav) => (fav.id.value || fav.login.uuid) === studentId);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(studentId));
    } else {
      // Dispatch the entire student object to be stored
      dispatch(addFavorite(student)); 
    }
  };

  // Example data structure from Random User API:
  const name = `${student.name.first} ${student.name.last}`;
  const email = student.email;
  const country = student.location.country; // Or any other relevant field

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02]">
      <div className="flex items-center space-x-4 mb-4">
        {student.picture?.medium ? (
          <img 
            src={student.picture.medium} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
          />
        ) : (
          <FaUserCircle className="w-16 h-16 text-gray-400" />
        )}
        <div>
          <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{email}</p>
        </div>
      </div>
      
      <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
        **Country:** {country}
      </p>

      <div className="flex justify-between space-x-2">
        <Link 
          to={`/students/${studentId}`}
          className="flex-1 bg-indigo-500 text-white text-center py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-150 font-semibold text-sm"
        >
          View Profile
        </Link>
        <button
          onClick={handleFavoriteToggle}
          className={`p-3 rounded-lg transition duration-150 text-sm ${
            isFavorite 
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          <FaHeart className={isFavorite ? 'text-white' : 'text-red-500'} />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;