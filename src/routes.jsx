import { BrowserRouter , Routes , Route } from "react-router-dom";
import React from "react";
import Home1 from "./pages/HomePage";
import Cbt from "./pages/cbt";
import AboutMePage from "./pages/aboutuspage";
import ServicesPage from "./pages/servicespage";
import Signup from "./components/signup";
import LoginPage from "./components/login";
import ClientPageHome from "./pages/clientpageHome";
import Appointment from "./components/appointment";
import UserInfo from "./pages/profile";
import Contact from "./pages/contact";
import EmailVerification from "./pages/emailverification";


function Route1(){
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1/>}/>
            <Route index element={<Home1/>}/>
            <Route path="/cbt" element={<Cbt/>}/>
            <Route path="/link1" element={<AboutMePage/>}/>
            <Route path="/link2" element={<ServicesPage/>}/>
            <Route path="/link4" element={<Signup/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/clientpage" element={<ClientPageHome/>}/>
            <Route path="/appointment" element={<Appointment/>}/>
            <Route path="/profile" element={<UserInfo/>}/>
            <Route path="/link5" element={<Contact/>}/>
            <Route path="emailverification" element={<EmailVerification/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default Route1;