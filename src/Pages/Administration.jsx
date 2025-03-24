import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, BookOpen, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const administrationSections = [
  {
    id: 'principal',
    title: "Principal's Message",
    icon: <User className="w-8 h-8 text-blue-600" />,
    content: {
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "Dr. Sarah Anderson",
      message: `
        Dear Parents and Students,

        Welcome to Ashelles Public School, where excellence meets innovation in education. Our mission is to nurture young minds and help them realize their full potential. We believe in providing a holistic learning environment that encourages critical thinking, creativity, and character development.

        Our dedicated team of educators works tirelessly to ensure that each student receives personalized attention and guidance. We focus not just on academic excellence, but also on developing well-rounded individuals who are ready to face the challenges of tomorrow.

        Together, let's embark on this exciting journey of learning and growth.

        Warm regards,
        Dr. Sarah Anderson
        Principal
      `
    }
  },
  {
    id: 'departments',
    title: 'Subjects and Departments',
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    content: {
      departments: [
        {
          name: 'Science Department',
          subjects: ['Physics', 'Chemistry', 'Biology'],
          description: 'State-of-the-art laboratories and experienced faculty members'
        },
        {
          name: 'Mathematics Department',
          subjects: ['Algebra', 'Geometry', 'Calculus'],
          description: 'Focus on problem-solving and analytical thinking'
        },
        {
          name: 'Languages Department',
          subjects: ['English', 'Hindi', 'French'],
          description: 'Emphasis on communication and literature appreciation'
        },
        {
          name: 'Social Sciences Department',
          subjects: ['History', 'Geography', 'Civics'],
          description: 'Understanding our world and society'
        },
        {
          name: 'Arts and Music Department',
          subjects: ['Visual Arts', 'Music', 'Dance'],
          description: 'Nurturing creativity and artistic expression'
        }
      ]
    }
  },
  {
    id: 'faculty',
    title: 'Faculty and Staff',
    icon: <Users className="w-8 h-8 text-blue-600" />,
    content: {
      teams: [
        {
          category: 'Senior Faculty',
          members: [
            {
              name: 'Dr. Michael Roberts',
              position: 'Head of Science Department',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
              experience: '15+ years'
            },
            {
              name: 'Ms. Emily Chen',
              position: 'Head of Mathematics Department',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
              experience: '12+ years'
            },
            {
              name: 'Mr. David Wilson',
              position: 'Head of Languages Department',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
              experience: '10+ years'
            }
          ]
        },
        {
          category: 'Administrative Staff',
          members: [
            {
              name: 'Mrs. Sarah Thompson',
              position: 'Administrative Officer',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
              experience: '8+ years'
            },
            {
              name: 'Mr. John Martinez',
              position: 'Student Affairs Coordinator',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
              experience: '6+ years'
            }
          ]
        }
      ]
    }
  }
];

const Administration = () => {
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
            Administration
          </h1>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {administrationSections.map((section) => (
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

      {/* Principal's Message Section */}
      <AnimatedSection className="py-16 bg-white" id="principal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={administrationSections[0].content.image}
                  alt={administrationSections[0].content.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <User className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Principal's Message</h2>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{administrationSections[0].content.name}</h3>
                <div className="prose prose-lg max-w-none">
                  {administrationSections[0].content.message.split('\n').map((line, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Departments Section */}
      <AnimatedSection className="py-16 bg-blue-50" id="departments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Subjects and Departments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administrationSections[1].content.departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  {dept.subjects.map((subject, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Faculty and Staff Section */}
      <AnimatedSection className="py-16 bg-white" id="faculty">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Users className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Faculty and Staff</h2>
          </div>
          {administrationSections[2].content.teams.map((team, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">{team.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.members.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-blue-600">{member.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">Experience: {member.experience}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Administration;