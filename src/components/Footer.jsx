import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <footer className={`border-t ${
      isDarkMode 
        ? 'bg-dark-800 border-white/10' 
        : 'bg-gray-900 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">solvx.ai</h3>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>
              Transforming your digital presence with cutting-edge web solutions. 
              We create stunning, responsive websites that drive results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-primary-400' 
                  : 'text-gray-500 hover:text-primary-500'
              }`}>
                <Facebook size={20} />
              </a>
              <a href="#" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-primary-400' 
                  : 'text-gray-500 hover:text-primary-500'
              }`}>
                <Twitter size={20} />
              </a>
              <a href="#" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-primary-400' 
                  : 'text-gray-500 hover:text-primary-500'
              }`}>
                <Linkedin size={20} />
              </a>
              <a href="#" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-primary-400' 
                  : 'text-gray-500 hover:text-primary-500'
              }`}>
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-100'}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-primary-400' 
                  : 'text-gray-400 hover:text-primary-500'
              }`}>Home</Link></li>
              <li><Link to="/about" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-primary-400' 
                  : 'text-gray-400 hover:text-primary-500'
              }`}>About</Link></li>
              <li><Link to="/services" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-primary-400' 
                  : 'text-gray-400 hover:text-primary-500'
              }`}>Services</Link></li>
              <li><Link to="/contact" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-primary-400' 
                  : 'text-gray-400 hover:text-primary-500'
              }`}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-100'}`}>Services</h4>
            <ul className="space-y-2">
              <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>Web Development</li>
              <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>Mobile Apps</li>
              <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>UI/UX Design</li>
              <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-100'}`}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className={`${isDarkMode ? 'text-primary-400' : 'text-primary-500'}`} />
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>hello@solvx.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className={`${isDarkMode ? 'text-primary-400' : 'text-primary-500'}`} />
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className={`${isDarkMode ? 'text-primary-400' : 'text-primary-500'}`} />
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-t mt-8 pt-8 text-center ${
          isDarkMode ? 'border-white/10' : 'border-gray-700'
        }`}>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2024 SolvxAI. All rights reserved. Built with ❤️ by SolvxAI Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;