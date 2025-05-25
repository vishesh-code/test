// "use client"


// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Header from '../components/layout/Header';
// import Footer from '../components/layout/Footer';
// import HeroSection from '../components/home/HeroSection';
// import FeatureSection from '../components/home/FeatureSection';
// import CTASection from '../components/home/CTASection';
// import TestimonialsSection from '../components/home/TestimonialsSection'

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Head>
//         <title>Forever Together | Wedding Planning Made Easy</title>
//         <meta name="description" content="Plan your perfect wedding day with our easy-to-use tools" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Header />
      
//       <main className="flex-grow">
//         <HeroSection />
//         <FeatureSection />
//         <CTASection />
//         <TestimonialsSection />
//       </main>

//       <Footer />
//     </div>
//   );
// }





"use client"


import React, { useState, useEffect } from 'react';
import { Heart, Search, Star, Users, Shield, MapPin, Briefcase, GraduationCap, Phone, Mail, Filter, X, ChevronDown, Calendar, Gift } from 'lucide-react';

const IndianMatrimonyWebsite = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchFilters, setShowSearchFilters] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      profession: "Software Engineer",
      location: "Mumbai, Maharashtra",
      education: "M.Tech Computer Science",
      images: ["https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop&crop=face"],
      religion: "Hindu",
      caste: "Brahmin",
      height: "5'4\"",
      languages: ["Hindi", "English", "Marathi"],
      interests: ["Reading", "Travel", "Cooking", "Music"],
      verified: true
    },
    {
      id: 2,
      name: "Rahul Patel",
      age: 29,
      profession: "Business Analyst",
      location: "Ahmedabad, Gujarat",
      education: "MBA Finance",
      images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"],
      religion: "Hindu",
      caste: "Patel",
      height: "5'9\"",
      languages: ["Gujarati", "Hindi", "English"],
      interests: ["Cricket", "Movies", "Technology", "Travel"],
      verified: true
    },
    {
      id: 3,
      name: "Ananya Singh",
      age: 24,
      profession: "Doctor",
      location: "Delhi, Delhi",
      education: "MBBS",
      images: ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop&crop=face"],
      religion: "Hindu",
      caste: "Rajput",
      height: "5'6\"",
      languages: ["Hindi", "English", "Punjabi"],
      interests: ["Medicine", "Yoga", "Photography", "Dancing"],
      verified: true
    },
    {
      id: 4,
      name: "Arjun Reddy",
      age: 31,
      profession: "Chartered Accountant",
      location: "Hyderabad, Telangana",
      education: "CA, B.Com",
      images: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face"],
      religion: "Hindu",
      caste: "Reddy",
      height: "5'10\"",
      languages: ["Telugu", "Hindi", "English"],
      interests: ["Finance", "Fitness", "Movies", "Food"],
      verified: true
    }
  ];

  const testimonials = [
    {
      name: "Rajesh & Meera",
      text: "We found each other through this platform and got married last year. Thank you for helping us find our perfect match!",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Amit & Kavya",
      text: "The detailed profiles and verification system helped us connect with genuine people. Highly recommended!",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const ProfileCard = ({ profile }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
      <div className="relative">
        <img 
          src={profile.images[0]} 
          alt={profile.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          {profile.verified && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </div>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black bg-opacity-50 text-white p-3 rounded-lg backdrop-blur-sm">
            <h3 className="font-bold text-lg">{profile.name}</h3>
            <p className="text-sm opacity-90">{profile.age} years • {profile.height}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-sm">{profile.profession}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <GraduationCap className="w-4 h-4 text-orange-500" />
            <span className="text-sm">{profile.education}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="text-sm">{profile.location}</span>
          </div>
        </div>
        
        <div className="mt-4 flex gap-2">
          <button 
            onClick={() => setSelectedProfile(profile)}
            className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium"
          >
            View Profile
          </button>
          <button className="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const ProfileModal = ({ profile, onClose }) => {
    if (!profile) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={profile.images[0]} 
              alt={profile.name}
              className="w-full h-80 object-cover rounded-t-2xl"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
              {profile.verified && (
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  Verified
                </div>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-orange-600 border-b border-orange-200 pb-2">Basic Details</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Age:</span> {profile.age} years</p>
                  <p><span className="font-medium">Height:</span> {profile.height}</p>
                  <p><span className="font-medium">Religion:</span> {profile.religion}</p>
                  <p><span className="font-medium">Caste:</span> {profile.caste}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-orange-600 border-b border-orange-200 pb-2">Professional Details</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Profession:</span> {profile.profession}</p>
                  <p><span className="font-medium">Education:</span> {profile.education}</p>
                  <p><span className="font-medium">Location:</span> {profile.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-lg text-orange-600 border-b border-orange-200 pb-2 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang, index) => (
                  <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-lg text-orange-600 border-b border-orange-200 pb-2 mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <span key={index} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-6 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Express Interest
              </button>
              <button className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                ShaadiConnect
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              {['home', 'search', 'success-stories', 'about'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize font-medium transition-colors ${
                    activeTab === tab 
                      ? 'text-orange-600 border-b-2 border-orange-600' 
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  {tab.replace('-', ' ')}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium">
                Join Now
              </button>
              <button className="text-gray-600 hover:text-orange-600 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Find Your Perfect
                <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent block">
                  Life Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                India's most trusted matrimony platform connecting hearts across cultures and traditions
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Search by name, profession, location..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <button 
                  onClick={() => setShowSearchFilters(!showSearchFilters)}
                  className="bg-white border border-gray-200 px-6 py-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2 font-medium"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium">
                  Search
                </button>
              </div>

              {/* Search Filters */}
              {showSearchFilters && (
                <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto mb-12">
                  <div className="grid md:grid-cols-3 gap-4">
                    <select className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Age Range</option>
                      <option>18-25</option>
                      <option>26-30</option>
                      <option>31-35</option>
                      <option>36+</option>
                    </select>
                    <select className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Religion</option>
                      <option>Hindu</option>
                      <option>Muslim</option>
                      <option>Christian</option>
                      <option>Sikh</option>
                    </select>
                    <select className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Location</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                      <option>Chennai</option>
                    </select>
                  </div>
                </div>
              )}
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">10M+</h3>
                  <p className="text-gray-600">Registered Users</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">50K+</h3>
                  <p className="text-gray-600">Success Stories</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">100%</h3>
                  <p className="text-gray-600">Verified Profiles</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Profiles */}
      {(activeTab === 'home' || activeTab === 'search') && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {activeTab === 'search' ? 'Search Results' : 'Featured Profiles'}
              </h2>
              <p className="text-xl text-gray-600">
                {activeTab === 'search' ? 'Browse through verified profiles' : 'Discover your perfect match from our curated selection'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium">
                View More Profiles
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      {(activeTab === 'home' || activeTab === 'success-stories') && (
        <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">Real couples, real love stories</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeTab === 'about' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">About ShaadiConnect</h2>
                <p className="text-xl text-gray-600">Bringing families together with trust and tradition</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    We believe in the power of meaningful relationships and the beauty of Indian traditions. 
                    Our platform is designed to help you find your life partner while respecting cultural 
                    values and family traditions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">100% Verified Profiles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">Personalized Matchmaking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">Privacy & Security</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl p-8">
                    <img 
                      src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=400&fit=crop&crop=faces"
                      alt="Happy Couple"
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold">ShaadiConnect</h3>
              </div>
              <p className="text-gray-400">
                India's most trusted matrimony platform connecting hearts across cultures.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Search Profiles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help & Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Premium Membership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Horoscope Matching</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wedding Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Relationship Advice</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@shaadiconnect.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShaadiConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Profile Modal */}
      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </div>
  );
};

export default IndianMatrimonyWebsite;