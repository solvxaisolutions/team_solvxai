import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/10'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold gradient-text animate-fade-in">
            solvx.ai
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const baseClass = isDarkMode
                ? 'hover:text-primary-400'
                : 'hover:text-primary-500';
              const textColor = isActive
                ? isDarkMode
                  ? 'text-primary-400'
                  : 'text-primary-500'
                : isDarkMode
                ? 'text-white'
                : 'text-gray-900';

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors duration-200 relative group ${textColor} ${baseClass}`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 ${
                      isActive || 'group-hover:w-full'
                    } ${isActive ? 'w-full' : 'w-0'}`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                isDarkMode ? 'text-white hover:text-primary-400' : 'text-gray-900 hover:text-primary-500'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden absolute top-16 left-0 w-full backdrop-blur-md border-b animate-slide-up ${
              isDarkMode ? 'bg-dark-800/95 border-white/10' : 'bg-white/95 border-gray-200'
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const baseClass = isDarkMode
                  ? 'hover:text-primary-400'
                  : 'hover:text-primary-500';
                const textColor = isActive
                  ? isDarkMode
                    ? 'text-primary-400'
                    : 'text-primary-500'
                  : isDarkMode
                  ? 'text-white'
                  : 'text-gray-900';

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block transition-colors duration-200 py-2 ${textColor} ${baseClass}`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
