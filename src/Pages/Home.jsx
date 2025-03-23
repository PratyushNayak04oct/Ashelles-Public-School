import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, BookOpen, Users, Trophy, Calendar, ChevronRight, Clock, MapPin, Download, Eye, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar.jsx' ; 
import AnimatedSection from '../components/AnimatedSection';
import ImageModal from '../components/ImageModal';
import CountUpNumber from '../components/CountUpNumber';
import Footer from '../components/Footer.jsx' ; 

// Slides for the hero section
const heroSlides = [
  {
    image: 'https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/school.webp',
    heading: 'Welcome to Ashelles Public School',
    text: 'Shaping Young Minds for a Brighter Future',
    gradient: 'from-black/30 to-black/30'
  },
  {
    image: 'https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/image1.webp',
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

const leadershipTeam = [
  {
    name: "Mr. Nayak",
    designation: "Principal",
    image: "https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/Principal.webp",
    message: "At Ashelles Public School, we believe in nurturing not just academic excellence, but developing well-rounded individuals ready to take on the world's challenges. Our commitment to providing a holistic education environment helps students discover their unique potential and excel in their chosen paths."
  },
  {
    name: "Mrs. XYZ",
    designation: "Director",
    image: "https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/Director.webp",
    message: "Our vision at Ashelles is to create future leaders who are not only academically proficient but also socially responsible and emotionally intelligent. We strive to provide an environment that encourages innovation, critical thinking, and character development."
  }
];

const galleryImages = [
  'https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/image1.webp',
  'https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/image2.webp',
  'https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/image3.webp',
  'https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/image4.webp'
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

const upcomingEvents = [
  {
    title: "Annual Science Exhibition",
    date: "March 25, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "School Auditorium",
    description: "Showcasing innovative projects from our young scientists across all grades.",
    image: "https://images.unsplash.com/photo-1564066379977-18e7f99c8a88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Academic"
  },
  {
    title: "Parent-Teacher Conference",
    date: "March 30, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Individual Classrooms",
    description: "Discussing student progress and addressing parent concerns.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Meeting"
  },
  {
    title: "Inter-School Sports Meet",
    date: "April 5-7, 2024",
    time: "8:00 AM - 5:00 PM",
    location: "School Sports Complex",
    description: "Annual sports competition featuring athletics, swimming, and team sports.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sports"
  },
  {
    title: "Cultural Festival",
    date: "April 15, 2024",
    time: "5:00 PM - 9:00 PM",
    location: "School Amphitheater",
    description: "A celebration of diversity through music, dance, and theatrical performances.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cultural"
  }
];

const quickDownloads = [
  {
    title: "Admission Form 2024-25",
    icon: "📝",
    fileSize: "2.5 MB",
    format: "PDF"
  },
  {
    title: "Holiday List 2024",
    icon: "📅",
    fileSize: "1.2 MB",
    format: "PDF"
  },
  {
    title: "Academic Calendar",
    icon: "📚",
    fileSize: "3.1 MB",
    format: "PDF"
  }
];

const thoughtOfTheDay = {
  quote: "Education is not the filling of a pail, but the lighting of a fire.",
  author: "William Butler Yeats"
};

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
                    className="text-7xl font-extrabold mb-6 gradient-stroke"
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

      {/* Leadership Messages Section */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#FCF7FF] to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Warm Welcome from our School Executive Leadership Team
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                      <div className="inline-block mt-2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm">
                        {leader.designation}
                      </div>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">
                      "{leader.message}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Introduction Section */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#FCF7FF] to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <img src="https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/plane-1.svg" alt="" className = "h-[16vh] absolute left-0"/>
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
              <div className = "absolute right-0">
                <img src="https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/plane-2.svg" alt="" className = "h-[16vh]"/>
              </div>
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

      <AnimatedSection className="py-20 bg-gradient-to-b from-[#FCF7FF] to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg text-gray-600">Stay updated with our latest events and activities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-[#FCF7FF] px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-[#FCF7FF] rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Events
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </AnimatedSection>

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

       {/* Thought of the Day Section */}
       <AnimatedSection className="py-20 bg-gradient-to-b from-[#FCF7FF] to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Quote 
              size={120} 
              className="absolute -top-10 -left-10 text-blue-100 opacity-50 transform -scale-x-100" 
            />
            <div className="text-center relative z-10">
              <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Thought of the Day
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <p className="text-3xl font-serif italic text-gray-700 mb-6">
                  "{thoughtOfTheDay.quote}"
                </p>
                <p className="text-xl text-gray-500">- {thoughtOfTheDay.author}</p>
              </motion.div>
            </div>
            <Quote 
              size={120} 
              className="absolute -bottom-10 -right-10 text-blue-100 opacity-50" 
            />
          </div>
        </div>
      </AnimatedSection>

       {/* Quick Downloads Section */}
       <AnimatedSection className="py-20 bg-gradient-to-b from-blue-50 to-[#FCF7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Quick Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickDownloads.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.fileSize} • {item.format}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-300">
                    <Eye size={18} />
                    View
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    <Download size={18} />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

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