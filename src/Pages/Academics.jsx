import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, GraduationCap, FileText, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const academicSections = [
  {
    id: 'rules',
    title: 'Rules and Regulations',
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    content: `
      Our school maintains high standards of discipline and behavior. Key rules include:
      • Regular attendance and punctuality
      • Proper uniform adherence
      • Respectful behavior towards staff and peers
      • No use of mobile phones during school hours
      • Maintaining cleanliness and orderliness
      • Active participation in school activities
    `
  },
  {
    id: 'curriculum',
    title: 'Curriculum and Syllabus',
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    content: `
      Our comprehensive curriculum follows international standards:
      • Core subjects: Mathematics, Science, Languages
      • STEAM-focused learning approach
      • Project-based learning modules
      • Regular assessments and feedback
      • Extra-curricular activities integration
      • Digital learning resources
    `
  },
  {
    id: 'methodology',
    title: 'Teaching Methodology',
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    content: `
      We employ modern teaching methods:
      • Interactive learning sessions
      • Smart classroom technology
      • Hands-on experiments and activities
      • Group discussions and presentations
      • Regular workshops and seminars
      • Personalized attention to students
    `
  },
  {
    id: 'examinations',
    title: 'Examinations and Assessments',
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    content: `
      Our assessment system includes:
      • Continuous evaluation process
      • Term-end examinations
      • Project work assessment
      • Practical examinations
      • Parent-teacher meetings
      • Regular progress reports
    `
  },
  {
    id: 'calendar',
    title: 'Academic Calendar and Holiday List',
    icon: <Calendar className="w-8 h-8 text-blue-600" />,
    content: `
      Important dates for the academic year:
      • First Term: July to December
      • Second Term: January to May
      • Summer Break: May to June
      • Winter Break: December
      • Major festivals and national holidays
      • Examination schedules
    `
  },
  {
    id: 'timings',
    title: 'School Timings and Uniforms',
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    content: `
      School Schedule and Dress Code:
      • School Hours: 8:00 AM to 2:30 PM
      • Assembly: 8:00 AM to 8:30 AM
      • Break Times: 10:30 AM and 12:30 PM
      • Regular Uniform: Navy blue pants, white shirt
      • Sports Uniform: Track suit on PT days
      • Winter Uniform: Navy blue sweater/blazer
    `
  }
];

const Academics = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-b from-[#FCF7FF] to-blue-50">

        <Navbar />

      {/* Quick Links Section */}
      <AnimatedSection className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Academics
          </h1>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {academicSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                >
                  {section.icon}
                  <span className="text-gray-700 hover:text-blue-600">{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Sections */}
      {academicSections.map((section, index) => (
        <AnimatedSection
          key={section.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
        >
          <div id={section.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                {section.icon}
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                {section.content.split('\n').map((line, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      ))}
      <Footer />
    </div>
  );
};

export default Academics;