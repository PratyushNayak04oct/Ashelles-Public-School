import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, BookOpen, Users, Trophy, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar.jsx' ; 
import AnimatedSection from '../components/AnimatedSection';
import ImageModal from '../components/ImageModal';
import CountUpNumber from '../components/CountUpNumber';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer.jsx' ; 

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    heading: 'Welcome to Ashelles Public School',
    text: 'Shaping Young Minds for a Brighter Future',
    gradient: 'from-black/30 to-black/30'
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    heading: 'Excellence in Education',
    text: 'Nurturing Talent, Fostering Growth',
    gradient: 'from-black/30 to-black/30'
  },
  {
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    heading: 'State-of-the-Art Facilities',
    text: 'Creating the Perfect Learning Environment',
    gradient: 'from-black/30 to-black/30'
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Parent',
    text: 'The dedication of teachers at Ashelles is remarkable. My child has grown tremendously both academically and personally.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Alumni',
    text: 'The years I spent at Ashelles shaped my future. The school\'s focus on holistic development gave me a strong foundation.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Parent',
    text: 'The school\'s commitment to excellence and personal attention to each student makes it truly special.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 z-50">
          <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].gradient}`} />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-[#FCF7FF] max-w-4xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <motion.h1
                    className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200"
                  >
                    {heroSlides[currentSlide].heading}
                  </motion.h1>
                  <motion.p
                    className="text-3xl mb-8 text-[#FCF7FF]/90"
                  >
                    {heroSlides[currentSlide].text}
                  </motion.p>
                  <motion.div
                    className="flex justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <Link 
                      to="/academics" 
                      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Explore Academics
                    </Link>
                    <Link 
                      to="/about" 
                      className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30 group"
        >
          <ArrowLeft size={24} className="text-[#FCF7FF] group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30 group"
        >
          <ArrowRight size={24} className="text-[#FCF7FF] group-hover:scale-110 transition-transform" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Introduction Section */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#FCF7FF] to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Legacy of Excellence</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-600">
              <p className="mb-6">
                Founded in 1998, Ashelles Public School has been at the forefront of educational 
                innovation for over two decades. Our institution stands as a beacon of academic 
                excellence, combining traditional values with modern teaching methodologies.
              </p>
              <p>
                We believe in nurturing not just academic excellence, but developing well-rounded 
                individuals ready to take on the world's challenges. Our comprehensive approach 
                to education ensures that every student discovers their unique potential and 
                excels in their chosen path.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-[#FCF7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring" }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <BookOpen size={40} className="mx-auto mb-4" />
              <h3 className="text-4xl font-bold">
                <CountUpNumber end={25} duration={2} />+
              </h3>
              <p>Years of Excellence</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring" }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <Users size={40} className="mx-auto mb-4" />
              <h3 className="text-4xl font-bold">
                <CountUpNumber end={2000} duration={2} />+
              </h3>
              <p>Students</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring" }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <Trophy size={40} className="mx-auto mb-4" />
              <h3 className="text-4xl font-bold">
                <CountUpNumber end={100} duration={2} />+
              </h3>
              <p>Awards Won</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring" }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <Calendar size={40} className="mx-auto mb-4" />
              <h3 className="text-4xl font-bold">
                <CountUpNumber end={50} duration={2} />+
              </h3>
              <p>Annual Events</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Voices of Trust Section */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-blue-50 to-[#FCF7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Voices of Trust</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-4 border-blue-100"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-lg">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#FCF7FF] to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Image Gallery</h2>
            <Link 
              to="/gallery" 
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-[#FCF7FF] hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              View All <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer overflow-hidden rounded-2xl shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Video Section */}
      <VideoSection />

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            imageUrl={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
      <div className = "mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;