import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { FaUserCircle, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaHeart, FaArrowLeft } from 'react-icons/fa';

const StudentDetails = () => {
  const { id } = useParams(); // Get ID from URL /students/:id
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => (fav.id.value || fav.login.uuid) === id);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulating single fetch: Fetch 20 users and find the one that matches the ID
        const response = await axios.get('https://randomuser.me/api/?results=20&seed=student-dashboard'); 
        
        // Find student by the unique ID (e.g., login.uuid or id.value)
        const foundStudent = response.data.results.find(
          (s) => (s.id.value || s.login.uuid) === id
        );

        if (foundStudent) {
          setStudent(foundStudent);
        } else {
          setError('Student not found.');
        }

      } catch (err) {
        console.error('API Fetch Error:', err);
        setError('Failed to fetch student details.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleFavoriteToggle = () => {
    if (!student) return;
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(student)); 
    }
  };
  
  if (loading) return <div className="text-center p-20 text-xl">Loading profile...</div>;
  if (error) return <div className="text-center p-20 text-red-600 font-bold">Error: {error}</div>;
  if (!student) return <div className="text-center p-20 text-gray-600">No student data available.</div>;

  // Destructure student data for easier use
  const { name, email, location, dob, picture } = student;
  const fullName = `${name.first} ${name.last}`;
  const country = location.country;
  const age = dob.age;
  const imageUrl = picture.large;

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 transition duration-500">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-8">
        
        {/* Header and Back Button */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400">{fullName}'s Profile</h2>
          <button
            onClick={() => navigate('/students')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 transition"
          >
            <FaArrowLeft className="mr-2" /> Back to Students
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={fullName} 
                className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-md"
              />
            ) : (
              <FaUserCircle className="w-48 h-48 text-gray-400" />
            )}
          </div>
          
          <div className="flex-1 space-y-4">
            <p className="flex items-center text-lg text-gray-700 dark:text-gray-300">
              <FaEnvelope className="mr-3 text-indigo-500" /> **Email:** {email}
            </p>
            <p className="flex items-center text-lg text-gray-700 dark:text-gray-300">
              <FaBirthdayCake className="mr-3 text-indigo-500" /> **Age:** {age}
            </p>
            <p className="flex items-center text-lg text-gray-700 dark:text-gray-300">
              <FaMapMarkerAlt className="mr-3 text-indigo-500" /> **Country:** {country}
            </p>

            {/* Favorite Button */}
            <button
              onClick={handleFavoriteToggle}
              className={`w-full flex justify-center items-center py-3 px-6 rounded-lg font-semibold transition duration-150 shadow-md ${
                isFavorite 
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-indigo-500 text-white hover:bg-indigo-600'
              }`}
            >
              <FaHeart className="mr-3" />
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;