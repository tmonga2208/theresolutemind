import React from "react";
import '../css/footer.css';
import imgLogo from "../img/resolutee.png";
import { Link } from "react-router-dom";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer className="h-full mt-10" style={{backgroundColor: 'rgb(245, 245, 245)'}}>
            <div className="pikachu flex flex-col w-full sm:w-1/2">
                <div className="sm:mb-20">
                    <img className="w-1/2 m-5" src={imgLogo} alt="logo"/>
                    <p className="mt-5 ml-5">© {currentYear} | All Rights Reserved</p>
                </div>
                <div className="pikachu2 social flex flex-col sm:mt-5">
                    <p className="sm:pl-3 sm:ml-3">Follow Us On:</p>
                    <div className="sm:ml-3 flex flex-row">
                    <a href="https://www.linkedin.com/in/kriti-monga-6b769518b/" className="pr-1 pb-1 pt-1 m-2"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg></a>
                    <a href="https://www.instagram.com/the_resolutemind/" className="p-1 m-2"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg></a>
                    <a href="https://www.instagram.com/the_resolutemind/" className="p-1 m-2"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg></a>
                    <a href="https://www.instagram.com/the_resolutemind/" className="p-1 m-2"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full sm:w-1/2 justify-center items-center">
                <div className="h-1/2 w-1/2 sm:mb-20 flex justify-center items-center">
                    <div style={{backgroundColor:'rgb(245, 245, 245)'}} className="flex flex-row mt-5">
                    <iframe title="1"
                     src="https://embeds.beehiiv.com/c16524ed-ade6-4e7f-8c7f-8063fa95d143"
                     data-test-id="beehiiv-embed"
                     width="370"
                     height="270"
                     frameBorder="0"
                     scrolling="no"
                     style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: '0' ,backgroundColor: 'rgb(245, 245, 245)',
                     }}
                    ></iframe>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="h-1/2  flex flex-col p-2 m-4">
                    <h3 className="font-bold text-lg">Quick Links</h3>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="h-1/2 flex flex-col p-2 m-4">
                    <h3 className="font-bold text-lg">Quick Links</h3>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
