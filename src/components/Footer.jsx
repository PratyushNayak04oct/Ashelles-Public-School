import '../App.css' ; 
import { Link } from 'react-router';
import { Phone, Mail, School, Facebook, Instagram } from 'lucide-react' ; 

function Footer(){
    return(
        <>
            <div className = "h-[80vh] w-full" id = "footer" >
                <div className = "h-full w-full z-10 flex flex-col px-16 py-8 gap-16 text-white" id = "cover">
                    <div>
                        <div className = "flex flex-row gap-16 items-center px-36 relative" id="heading">
                            <h1 className = "text-[40px] font-extrabold text-[#FFB22C]">APS</h1>
                            <h2 className = "font-bold text-[24px]">Ashelles Public School</h2>
                        </div>
                    </div>
                    <div className = "flex flex-row items-center justify-between" id = "footer-content">
                        <div className = "w-[20%] h-[100%]">
                            <h1 className = "font-bold relative mb-8 flex flex-col">Quick Links</h1>
                            <div className = "flex flex-col gap-4 font-[500] text-[14px]">
                                <Link to = '/academics' className = " hover:translate-x-2 ease-in-out hover:font-bold transition-all duration-600"><p>Academics</p></Link>
                                <Link to = '/administration' className = " hover:translate-x-2 ease-in-out hover:font-bold transition-all duration-600"><p>Administration</p></Link>
                                <Link to = '/contact' className = " hover:translate-x-2 ease-in-out hover:font-bold transition-all duration-600"><p>Contact Us</p></Link>
                                <Link to = '/about' className = " hover:translate-x-2 ease-in-out hover:font-bold transition-all duration-600"><p>About Us</p></Link>
                                <a href = 'https://www.cbse.gov.in/' target='_blank' className = " hover:translate-x-2 ease-in-out hover:font-bold transition-all duration-600"><p>CBSE</p></a>
                            </div>
                        </div>
                        <div className = "w-[20%] h-[100%]">
                           <h1 className = "font-bold relative mb-8">Contact Us</h1>
                           <div className = "flex flex-col gap-4 flex-wrap font-[500] text-[14px]">
                            <p className = "flex flex-row gap-2 items-center hover:translate-x-2 ease-in-out hover:font-bold transition-all duration-600"><Phone size = {16}/>+91 -  9337388809</p>
                            <p className = "flex flex-row gap-2 items-center hover:translate-x-2 ease-in-out hover:font-bold transition-all duration-600"><Mail size = {16}/><a href = "mailto:acheellespublicschool@gmail.com">acheellespublicschool@gmail.com</a></p>
                            <p className = "flex flex-row gap-2 items-center hover:translate-x-2 ease-in-out hover:font-bold transition-all duration-600"><School size = {40}/>Plot No. 1B, 04, opposite Amba Tota, CDA Sector-9, Cuttack, Odisha 753014</p>
                           </div>
                        </div>
                        <div className = "w-[20%] h-[100%]">
                            <h1 className = "font-bold relative mb-8">Follow Us</h1>
                            <div className = "flex flex-row gap-4">
                                <a href="https://www.facebook.com/people/Ashelles-Public-School/100065291448017/?mibextid=ZbWKwL" target='_blank' className = "rounded-[50%] bg-[rgba(255,255,255,0.25)] p-3 hover:bg-[rgba(255,255,255,1)] hover:text-[#000B58] duration-400 ease-in-out"><Facebook size = {20}/></a>

                                <a href="https://www.instagram.com/apsodisha/?igshid=MzMyNGUyNmU2YQ%3D%3D" target='_blank' className = "rounded-[50%] bg-[rgba(255,255,255,0.25)] p-3 hover:bg-[rgba(255,255,255,1)] hover:text-[#000B58] duration-400 ease-in-out"><Instagram size = {20}/></a>
                            </div>
                        </div>
                        <div className = "w-[20%] h-[100%]">
                            <h1 className = "font-bold relative mb-8">Map</h1>
                            <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.612917918748!2d85.83198987433293!3d20.481085681034763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1911e5b5fc05fd%3A0x72357e0bc5b09b63!2sAshelles%20Public%20School!5e0!3m2!1sen!2sin!4v1741420857255!5m2!1sen!2sin" width="200" height="200" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer ; 