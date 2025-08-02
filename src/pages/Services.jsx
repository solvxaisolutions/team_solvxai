import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Globe, 
  ShoppingCart, 
  Database, 
  Shield,
  ArrowRight,
  Check
} from 'lucide-react';

const Services = () => {
  const servicesRef = useRef(null);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, { threshold: 0.1 });

    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

  const mainServices = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React & Vue.js", "Node.js Backend", "Responsive Design", "SEO Optimization"],
      price: "Starting at $1,999"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native Development", "App Store Deployment"],
      price: "Starting at $4,999"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,499"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Full-Stack Solutions",
      description: "Complete web solutions from frontend to backend and database",
      features: ["Database Design", "API Development", "Cloud Deployment", "Maintenance"],
      price: "Starting at $3,999"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Development",
      description: "Powerful online stores with payment integration and inventory management",
      features: ["Payment Gateway", "Inventory System", "Admin Dashboard", "Analytics"],
      price: "Starting at $2,999"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence and reach",
      features: ["SEO Strategy", "Content Marketing", "Social Media", "Analytics"],
      price: "Starting at $999/month"
    }
  ];

  const additionalServices = [
    { icon: <Database />, title: "Database Management", description: "Efficient data storage and retrieval solutions" },
    { icon: <Shield />, title: "Security Services", description: "Protect your digital assets with advanced security" },
    { icon: <Globe />, title: "Cloud Solutions", description: "Scalable cloud infrastructure and deployment" }
  ];

  return (
    <div className={`pt-16 min-h-screen ${isDarkMode ? 'bg-dark-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className={`py-20 ${isDarkMode ? 'hero-pattern' : 'light-hero-pattern'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-8 animate-fade-in ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-12 animate-slide-up ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Comprehensive digital solutions tailored to your business needs. 
            From concept to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className={`py-20 ${isDarkMode ? 'bg-dark-800' : 'bg-white'}`} ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 group hover:scale-105 ${
                  isDarkMode 
                    ? 'glass-morphism hover:bg-white/10' 
                    : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary-200 hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-500'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <Check size={16} className={`mr-2 ${isDarkMode ? 'text-primary-400' : 'text-primary-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`border-t pt-6 ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="text-lg font-semibold gradient-text mb-4">
                    {service.price}
                  </div>
                  <Link
                    to="/contact"
                    className="w-full gradient-bg text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className={`py-20 ${isDarkMode ? 'bg-dark-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Additional Services
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Complementary services to enhance your digital ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 text-center transition-all duration-300 group ${
                  isDarkMode 
                    ? 'glass-morphism hover:bg-white/10' 
                    : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary-200 hover:shadow-lg'
                }`}
              >
                <div className={`mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-500'
                }`}>
                  {React.cloneElement(service.icon, { size: 40 })}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-dark-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Process
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A streamlined approach to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Planning", description: "Strategic planning and architecture" },
              { step: "03", title: "Development", description: "Building with precision and care" },
              { step: "04", title: "Launch", description: "Deployment and ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-dark-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Get Started?
          </h2>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's discuss your project and see how we can help bring your vision to life
          </p>
          <Link
            to="/contact"
            className="gradient-bg text-white px-12 py-4 rounded-full font-semibold inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary-500/25"
          >
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;