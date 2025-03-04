import { Link } from 'react-router';
import logo from '../assets/Logo original.png';
import Rules from '../assets/Rules.svg';
import Curriculum from '../assets/CurriculumAndSyllabus.svg';
import Principal from '../assets/Principal.jpg';
import Subjects from '../assets/Subjects.svg';
import Faculty from '../assets/Faculty.svg';
import { useState, useRef, useEffect } from 'react';
import '../App.css';

function Navbar() {
  const [dropdownActive, setDropdownActive] = useState(null);
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


  const navbarStyle = dropdownActive 
    ? "flex flex-row items-center h-[10vh] w-[100vw] px-[3vw] bg-[#FCF7FF] justify-between transition-colors duration-300"
    : "flex flex-row items-center h-[10vh] w-[100vw] px-[3vw] bg-[#000000a2] justify-between transition-colors duration-300";

  const navItemsStyle = dropdownActive
    ? "text-[#000B58] transition-colors duration-300"
    : "text-[#FCF7FF] transition-colors duration-300";

  const schoolNameStyle = dropdownActive
    ? "text-[20px] font-[700] text-[#F14A00] transition-colors duration-300"
    : "text-[20px] font-[700] text-[#FCF7FF] transition-colors duration-300";

  const nameStyle = dropdownActive
    ? "text-[24px] font-extrabold text-[#000B58] transition-colors duration-300"
    : "text-[24px] font-extrabold text-[#FCF7FF] transition-colors duration-300";

  return (
    <>
      <div id="navbar" className={navbarStyle}>
        <Link to='/' className="flex flex-row">
          <img src={logo} alt="" srcSet="" className="h-[8vh] flex mt-auto mb-auto" />
          <div className="flex ml-[1vw] items-center">
            <h1 id="name" className={nameStyle}>Ashelles <span id="school" className={schoolNameStyle}>Public School</span></h1>
          </div>
        </Link>

        <div id="navbar-items" className={navItemsStyle} ref={navItemRef}>
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
            <li><Link to="/contact" >Contact Us</Link></li>
            <li><Link to="/about" >About Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Dropdown of Academics */}

      {dropdownActive === 'academics' && (
        <div className="h-[48vh] w-[100vw] bg-[#FCF7FF] absolute shadow-2xl z-10 px-[40px] flex items-center text-[#000B58] font-[700] text-[14px]" ref={dropdownRef} onMouseEnter={() => handleMouseEnter('academics')} onMouseLeave={handleMouseLeave} >
          <div className="flex flex-row gap-[4vw]" id="academic-drp">
            <div className="link-group">
              <Link to="/academics" className="image-link">
                <img src={Rules} alt="" className="h-[200px] w-[300px] rounded-[15px] hover:shadow-lg duration-[300] ease-in-out mb-[16px]"/>
              </Link>
              <Link to="/academics" className="text-link">Rules and Regulations</Link>
            </div>
            <div className="link-group">
              <Link to="/academics" className="image-link">
                <img src={Curriculum} alt="" className="h-[200px] w-[300px] rounded-[15px] hover:shadow-lg duration-[300] ease-in-out mb-[16px]" />
              </Link>
              <Link to="/academics" className="text-link"><p>Curriculum and Syllabus</p></Link>
            </div>
            <div>
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

      {/* DropDown of Administration */}

      {dropdownActive === 'administration' && (
        <div className="h-[48vh] w-[100vw] bg-[#FCF7FF] absolute shadow-2xl z-10 px-[40px] flex items-center text-[#000B58] font-[700] text-[14px]" ref={dropdownRef} onMouseEnter={() => handleMouseEnter('administration')} onMouseLeave={handleMouseLeave} >
          <div className="flex flex-row gap-[4vw]" id="admin-drp">
            <div className="link-group">
              <Link to="/academics" className="image-link">
                <img src={Principal} alt="" className="h-[200px] w-[300px] rounded-[15px] hover:shadow-lg duration-[300] ease-in-out mb-[16px]" />
              </Link>
              <Link to="/academics" className="text-link"><p>Principal's Message</p></Link>
            </div>

            <div className="link-group">
              <Link to="/academics" className="image-link">
                <img src={Subjects} alt="" className="h-[200px] w-[300px] rounded-[15px] hover:shadow-lg mb-[16px] cursor-pointer" />
              </Link>
              <Link to="/academics" className="text-link">Subjects and Departments</Link>
            </div>

            <div className="link-group">
              <Link to="/academics" className="image-link">
                <img src={Faculty} alt="" className="h-[200px] w-[300px] rounded-[15px] hover:shadow-lg duration-[300] ease-in-out mb-[16px]" />
              </Link>
              <Link to="/academics" className="text-link"><p>Faculty and Staffs</p></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;