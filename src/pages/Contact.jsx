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
    <div className="pt-16 min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-slide-up">
            Ready to start your project? Get in touch with us today and let's discuss 
            how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-morphism rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                Send us a Message
              </h2>
              
              {submitSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 mb-6">
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
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors ${
                          errors.name ? 'border-red-400' : 'border-gray-600'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors ${
                          errors.email ? 'border-red-400' : 'border-gray-600'
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors"
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
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-dark-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors resize-none ${
                        errors.message ? 'border-red-400' : 'border-gray-600'
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
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Send us a message 
                  and we'll respond within 24 hours.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="glass-morphism rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary-400 font-medium mb-1">
                          {item.info}
                        </p>
                        <p className="text-gray-300 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">24-hour response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">500+ satisfied clients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">Free consultation</span>
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