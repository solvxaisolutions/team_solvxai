import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, setSubmitting, setSubmitSuccess, resetForm } from '../store/contactSlice';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Clock,
  Users,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const dispatch = useDispatch();
  const { formData, isSubmitting, submitSuccess } = useSelector(state => state.contact);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    dispatch(setSubmitting(true));
    
    // Simulate API call
    setTimeout(() => {
      dispatch(setSubmitting(false));
      dispatch(setSubmitSuccess(true));
    }, 2000);
  };

  const handleReset = () => {
    dispatch(resetForm());
    setErrors({});
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "hello@solvx.ai",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info: "New York, NY",
      description: "Come say hello at our office"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "Digital Marketing",
    "Cloud Solutions"
  ];

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        handleReset();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <div className={`pt-16 min-h-screen ${isDarkMode ? 'bg-dark-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${isDarkMode ? 'hero-pattern' : 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-8 animate-fade-in ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-12 animate-slide-up ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to start your project? Get in touch with us today and let's discuss 
            how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-dark-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`rounded-2xl p-8 ${
              isDarkMode 
                ? 'glass-morphism' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Send us a Message
              </h2>
              
              {submitSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Message Sent Successfully!
                  </h3>
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors ${
                          isDarkMode 
                            ? `bg-dark-700 text-white placeholder-gray-400 ${errors.name ? 'border-red-400' : 'border-gray-600'}`
                            : `bg-white text-gray-900 placeholder-gray-500 ${errors.name ? 'border-red-400' : 'border-gray-300'}`
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors ${
                          isDarkMode 
                            ? `bg-dark-700 text-white placeholder-gray-400 ${errors.email ? 'border-red-400' : 'border-gray-600'}`
                            : `bg-white text-gray-900 placeholder-gray-500 ${errors.email ? 'border-red-400' : 'border-gray-300'}`
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors ${
                        isDarkMode 
                          ? 'bg-dark-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors resize-none ${
                        isDarkMode 
                          ? `bg-dark-700 text-white placeholder-gray-400 ${errors.message ? 'border-red-400' : 'border-gray-600'}`
                          : `bg-white text-gray-900 placeholder-gray-500 ${errors.message ? 'border-red-400' : 'border-gray-300'}`
                      }`}
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-bg text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Get in Touch
                </h2>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Have a project in mind? We'd love to hear about it. Send us a message 
                  and we'll respond within 24 hours.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-6 transition-all duration-300 group ${
                      isDarkMode 
                        ? 'glass-morphism hover:bg-white/10' 
                        : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary-200 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`group-hover:scale-110 transition-transform duration-300 ${
                        isDarkMode ? 'text-primary-400' : 'text-primary-500'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className={`font-semibold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {item.title}
                        </h3>
                        <p className={`font-medium mb-1 ${isDarkMode ? 'text-primary-400' : 'text-primary-500'}`}>
                          {item.info}
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className={`rounded-xl p-6 ${
                isDarkMode 
                  ? 'glass-morphism' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}>
                <h3 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className={`w-5 h-5 ${isDarkMode ? 'text-primary-400' : 'text-primary-500'}`} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>24-hour response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className={`w-5 h-5 ${isDarkMode ? 'text-primary-400' : 'text-primary-500'}`} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>500+ satisfied clients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className={`w-5 h-5 ${isDarkMode ? 'text-primary-400' : 'text-primary-500'}`} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Free consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;