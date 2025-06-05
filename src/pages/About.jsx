import React from 'react';
import { 
  FaRocket, 
  FaUsers, 
  FaHandshake, 
  FaChartLine, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaGlobe,
  FaAward,
  FaLightbulb,
  FaHeart
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import teamMembers from '../assets/team.js'; 

const AboutUs = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Students Placed",
      icon: FaUsers,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "500+",
      label: "Partner Companies",
      icon: FaHandshake,
      color: "from-green-500 to-green-600"
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: FaChartLine,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: FaGlobe,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We continuously evolve our platform to provide cutting-edge solutions for modern career challenges.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: FaHeart,
      title: "Passion",
      description: "We're genuinely passionate about helping students and professionals achieve their career goals.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "Building a supportive ecosystem where students, companies, and mentors thrive together.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: FaAward,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from user experience to partner relationships.",
      color: "bg-green-100 text-green-600"
    }
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                InternshipHub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Connecting ambitious students with world-class companies to build the future workforce
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that every student deserves access to meaningful career opportunities. Our platform bridges the gap between academic learning and professional experience, creating a seamless pathway for students to launch successful careers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2020, InternshipHub has revolutionized how students discover, apply for, and secure internships with leading companies worldwide. We're not just a job board – we're a comprehensive career development ecosystem.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why We Exist</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Bridge the skills gap between education and industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Democratize access to premium career opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Empower the next generation of professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Real results that speak to our commitment to student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${stat.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-white text-2xl" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <value.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex gap-3">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <FaTwitter className="text-lg" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-gray-600 transition-colors">
                      <FaEnvelope className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have launched their careers through our platform. Your dream internship is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/internships"} className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-110 duration-300 transition-transform shadow-lg">
              Find Internships
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;