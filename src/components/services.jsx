import React from "react";
import "../css/services.css"

function Services({ img, name, jobtitle, aboutme }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
    <div style={{width:'80vw'}} className="cd flex flex-col sm:flex-row w-full my-20 bg-white shadow-md overflow-hidden">
      <div className="w-full sm:w-2/5 xy-20">
        <img src={img} alt="Profile" className="object-cover w-full h-full" />
      </div>
      <div className="w-full sm:w-3/5 p-4">
        <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
        <p className="mt-2 text-gray-700">{aboutme}</p>
        <button className="bg-red-500 text-white p-2 my-5 rounded hover:shadow-lg">Learn More</button>
      </div>
    </div>
    </div>
  );
}

export default Services;