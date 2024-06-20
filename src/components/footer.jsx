import React from "react";
import '../css/footer.css';
import imgLogo from "../img/resolutee.png";
import { Link } from "react-router-dom";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer className="h-full mt-10" style={{backgroundColor: 'rgb(245, 245, 245)'}}>
            <div className="flex flex-col w-1/2">
                <div className="sm:mb-20">
                    <img className="w-1/2" src={imgLogo} alt="logo"/>
                    <p className="p-2">© {currentYear} | All Rights Reserved</p>
                </div>
                <div className="social justify-center items-center sm:mt-12">
                    <p className="p-3">Follow Us On:</p>
                    <a href="https://www.linkedin.com" className="p-3">LinkedIn</a>
                    <a href="https://www.twitter.com" className="p-3">Twitter</a>
                    <a href="https://www.instagram.com" className="p-3">Instagram</a>
                </div>
            </div>
            <div className="flex flex-col w-1/2 justify-center items-center">
                <div className="h-1/2 w-1/2 sm:mb-20 flex justify-center items-center">
                    <div style={{backgroundColor:'rgb(245, 245, 245)'}} className="flex flex-row mt-5">
                    <iframe title="1"
                     src="https://embeds.beehiiv.com/c16524ed-ade6-4e7f-8c7f-8063fa95d143"
                     data-test-id="beehiiv-embed"
                     width="370"
                     height="270"
                     frameBorder="0"
                     scrolling="no"
                     backgroundColor='rgb(245, 245, 245)'
                     style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: '0', backgroundColor: 'rgb(245, 245, 245)'
                     }}
                    ></iframe>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="h-1/2 flex flex-col p-2 m-4">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="h-1/2 flex flex-col p-2 m-4">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
