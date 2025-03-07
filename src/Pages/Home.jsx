import React from 'react';
import Navbar from "../components/Navbar";
import Video from "../assets/Video.mp4";
import Plane1 from "../assets/plane-1.svg";
import Plane2 from "../assets/plane-2.svg";
import { BookOpen, Globe, TrendingUp } from 'lucide-react';
import Card from '../components/Card.jsx';
import AcademicBg from '../assets/strongAcademics.jpg';
import TalentedTeachers from '../assets/talented-teachers.jpg';
import HighQualityEducation from '../assets/high-quality-education.jpg';
import RotatingCard from '../components/RotatingCard.jsx' ; 
import Principal from '../assets/Principal.jpg' ; 
import Director from '../assets/Director.jpg' ; 
import Star1 from "../assets/star-1.svg" ; 
import Star2 from "../assets/star-2.svg" ; 
import Impact1 from "../assets/our-impact-1.svg" ; 
import Impact2 from "../assets/our-impact-2.svg" ; 
import Impact3 from "../assets/our-impact-3.svg" ; 
import Impact4 from "../assets/our-impact-4.svg" ; 
import '../App.css';

function Home(){
    return(
        <>
        <div className="overflow-hidden w-full">
            <div id="body" className="relative h-screen w-full overflow-hidden">
                <video autoPlay muted loop className="absolute top-0 left-0 h-full w-full object-cover">
                    <source src={Video} type="video/mp4"/>
                    Your Browser does not support the video. 
                </video>
                <div className="absolute top-0 left-0 h-full w-full z-10 flex flex-col">
                    <div className="fixed top-0 z-50">
                        <Navbar />
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-[#FFB22C] font-extrabold text-[64px] leading-tight">Ready to start your</h1>
                            <h1 className="font-extrabold italic text-[72px] leading-tight">Adventure ?</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-2 mt-[20px] relative"> 
                <div className="w-full relative">
                    <div className="relative">
                        <img src={Plane1} alt="" className="h-[120px] w-auto"/>
                        <div className="flex w-[80%] mx-auto flex-col text-center">
                            <h1 className="text-[#F14A00] font-extrabold text-[28px]">"Nurturing Minds, Building Futures – Where Excellence Meets Trust."</h1>
                            <p className="px-20 text-[20px] font-[800] text-[#000B58] mt-8">
                                In Ashelles Public School, we provide students with strong academics, holistic and inclusive support, and rich life opportunities beyond the classroom so they thrive in kindergarten through 12th grade … and far beyond!
                            </p>
                        </div>
                        <div className="relative w-full flex justify-end">
                            <img src={Plane2} alt="" className="h-[120px] w-auto"/>
                        </div>
                        <div className="flex flex-row justify-center gap-[44px] mt-16 mb-16" id="card-container">
                            <Card icon = {BookOpen} heading = "Strong Academics" description = "We provide a well-structured and dynamic curriculum designed to foster intellectual growth, critical thinking, and lifelong learning" bgImage={AcademicBg} solidColor= "#344CB7" />
                            <Card icon = {Globe} heading = "Talented Teachers" description = "Our dedicated and experienced educators inspire, mentor, and shape young minds with passion and expertise." bgImage={TalentedTeachers} solidColor= "#FAA300" /> 
                            <Card icon = {TrendingUp} heading = "High Quality Education" description = "We ensure excellence in education through innovative teaching methods, modern resources, and a commitment to academic success." bgImage={HighQualityEducation} solidColor= "#A31D1D" /> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-screen h-[70vh] bg-[#E8D5B5] mt-16 mb-16 text-center px-8 py-8">
                <h1 className = "font-extrabold text-[32px] text-[#000B58] mb-4">Warm Welcome from our School Executive Leadership Team</h1>
                <div className = "px-4 flex items-center justify-center gap-20">
                    <RotatingCard title = "Our Principal" name = "Dr. Amar Jyoti Nayak SR." image = {Principal} heading = "From Principal's Desk" message = {`${"Welcome to Ashelles Public School, where learning, growth, and excellence come together. We are dedicated to nurturing young minds and shaping bright futures. Let’s embark on this journey of knowledge together!"}`}/>

                    <RotatingCard title = "Our Director" name = "Mrs. Meghna Mishra" image = {Director} heading = "From Director's Desk" message = {`${"At Ashelles Public School, we are committed to providing a nurturing environment where students thrive academically and personally. With a vision for excellence, we strive to shape future leaders through quality education and strong values."}`}/>
                </div>
            </div>

            <div className="w-full h-[70vh]">
                <img src={Star1} alt="" className="h-[120px] w-auto"/>
                <div className = "px-8 text-center">
                    <h1 className = "text-[#F14A00] font-extrabold text-[32px] mb-8">Our Impact</h1>

                    <div className = "flex flex-row gap-20 justify-center text-[#000B58] mb-8" id ="impact">
                        <div className = "flex flex-col gap-4 justify-center items-center text-center">
                            <img src= {Impact1} alt="" className = "h-[100px] w-auto "/>
                            <h1 className = "text-center font-[700] text-[20px]">92%</h1>
                            <p className = "text-center text-[14px] font-[700]">High School Graduation Rate</p>
                        </div>
                        <div className = "flex flex-col gap-4 justify-center items-center text-center">
                            <img src= {Impact2} alt="" className = "h-[100px] w-auto "/>
                            <h1 className = "text-center font-[700] text-[20px]">95%</h1>
                            <p className = "text-center text-[14px] font-[700]">Student Satisfaction</p>
                        </div>
                        <div className = "flex flex-col gap-4 justify-center items-center text-center">
                            <img src= {Impact3} alt="" className = "h-[100px] w-auto "/>
                            <h1 className = "text-center font-[700] text-[20px]">90%</h1>
                            <p className = "text-center text-[14px] font-[700]">College & Career Readiness</p>
                        </div>
                        <div className = "flex flex-col gap-4 justify-center items-center text-center">
                            <img src= {Impact4} alt="" className = "h-[100px] w-auto "/>
                            <h1 className = "text-center font-[700] text-[20px]">85%</h1>
                            <p className = "text-center text-[14px] font-[700]">Participation in Extracurricular</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full flex justify-end mb-16">
                    <img src={Star2} alt="" className="h-[120px] w-auto mr-0"/>
                </div>
            </div>

            <div className = "mt-20 w-screen px-8 flex justify-center mb-20" id = "notice-board">
                <div className = "w-[70vw] h-[60vh] bg-[#118B50] border-8 border-[#854836] rounded-[16px] px-12 py-4">
                    <h1 className = "text-center text-[28px] font-bold">Notice Board</h1>
                    <ol className = "list-decimal text-[20px] flex flex-col gap-1">
                        <li className = "font-[700]">Admissions Open for 2025</li>
                        <p className = "text-[16px]">Admissions for the new academic session are now open! Apply before 16th March, 2025 to secure a place for your child.</p>

                        <li className = "font-[700]">Annual Sports Day – [Date]</li>
                        <p className = "text-[16px]">Get ready for an action-packed day of sports and teamwork! Join us on [Date] at [Venue] for our Annual Sports Day. Parents and guardians are welcome to cheer for the students.</p>

                        <li className = "font-[700]">Parent-Teacher Meeting – [Date]</li>
                        <p className = "text-[16px]">A Parent-Teacher Meeting is scheduled for [Date] from [Time]. We encourage all parents to attend and discuss their child’s progress with teachers</p>
                    </ol>
                </div>
            </div>
            
            <div className = "bg-[#E8D5B5] w-screen h-[70vh] mt-16 mb-16"></div>
        </div>
        </>
    )
}

export default Home;