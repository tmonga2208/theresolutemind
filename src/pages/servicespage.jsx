import React from "react";
import '../css/aboutme.css'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Services from "../components/services";
import Services2 from "../components/services2";
import ServiceContent from "./servicecontent.js"


function ServicesPage() {
    return (
        <div>
            <Navbar/>
            <div className="aboutme-container absolute top-20 w-full">
            <h1 className="ab flex justify-center items-center p-5 font-bold">Services</h1>
            <Services
                name = {ServiceContent[0].name}
                img = {ServiceContent[0].img}
                aboutme = {ServiceContent[0].aboutme}
            />
            <Services2
                name = {ServiceContent[1].name}
                img = {ServiceContent[1].img}
                aboutme = {ServiceContent[1].aboutme}
            />
            <Services
                name = {ServiceContent[2].name}
                img = {ServiceContent[2].img}
                aboutme = {ServiceContent[2].aboutme}
            />
            <Footer/>
            </div>
        </div>
    )
}

export default ServicesPage;