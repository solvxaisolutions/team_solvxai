import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiMail ,CiPhone,CiMapPin} from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
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
            <h3 className="text-2xl font-bold gradient-text">SolvxAI</h3>
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
                <FaFacebookF size={20} />
              </a>
              <a href="#" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-primary-400' 
                  : 'text-gray-500 hover:text-primary-500'
              }`}>
                <FaXTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/solvx-ai/about/" className={`transition-colors ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-primary-400' 
                  : 'text-gray-500 hover:text-primary-500'
              }`}>
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://www.instagram.com/solvx_ai/" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaInstagram size={20} />
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
              <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>E-commerce Development</li>
              <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>Mobile App Development</li>
              <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>Startup Supports</li>
              <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>Cloud Services</li>
              <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>SaaS Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-100'}`}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CiMail size={16} className="text-primary-400" />
                <span className="text-gray-300">solvxaisolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <CiPhone size={16} className="text-primary-400" />
                <span className="text-gray-300">+91 85904 43083</span>
              </div>
              <div className="flex items-center space-x-3">
                <CiMapPin size={16} className="text-primary-400" />
                <span className="text-gray-300">Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-md">
            © 2025 SolvxAI. All rights reserved. Have a &#9749; chai and chat with us.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;