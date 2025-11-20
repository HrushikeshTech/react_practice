import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaGraduationCap, FaHeart } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Students', path: '/students' },
  { name: 'Favorites', path: '/favorites' },
  { name: 'About', path: '/about' },
];

const Navbar = ({ logoText }) => {
  const location = useLocation();
  // Selector for the favorites count
  const favoriteCount = useSelector((state) => state.favorites.favorites.length);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Text */}
          <Link to="/" className="flex items-center text-2xl font-bold text-indigo-600">
            <FaGraduationCap className="mr-2 text-3xl" />
            {logoText}
          </Link>

          {/* Nav Links */}
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
                    isActive
                      ? 'bg-indigo-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                  {link.name === 'Favorites' && favoriteCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                      {favoriteCount}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;