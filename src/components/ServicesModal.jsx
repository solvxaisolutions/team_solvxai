import React, { useRef, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesModal = ({ isOpen, onClose, service, isDarkMode }) => {
  const modalRef = useRef();
  const contentRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  // Extended service details
  const serviceDetails = {
    "Web Development": {
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Django"],
      deliverables: ["Fully responsive website", "Admin dashboard", "API integration", "SEO optimization", "Performance optimization", "Accessibility compliance", "Cross-browser testing", "Analytics integration"],
      timeline: "4-8 weeks",
      benefits: [
        "Increased online presence",
        "Improved user engagement",
        "Higher conversion rates",
        "Better search engine visibility"
      ]
    },
    "E-commerce Development": {
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Square"],
      deliverables: ["Product catalog", "Shopping cart", "Payment processing", "Order management", "Inventory tracking", "Customer accounts", "Shipping integration", "Tax calculation"],
      timeline: "6-10 weeks",
      benefits: [
        "24/7 online store availability",
        "Expanded customer reach",
        "Automated sales processes",
        "Detailed sales analytics"
      ]
    },
    "Mobile App Development": {
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      deliverables: ["iOS and Android apps", "App store deployment", "Push notifications", "Offline support", "User authentication", "In-app purchases", "Social media integration", "Performance monitoring"],
      timeline: "8-12 weeks",
      benefits: [
        "Direct customer engagement",
        "Increased brand loyalty",
        "Mobile-optimized experience",
        "Offline functionality"
      ]
    },
    "Startup Supports": {
      technologies: ["Lean Canvas", "Figma", "React", "Node.js", "MongoDB"],
      deliverables: ["Business model validation", "MVP development", "Investor pitch deck", "User testing", "Market research", "Competitor analysis", "Growth strategy", "Funding roadmap"],
      timeline: "Varies by needs",
      benefits: [
        "Reduced time to market",
        "Validated product-market fit",
        "Investor-ready materials",
        "Clear growth strategy"
      ]
    },
    "Cloud Services": {
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
      deliverables: ["Cloud architecture design", "CI/CD pipeline", "Auto-scaling setup", "Monitoring alerts", "Disaster recovery", "Security hardening", "Cost optimization", "Performance tuning"],
      timeline: "2-4 weeks setup",
      benefits: [
        "Improved scalability",
        "Reduced infrastructure costs",
        "Higher availability",
        "Better security"
      ]
    },
    "SaaS Development": {
      technologies: ["Microservices", "OAuth", "Stripe", "PostgreSQL", "Redis"],
      deliverables: ["Multi-tenant architecture", "Subscription billing", "Admin dashboard", "User management", "API documentation", "Usage analytics", "Role-based access", "Automated emails"],
      timeline: "12-16 weeks",
      benefits: [
        "Recurring revenue model",
        "Scalable infrastructure",
        "Centralized management",
        "Detailed usage insights"
      ]
    }
  };

  const details = serviceDetails[service.title] || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div 
        ref={modalRef}
        className={`relative flex flex-col w-full max-w-3xl h-[80vh] rounded-2xl overflow-hidden ${
          isDarkMode ? 'bg-dark-800' : 'bg-white'
        }`}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b ${
          isDarkMode ? 'border-white/10' : 'border-gray-200'
        }`}>
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <div className={`p-3 rounded-lg mr-4 ${
                isDarkMode ? 'bg-white/10' : 'bg-primary-100'
              }`}>
                {React.cloneElement(service.icon, { 
                  className: `w-8 h-8 ${isDarkMode ? 'text-primary-400' : 'text-primary-600'}`
                })}
              </div>
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h2>
                <p className={`mt-1 ${isDarkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                  {service.price}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full ${
                isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'
              }`}
            >
              <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div 
          ref={contentRef}
          className="flex-1 overflow-y-auto p-6"
        >
          <div className="space-y-8">
            {/* Service Overview */}
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Service Overview
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className={`flex items-start p-3 rounded-lg ${
                      isDarkMode ? 'bg-white/5' : 'bg-gray-50'
                    }`}
                  >
                    <Check 
                      size={16} 
                      className={`mt-0.5 mr-2 flex-shrink-0 ${
                        isDarkMode ? 'text-primary-400' : 'text-primary-600'
                      }`} 
                    />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            {details.technologies && (
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        isDarkMode 
                          ? 'bg-white/10 text-primary-300' 
                          : 'bg-primary-100 text-primary-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Deliverables */}
            {details.deliverables && (
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  What You'll Get
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {details.deliverables.map((item, idx) => (
                    <li 
                      key={idx}
                      className={`flex items-start p-3 rounded-lg ${
                        isDarkMode ? 'bg-white/5' : 'bg-gray-50'
                      }`}
                    >
                      <Check 
                        size={16} 
                        className={`mt-0.5 mr-2 flex-shrink-0 ${
                          isDarkMode ? 'text-primary-400' : 'text-primary-600'
                        }`} 
                      />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {details.benefits && (
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Business Benefits
                </h3>
                <ul className="space-y-2">
                  {details.benefits.map((benefit, idx) => (
                    <li 
                      key={idx}
                      className={`flex items-start ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <span className="inline-block mr-2 text-emerald-500">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Timeline */}
            {details.timeline && (
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Typical Timeline
                </h3>
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-white/5 text-primary-300' : 'bg-primary-50 text-primary-800'
                }`}>
                  <div className="font-medium">{details.timeline}</div>
                  <p className={`mt-1 text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-primary-600'
                  }`}>
                    (Actual timeline may vary based on project complexity)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`p-4 border-t ${
          isDarkMode ? 'border-white/10 bg-dark-800' : 'border-gray-200 bg-white'
        }`}>
          <Link
            to="/contact"
            className={`block w-full px-6 py-3 rounded-lg font-semibold text-center transition-colors ${
              isDarkMode 
                ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                : 'gradient-bg text-white hover:opacity-90'
            }`}
          >
            Get Started with {service.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;