import React from "react";
import '../css/aboutme.css'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import km from "../img/km.jpg"
import Services from "../components/services";
import Services2 from "../components/services2";


function ServicesPage() {
    return (
        <div>
            <Navbar/>
            <div className="aboutme-container absolute top-20 w-full">
            <h1 className="ab flex justify-center items-center p-5 font-bold">Services</h1>
            <Services
                name = "CBT Training For Performance Enhancememt"
                img = {km}
                aboutme = "As a Sports and Clinical Psychologist,I merge the realms of mind and body to elevate athletic performance andmental well-being. Picture a dynamic synergy where the art of the game meets the science of the psyche. From one-on-one breakthrough sessions to crafting winning team dynamics, I bring a holistic approach that transcends the playing field. Utilizing cuttingedge tools like biofeedback, cognitive training, and neurofeedback, I propel athletes towards their zenith. Let's redefine excellence together – where mental fortitude meets physical prowess. Elevate your game with a psychologist who understands the heartbeat behind every victor!"
            />
            <Services2
                name = "CBT Training For Performance Enhancememt"
                img = {km}
                aboutme = "As a Sports and Clinical Psychologist,I merge the realms of mind and body to elevate athletic performance andmental well-being. Picture a dynamic synergy where the art of the game meets the science of the psyche. From one-on-one breakthrough sessions to crafting winning team dynamics, I bring a holistic approach that transcends the playing field. Utilizing cuttingedge tools like biofeedback, cognitive training, and neurofeedback, I propel athletes towards their zenith. Let's redefine excellence together – where mental fortitude meets physical prowess. Elevate your game with a psychologist who understands the heartbeat behind every victor!"
            />
            <Services
                name = "CBT Training For Performance Enhancememt"
                img = {km}
                aboutme = "As a Sports and Clinical Psychologist,I merge the realms of mind and body to elevate athletic performance andmental well-being. Picture a dynamic synergy where the art of the game meets the science of the psyche. From one-on-one breakthrough sessions to crafting winning team dynamics, I bring a holistic approach that transcends the playing field. Utilizing cuttingedge tools like biofeedback, cognitive training, and neurofeedback, I propel athletes towards their zenith. Let's redefine excellence together – where mental fortitude meets physical prowess. Elevate your game with a psychologist who understands the heartbeat behind every victor!"
            />
            <Footer/>
            </div>
        </div>
    )
}

export default ServicesPage;