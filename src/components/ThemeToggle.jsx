import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`relative inline-flex items-center justify-center w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
        isDarkMode ? 'bg-dark-700' : 'bg-gray-200'
      }`}
    >
      <span
        className={`absolute left-1 inline-block w-4 h-4 transform rounded-full transition-transform duration-300 ${
          isDarkMode ? 'translate-x-0 bg-primary-400' : 'translate-x-6 bg-white'
        }`}
      />
      <Sun className={`absolute left-1 w-3 h-3 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100 text-yellow-500'}`} />
      <Moon className={`absolute right-1 w-3 h-3 transition-opacity duration-300 ${isDarkMode ? 'opacity-100 text-primary-400' : 'opacity-0'}`} />
    </button>
  );
};

export default ThemeToggle;