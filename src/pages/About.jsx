import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  Heart, 
  Zap, 
  Globe,
  ArrowRight,
  Star
} from 'lucide-react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, { threshold: 0.1 });

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Quality",
      description: "We're committed to delivering exceptional quality in every project we undertake."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in working closely with our clients as partners to achieve success."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "We build fast, efficient, and scalable solutions that perform under pressure."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Visionary leader with 10+ years in tech industry"
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Full-stack expert specializing in React and Node.js"
    },
    {
      name: "Mike Rodriguez",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Creative designer with passion for user experience"
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Ensuring projects are delivered on time and budget"
    }
  ];

  const achievements = [
    { icon: <Award />, title: "Industry Awards", count: "15+" },
    { icon: <Users />, title: "Happy Clients", count: "500+" },
    { icon: <Globe />, title: "Countries Served", count: "25+" },
    { icon: <Star />, title: "5-Star Reviews", count: "450+" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            About <span className="gradient-text">SolvxAI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-slide-up">
            We're a passionate team of developers, designers, and digital strategists 
            dedicated to transforming your ideas into powerful digital experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark-800" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2019, SolvxAI began as a small team of passionate developers 
                  who believed that every business deserves a powerful digital presence. 
                  What started as a vision to democratize web development has grown into 
                  a full-service digital agency.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses across 25 countries 
                  achieve their digital goals. From startups to enterprise companies, we've 
                  been the trusted partner in their digital transformation journey.
                </p>
                <p>
                  Our mission remains the same: to create exceptional digital experiences 
                  that drive real business results. We combine creativity with technology, 
                  strategy with execution, and passion with precision.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team working"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-morphism rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300">
              The talented individuals behind SolvxAI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-morphism rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary-400/30 group-hover:border-primary-400/50 transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-400 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that speak for our success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(achievement.icon, { size: 40 })}
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {achievement.count}
                </div>
                <div className="text-gray-300 font-medium">
                  {achievement.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
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
    </div>
  );
};

export default About;