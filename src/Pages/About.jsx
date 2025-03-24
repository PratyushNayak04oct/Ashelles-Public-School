import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Target, Heart, Star,Eye } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const history = {
    title: "Our Journey",
    content: `
      Founded in 1998, Ashelles Public School has been at the forefront of educational excellence for over two decades. What started as a small institution with just 100 students has grown into one of the most prestigious schools in the region, now serving over 2000 students.

      Our journey has been marked by continuous innovation in education, adoption of modern teaching methodologies, and a commitment to nurturing well-rounded individuals. Through the years, we have maintained our core values while adapting to the changing needs of education in the 21st century.
    `
  };

  const mission = {
    title: "Our Mission",
    content: "To provide quality education that nurtures intellectual curiosity, fosters personal growth, and develops responsible global citizens who are prepared to meet the challenges of tomorrow."
  };

  const vision = {
    title: "Our Vision",
    content: "To be a leading institution that sets new standards in education, creating future leaders who are academically excellent, culturally aware, and socially responsible."
  };

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Compassion",
      description: "Nurturing empathy and understanding in our community"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description: "Embracing new ideas and methods in education"
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "Best School Award 2023",
      description: "Recognized for academic excellence and innovation"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "100% Graduation Rate",
      description: "Consistent academic success over the past 5 years"
    },
    {
      icon: <Star className="w-12 h-12 text-purple-500" />,
      title: "STEM Excellence Award",
      description: "Leading institution in Science and Technology education"
    }
  ];

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-b from-[#FCF7FF] to-blue-50">

      <Navbar />

      {/* Hero Section */}
      <AnimatedSection className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Ashelles Public School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Shaping young minds and building future leaders through excellence in education
          </motion.p>
        </div>
      </AnimatedSection>

      {/* History Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{history.title}</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              {history.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Mission and Vision Section */}
      <AnimatedSection className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{mission.title}</h2>
              <p className="text-gray-600 text-lg">{mission.content}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <Eye className="w-12 h-12 text-purple-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{vision.title}</h2>
              <p className="text-gray-600 text-lg">{vision.content}</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <AnimatedSection className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex justify-center mb-6">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{achievement.title}</h3>
                <p className="text-gray-600 text-center">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default About;