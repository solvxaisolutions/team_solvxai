import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">solvx.ai</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming your digital presence with cutting-edge web solutions. 
              We create stunning, responsive websites that drive results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Mobile Apps</li>
              <li className="text-gray-300">UI/UX Design</li>
              <li className="text-gray-300">Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-gray-300">hello@solvx.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SolvxAI. All rights reserved. Built with ❤️ by SolvxAI Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;