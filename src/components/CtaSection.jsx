import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    return (
        <section className={`py-20 ${isDarkMode ? 'bg-dark-800' : 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Work With Us?
          </h2>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's collaborate and create something amazing together
          </p>
          <Link
            to="/contact"
            className="gradient-bg text-white px-12 py-4 rounded-full font-semibold inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary-500/25"
          >
            <span>Get In Touch</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    );
}

export default CtaSection;
