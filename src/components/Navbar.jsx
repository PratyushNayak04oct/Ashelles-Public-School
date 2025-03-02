import { Link } from 'react-router';
import logo from '../assets/Logo original.png' ; 
import { useState } from 'react';
import '../App.css' ; 

function Navbar(){
    const [dropdownActive, setDropdownActive] = useState(null) ; 

    const handleMouseEnter = (dropdown) =>{
        setDropdownActive(dropdown) ; 
    }

    const handleMouseLeave = () =>{
        setTimeout(() => {
            
        }, 2000);
        setDropdownActive(null) ; 
    }


    return(
        <>
            <div id = "navbar" className = "flex flex-row items-center h-[10vh] w-[100vw] px-[3vw] bg-[#000000a2] justify-between">
                <Link to = '/' className = "flex flex-row">
                    <img src={logo} alt="" srcset="" className = "h-[8vh] flex mt-auto mb-auto"/>
                    <div className = "flex text-white ml-[1vw] items-center">
                        <h1 className = "text-[24px] font-extrabold">Ashelles <span className = "text-[20px] font-[500]">Public School</span></h1>
                    </div>
                </Link>

                <div className = "text-white" id = "navbar-items">
                    <ul className = " flex flex-row list-none gap-[20px] font-[600] text-[16px]">
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/academics" onMouseEnter={() => handleMouseEnter('academics')} onMouseLeave={handleMouseLeave}>Academics</Link></li>
                        <li><Link to ="/administration" onMouseEnter={() => handleMouseEnter('administration')} onMouseLeave={handleMouseLeave}>Administration</Link></li>
                        <li><Link to ="/contact">Contact Us</Link></li>
                        <li><Link to ="/about">About Us</Link></li>
                    </ul>
                </div>
            </div>
            {dropdownActive === 'academics' && (
                <div className = "h-[48vh] w-[100vw] bg-white fixed"></div>
            )}
        </>
    )
}

export default Navbar ; 