import React from "react";
import Navbar from "../components/navbar";
import '../css/homepage.css';
import v2 from "../img/sports.mp4"
import Card from "../components/card";
import cardP from "../components/cardP.js"
import Footer from "../components/footer.jsx";
import { useNavigate } from "react-router-dom";

function Home1(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
    const handleClick2 = () => {
        navigate("/")
    }

    return (
        <div className="flex flex-col min-h-screen w-full">
            <div className="flex-grow">
                <Navbar />
                    <div className="x2 w-full absolute top-20">
                        <video className="x3"  loop autoPlay playsInline webkit-playsInline muted>
                            <source src={v2} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="flex flex-col onvid">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl p-10 sm:p-5">TAKE YOUR GAME TO THE NEXT LEVEL</h1>
                            <p className="text-xl md:text-2xl lg:text-3xl p-5">Sports psychology and performance services for competitors at every level</p>
                            <div className="flex flex-row justify-center align-center" style={{ zIndex: 10 }}>
                                <button className="btp text-xl md:text-2xl lg:text-3xl p-3 m-5 bg-blue-500 rounded" onClick={handleClick}>Individuals</button>
                                <button className="btp text-xl md:text-2xl lg:text-3xl p-3 m-5 bg-blue-500 rounded" onClick={handleClick2}>Teams</button>
                            </div>
                        </div>
                    </div>
                    <div className="x5 w-full flex flex-col justify-center items-center">
                        <div className="x6 w-full flex flex-col md:flex md:flex-row">
                            <p className="x7 w-full font-bold flex text-xl md:text-2xl lg:text-3xl p-5 text-center justify-center align-center">SPORT PSYCHOLOGY SERVICES WE OFFER</p>
                            <Card
                                title = {cardP[0].title}
                                img = {cardP[0].img}
                                description = {cardP[0].description}
                                link = {cardP[0].link}
                            />
                        </div>
                        <div className="x6 flex flex-col md:flex md:flex-row">
                            <Card
                                title = {cardP[1].title}
                                img = {cardP[1].img}
                                description = {cardP[1].description}
                                link = {cardP[1].link}
                            />
                            <Card
                                title = {cardP[2].title}
                                img = {cardP[2].img}
                                description = {cardP[2].description}
                                link = {cardP[2].link}
                            />
                        </div>
                     <Footer />
                    </div>
                </div>
            </div>
    )
}
export default Home1;