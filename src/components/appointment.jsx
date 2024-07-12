import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from './navbar';
import Footer from './footer';
import '../css/appointment.css'

function Appointment() {
    React.useEffect(() => {
        emailjs.init("2eSq7H8WVNCOVRR_v");
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_esgs9zr', 'template_hov4fc2', e.target, '2eSq7H8WVNCOVRR_v')
            .then((result) => {
                alert('SUCCESS!');
            }, (error) => {
                alert('FAILED...', error);
            });
    };

    return (
        <div>
        <Navbar/>
        <div style={{maxWidth:'400px'}} className="ppt absolute top-1/2 left-1/2  w-full p-5 rounded transform -translate-x-1/2 -translate-y-1/2">
            <h1 className='tm text-black'>Request Appointment</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <label className='text-blCK' htmlFor="name">Name:</label><br />
                <input className='border-2 rounded p-1 border-gray-200 w-full' type="text" id="name" name="name" /><br />
                <label className='text-black' htmlFor="email">Email:</label><br />
                <input className='border-2 rounded p-1 border-gray-200 w-full' type="email" id="email" name="email" /><br />
                <label className='text-black' htmlFor="phone">Phone:</label><br />
                <input className='border-2 rounded p-1 border-gray-200 w-full' type="tel" id="phone" name="phone" /><br />
                <label className='text-black' htmlFor="message">Any Additional Information?:</label><br />
                <textarea className='border-2 rounded p-1 border-gray-200 w-full' id="message" name="message"></textarea><br />
                <button className='bg-green-500 p-2 rounded text-white w-66 h-66' type="submit" value="Submit">Submit</button>
            </form>
        </div>
        <div className='absolute top-3/4'>
        <Footer/>
        </div>
        </div>
    );
}

export default Appointment;