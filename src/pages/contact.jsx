import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../css/contact.css'

function Contact(){
    return(
        <div>
            <Navbar/>
            <div className="absolute w-full top-20 text-center">
            <h1 className="pew2">Contact</h1>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <div className="w-1/2 flex items-center justify-center">
            <p className="pewpew">For requesting an appointment go to our appointment page</p>
            </div>
            <div className="border-l-2 border-gray-400 h-full"></div> {/* Divider */}
            <div className="w-1/2 m-5 sm:m-1 sm:p-5 flex items-center justify-center">
            <p className="p-5">If you have any questions, please contact me at: <a href="mailto:kriti.theresoluteminds@gmail.com" className="underline text-blue-600 hover:text-blue-800">kriti.theresoluteminds@gmail.com</a></p>
            </div>
            </div>
            <div className="absolute top-40">
            </div>
            </div>
            <div className="absolute w-full top-60">
            <Footer/>
            </div>
        </div>
    )
}

export default Contact;