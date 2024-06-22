import React from "react";
import { Link } from "react-router-dom";

function Services2({ img, name, jobtitle, aboutme }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
    <div style={{width:'80vw'}} className="cd flex flex-col-reverse sm:flex-row w-full my-20 bg-white shadow-md overflow-hidden">
      <div className="w-full h-full sm:w-3/5 p-4">
        <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
        <p className="mt-2 text-gray-700">{aboutme}</p>
        <Link to="/appointment"><button className="bg-red-500 text-white p-2 my-5 rounded hover:shadow-lg">Book Now</button></Link>
      </div>
      <div className="w-full sm:w-2/5 xy-20">
        <img src={img} alt="Profile" className="object-cover w-full h-full" />
      </div>
    </div>
   </div>
  );
}

export default Services2;