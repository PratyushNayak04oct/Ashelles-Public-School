import { Link } from 'react-router';
import logo from '../assets/Logo original.png';
import books from '../assets/Books.jpg';
import faculty from '../assets/Faculty.jpeg';
import { useState, useRef, useEffect } from 'react';
import '../App.css';

function Navbar() {
  const [dropdownActive, setDropdownActive] = useState(null);
  const dropdownRef = useRef(null);
  const navItemRef = useRef(null);
  
  // Add a delay before closing the dropdown
  const [closeTimeout, setCloseTimeout] = useState(null);
  
  const handleMouseEnter = (dropdown) => {
    // Clear any existing timeout to prevent the dropdown from closing
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setDropdownActive(dropdown);
  };

  const handleMouseLeave = () => {
    // Set a timeout to delay the closing of the dropdown
    const timeout = setTimeout(() => {
      setDropdownActive(null);
    }, 300); // 300ms delay before closing
    
    setCloseTimeout(timeout);
  };
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  return (
    <>
      <div id="navbar" className="flex flex-row items-center h-[10vh] w-[100vw] px-[3vw] bg-[#000000a2] justify-between">
        <Link to='/' className="flex flex-row">
          <img src={logo} alt="" srcSet="" className="h-[8vh] flex mt-auto mb-auto" />
          <div className="flex text-[#FCF7FF] ml-[1vw] items-center">
            <h1 className="text-[24px] font-extrabold">Ashelles <span className="text-[20px] font-[500]">Public School</span></h1>
          </div>
        </Link>

        <div className="text-[#FCF7FF]" id="navbar-items" ref={navItemRef}>
          <ul className="flex flex-row list-none gap-[20px] font-[600] text-[16px]">
            <li><Link to="/">Home</Link></li>
            <li>
              <Link 
                to="/academics" 
                onMouseEnter={() => handleMouseEnter('academics')} 
                onMouseLeave={handleMouseLeave}
              >
                Academics
              </Link>
            </li>
            <li>
              <Link 
                to="/administration" 
                onMouseEnter={() => handleMouseEnter('administration')} 
                onMouseLeave={handleMouseLeave}
              >
                Administration
              </Link>
            </li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
      </div>
      
      {dropdownActive === 'academics' && (
        <div 
          className="h-[48vh] w-[100vw] bg-[#FCF7FF] absolute shadow-2xl z-10 px-[40px] flex items-center text-[#000B58] font-[700]"
          ref={dropdownRef}
          onMouseEnter={() => handleMouseEnter('academics')} 
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row gap-[4vw]">
            <div>
              <img src={books} alt="" className="h-[200px] w-[300px] rounded-[15px] shadow-lg mb-[16px]" />
              <p>Subjects and Departments</p>
              <p className = "text-[12px]">At Ashelles Public School we strictly follow the subjects set by CBSE.</p>
            </div>
            <div>
              <img src={faculty} alt="" className="h-[200px] w-[300px] rounded-[15px] shadow-lg mb-[16px]" />
              <p>Faculty and Staffs</p>
            </div>
            <div>
              <ul className="flex flex-col gap-[24px]">
                <li>Curriculum Overview</li>
                <li>Examinations and Assessments</li>
                <li>Syllabus</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;