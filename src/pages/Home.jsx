import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Bot from '../splineComponet/Bot';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Users, 
  Award, 
  Zap,
  Star,
  CheckCircle,
  Globe,
  Shield,
  Rocket,
  Target,
  Brain,
  Database,
  Cloud,
  Search,
  Play,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices for optimal performance."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive engagement."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence and reach your audience."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions to automate and optimize your business."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications."
    }
  ];

  const stats = [
    { icon: <Users />, number: "500+", label: "Happy Clients" },
    { icon: <Award />, number: "200+", label: "Projects Completed" },
    { icon: <Zap />, number: "99%", label: "Client Satisfaction" },
    { icon: <TrendingUp />, number: "5+", label: "Years Experience" }
  ];

  const features = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality. We deliver projects on schedule."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security measures to protect your data and user information."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Goal-Oriented",
      description: "Every project is designed with your business objectives and ROI in mind."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and multilingual capabilities."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "SolvxAI transformed our digital presence completely. Their team delivered beyond our expectations with exceptional quality and professionalism.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Working with SolvxAI was a game-changer for our startup. They built us a scalable platform that grows with our business needs.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The mobile app they developed for us increased our user engagement by 300%. Absolutely incredible results and ongoing support.",
      rating: 5
    }
  ];

 const trustedPartners = [
  { name: "Instagram", url: "https://www.instagram.com/solvx_ai/" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Twitter", url: "https://www.twitter.com" },
  { name: "LinkedIn", url: "https://www.linkedin.com" },
];


  const teamAvatars = [
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1",
    "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1"
  ];

  return (
    <div className="scroll-smooth">
      {/* Modern Hero Section */}
      <section className={`min-h-screen flex items-center justify-center pt-16 relative overflow-hidden ${
        isDarkMode ? 'hero-pattern' : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
            isDarkMode ? 'bg-primary-500/10' : 'bg-primary-500/20'
          }`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow ${
            isDarkMode ? 'bg-secondary-500/10' : 'bg-secondary-500/20'
          }`} style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={heroRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Trust Badge */}
              <div className={`inline-flex items-center px-4 py-2 rounded-full mb-8 animate-fade-in ${
                isDarkMode ? 'glass-morphism' : 'bg-white/80 backdrop-blur-sm border border-gray-200'
              }`}>
                <div className="flex -space-x-2 mr-3">
                  {teamAvatars.slice(0, 3).map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt="Team member"
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Founders who code &#128640;
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in leading-tight">
                <span className={`block mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Build Smart
                </span>
                <span className={`block mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Launch Fast
                </span>
                <span className="gradient-text block">
                  Fueling Startups
                </span>
              </h1>
              
              <p className={`text-xl mb-8 max-w-2xl leading-relaxed animate-slide-up ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We build startups and businesses to design scalable digital solutions and e-commerce platforms that drive growth,
                 boost efficiency, and keep you ahead of the curve.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
                <Link
                  to="/contact"
                  className="gradient-bg text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-500/25 group"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className={`px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:border-white/50'
                    : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'
                }`}>
                  <Play size={20} />
                  <span>About Us</span>
                </button>
              </div>

              {/* Trusted Partners */}
              <div className="animate-slide-up flex flex-wrap gap-14">
                {/* <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Contact Us
                </p> */}
                 <div className="flex flex-wrap gap-6">
         {trustedPartners.slice(0, 4).map((partner, index) => (
    <a
      key={index}
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-lg font-semibold transition-colors ${
        isDarkMode 
          ? 'text-gray-400 hover:text-primary-400' 
          : 'text-gray-500 hover:text-primary-500'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {partner.name}
    </a>
  ))}
</div>

              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-slide-up hidden md:block">
              <div className="relative">
                {/* <img
                  src="https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                /> */}
                <div className='w-[700px] h-[600px] '>
                  <Bot/>
                </div>
                

                {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-2xl"></div> */}
                
                {/* Floating Stats Card */}
                <div className={`absolute -bottom-6 -right-28 p-6 rounded-2xl shadow-xl animate-float ${
                  isDarkMode ? 'glass-morphism' : 'bg-white border border-gray-200'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold gradient-text">500+</div>
                    <div>
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Happy Clients
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Worldwide
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Badge */}
                <div className={`absolute top-6 left-14 p-4 rounded-full shadow-xl animate-bounce-slow ${
                  isDarkMode ? 'glass-morphism' : 'bg-white border border-gray-200'
                }`}>
                  <Award className="w-8 h-8 text-primary-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-dark-800' : 'bg-white'}`} ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 group hover:scale-105 hover:shadow-xl ${
                  isDarkMode 
                    ? 'glass-morphism hover:bg-white/10' 
                    : 'bg-gray-50 hover:bg-white border border-gray-200 hover:border-primary-200 hover:shadow-primary-100/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-500'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-dark-900' : 'bg-gray-50'}`} ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Choose <span className="gradient-text">SolvxAI</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-500'
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     {/* { <section className={`py-20 ${isDarkMode ? 'bg-dark-800' : 'bg-white'}`} ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 group ${
                  isDarkMode 
                    ? 'glass-morphism hover:bg-white/10' 
                    : 'bg-gray-50 hover:bg-white border border-gray-200 hover:border-primary-200 hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`mb-6 leading-relaxed italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>} */}

      {/* CTA Section */}
      <section className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-dark-900' : 'bg-gray-50'}`}>
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-full h-full ${
            isDarkMode 
              ? 'bg-gradient-to-r from-primary-500/10 to-secondary-500/10' 
              : 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20'
          }`}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className={`text-3xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
           Launch Your Vision with 
            <span className="gradient-text block">SolvX AI Solutions</span>
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We’re a startup building powerful digital solutions to help businesses grow. From websites to custom software,
             we turn your ideas into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="gradient-bg text-white px-12 py-4 rounded-full font-semibold inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary-500/25 group"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className={`px-12 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm ${
                isDarkMode 
                  ? 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                  : 'border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400'
              }`}
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;