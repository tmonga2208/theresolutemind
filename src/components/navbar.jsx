import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';
import img0 from "../img/resolutee.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate()

    const AppointmentPage = () => {
        navigate("/appointment")
    }

    return (
        <nav className="fixed w-full bg-white p-4">
    <div className="container mx-auto flex items-center justify-between">
        <div className="flex">
            <Link to="/" className="flex items-center">
                <img src={img0} alt="Logo" className="h-12 mr-2" />
            </Link>
        </div>
        <button className="md:hidden px-2 py-1 text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <div className="hidden md:flex justify-center w-full">
    <div className="flex justify-between space-x-10"> 
        <Link to="/link1" className="x1 font-bold text-black">
            About Us
        </Link>
        <Link to="/link2" className="x1 font-bold text-black">
            Services
        </Link>
        <Link to="/link3" className="x1 font-bold text-black">
            Confidentiality
        </Link>
        <Link to="/link4" className="x1 font-bold text-black">
            Client Portal
        </Link>
        <Link to="/link5" className="x1 font-bold text-black">
            Contact Us
        </Link>
    </div>
</div>
        <div className="flex justify-end">
            <button className="req text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent" style={{backgroundColor: 'rgb(6,147,227,1)'}} onClick={AppointmentPage}>
                Request Appointment
            </button>
        </div>
    </div>
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-center">
                    <Link to="/link1" className="x1 font-bold text-black p-2">
                    About Us
                   </Link>
                   <Link to="/link2" className="x1 font-bold text-black p-2">
                       Services
                   </Link>
                   <Link to="/link3" className="x1 font-bold text-black p-2">
                      Confidentiality
                   </Link>
                   <Link to="/link4" className="x1 font-bold text-black p-2">
                       Client Portal
                   </Link>
                   <Link to="/link5" className="x1 font-bold text-black p-2">
                       Contact Us
                   </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;