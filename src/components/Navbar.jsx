import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/Logo.png' ; 

const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navItemRef = useRef(null);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const handleMouseEnter = (dropdown) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setDropdownActive(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownActive(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navbarStyle = dropdownActive 
    ? "flex flex-row items-center h-[10vh] w-[90vw] max-w-7xl rounded-2xl px-[3vw] bg-[#FCF7FF]/80 backdrop-blur-sm justify-between transition-colors duration-300 fixed top-5 left-1/2 transform -translate-x-1/2 z-50"
    : "flex flex-row items-center h-[10vh] w-[90vw] max-w-7xl rounded-2xl px-[3vw] bg-white/60 backdrop-blur-sm justify-between transition-colors duration-300 fixed top-5 left-1/2 transform -translate-x-1/2 z-50";

  const navItemsStyle = dropdownActive
    ? "text-[#000B58] transition-colors duration-300 md:flex hidden"
    : "text-[#000B58] transition-colors duration-300 md:flex hidden";

  const schoolNameStyle = dropdownActive
    ? "text-[20px] font-[700] text-[#F14A00] transition-colors duration-300"
    : "text-[20px] font-[700] text-[#F14A00] transition-colors duration-300";

  const nameStyle = dropdownActive
    ? "text-[24px] font-extrabold text-[#000B58] transition-colors duration-300"
    : "text-[24px] font-extrabold text-[#000B58] transition-colors duration-300";

  const academicsChevronStyle = dropdownActive === 'academics'
    ? "inline-block ml-1 transition-transform duration-300 transform rotate-180"
    : "inline-block ml-1 transition-transform duration-300 transform";
    
  const administrationChevronStyle = dropdownActive === 'administration'
    ? "inline-block ml-1 transition-transform duration-300 transform rotate-180"
    : "inline-block ml-1 transition-transform duration-300 transform";


  const belowNavbarDropdownStyle = "w-[90vw] max-w-7xl bg-[#FCF7FF] fixed shadow-2xl z-10 px-[40px] flex items-center text-[#000B58] font-[700] text-[14px] rounded-2xl left-1/2 transform -translate-x-1/2 hidden md:flex py-12 top-[calc(10vh+10px)]";

  return (
    <>
      <div id="navbar" className={navbarStyle}>
        <Link to='/' className="flex flex-row">
          <img 
            src={Logo}
            alt="School Logo"
            className="h-[8vh] flex mt-auto mb-auto rounded-full"
          />
          <div className="flex ml-[1vw] items-center">
            <h1 id="name" className={nameStyle}>Ashelles <span id="school" className={schoolNameStyle}>Public School</span></h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div id="navbar-items" className={navItemsStyle} ref={navItemRef}>
          <ul className="flex flex-row list-none gap-[20px] font-[600] text-[16px]">
            <li><Link to="/">Home</Link></li>
            <li>
              <Link 
                to="/academics" 
                onMouseEnter={() => handleMouseEnter('academics')} 
                onMouseLeave={handleMouseLeave}
                className="flex items-center"
              >
                Academics
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={academicsChevronStyle}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link 
                to="/administration" 
                onMouseEnter={() => handleMouseEnter('administration')} 
                onMouseLeave={handleMouseLeave}
                className="flex items-center"
              >
                Administration
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={administrationChevronStyle}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
            </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-[#000B58]" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <g>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </g>
            ) : (
              <g>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </g>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[12vh] inset-x-0 bg-white shadow-lg rounded-b-2xl z-40 md:hidden px-4 py-2 w-[90vw] mx-auto">
          <ul className="flex flex-col list-none gap-4 font-[600] text-[16px] text-[#000B58] py-4">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li>
              <Link 
                to="/academics" 
                onClick={() => {
                  setDropdownActive(dropdownActive === 'academics' ? null : 'academics');
                }}
                className="flex items-center justify-between"
              >
                Academics
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={dropdownActive === 'academics' ? "transform rotate-180" : ""}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              {dropdownActive === 'academics' && (
                <div className="pl-4 mt-2 border-l-2 border-blue-300">
                  <ul className="flex flex-col gap-2 text-[14px]">
                    <li><Link to="/academics" onClick={() => setMenuOpen(false)}>Rules and Regulations</Link></li>
                    <li><Link to="/academics" onClick={() => setMenuOpen(false)}>Curriculum and Syllabus</Link></li>
                    <li><Link to="/academics" onClick={() => setMenuOpen(false)}>Teaching Methodology</Link></li>
                    <li><Link to="/academics" onClick={() => setMenuOpen(false)}>Examinations and Assessments</Link></li>
                    <li><Link to="/academics" onClick={() => setMenuOpen(false)}>Academic Calendar and Holiday List</Link></li>
                    <li><Link to="/academics" onClick={() => setMenuOpen(false)}>School Timings and Uniforms</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link 
                to="/administration" 
                onClick={() => {
                  setDropdownActive(dropdownActive === 'administration' ? null : 'administration');
                }}
                className="flex items-center justify-between"
              >
                Administration
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={dropdownActive === 'administration' ? "transform rotate-180" : ""}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              {dropdownActive === 'administration' && (
                <div className="pl-4 mt-2 border-l-2 border-blue-300">
                  <ul className="flex flex-col gap-2 text-[14px]">
                    <li><Link to="/administration" onClick={() => setMenuOpen(false)}>Principal's Message</Link></li>
                    <li><Link to="/administration" onClick={() => setMenuOpen(false)}>Subjects and Departments</Link></li>
                    <li><Link to="/administration" onClick={() => setMenuOpen(false)}>Faculty and Staff</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}

      {dropdownActive === 'academics' && !menuOpen && (
        <div 
          className={belowNavbarDropdownStyle} 
          ref={dropdownRef} 
          onMouseEnter={() => handleMouseEnter('academics')} 
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row gap-[4vw] md:flex-wrap lg:flex-nowrap w-full" id="academic-drp">
            <div className="link-group w-full md:w-1/2 lg:w-auto">
              <Link to="/academics" className="image-link">
                <img 
                  src= "https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/Rules.svg"
                  alt="Rules and Regulations"
                  className="h-[200px] w-full rounded-[15px] hover:shadow-lg duration-[300] ease-in-out mb-[16px] object-cover"
                />
              </Link>
              <Link to="/academics" className="text-link">Rules and Regulations</Link>
            </div>
            <div className="link-group w-full md:w-1/2 lg:w-auto">
              <Link to="/academics" className="image-link">
                <img 
                  src= "https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/CurriculumAndSyllabus.svg"
                  alt="Curriculum and Syllabus"
                  className="h-[200px] w-full rounded-[15px] hover:shadow-lg duration-[300] ease-in-out mb-[16px] object-cover"
                />
              </Link>
              <Link to="/academics" className="text-link"><p>Curriculum and Syllabus</p></Link>
            </div>
            <div className="w-full lg:w-auto mt-4 lg:mt-0">
              <ul className="flex flex-col gap-[16px]">
                <Link to="/academics" className="animated-link"><li>Teaching Methodology</li></Link>
                <Link to="/academics" className="animated-link"><li>Examinations and Assessments</li></Link>
                <Link to="/academics" className="animated-link"><li>Academic Calendar and Holiday List</li></Link>
                <Link to="/academics" className="animated-link"><li>School Timings and Uniforms</li></Link>
              </ul>
            </div>
          </div>
        </div>
      )}

      
      {dropdownActive === 'administration' && !menuOpen && (
        <div 
          className={belowNavbarDropdownStyle} 
          ref={dropdownRef} 
          onMouseEnter={() => handleMouseEnter('administration')} 
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row gap-[4vw] md:flex-wrap lg:flex-nowrap w-full" id="admin-drp">
            <div className="link-group w-full md:w-1/3 lg:w-auto">
              <Link to="/administration" className="image-link">
                <img 
                  src = "https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/Principal.webp"
                  alt="Principal's Message"
                  className="h-[200px] w-full rounded-[15px] hover:shadow-lg duration-[300] ease-in-out mb-[16px] object-cover"
                />
              </Link>
              <Link to="/administration" className="text-link"><p>Principal's Message</p></Link>
            </div>
            <div className="link-group w-full md:w-1/3 lg:w-auto">
              <Link to="/administration" className="image-link">
                <img 
                  src = "https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/Subjects.svg"
                  alt="Subjects and Departments"
                  className="h-[200px] w-full rounded-[15px] hover:shadow-lg duration-[300] ease-in-out mb-[16px] object-cover"
                />
              </Link>
              <Link to="/administration" className="text-link">Subjects and Departments</Link>
            </div>
            <div className="link-group w-full md:w-1/3 lg:w-auto">
              <Link to="/administration" className="image-link">
                <img 
                  src = "https://raw.githubusercontent.com/PratyushNayak04oct/Ashelles-Public-School/refs/heads/main/src/assets/Faculty.svg"
                  alt="Faculty and Staff"
                  className="h-[200px] w-full rounded-[15px] hover:shadow-lg duration-[300] ease-in-out mb-[16px] object-cover"
                />
              </Link>
              <Link to="/administration" className="text-link"><p>Faculty and Staff</p></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;