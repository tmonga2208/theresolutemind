import React from "react";
import "../css/aboutme.css"

function AboutMe({ img, name, jobtitle, aboutme }) {
  return (
    <div className="tt flex flex-col sm:flex-row mx-auto my-8 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full sm:w-2/5">
        <img src={img} alt="Profile" className="object-cover w-full h-full" />
      </div>
      <div className="w-full h-full sm:w-3/5 p-4">
        <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">{jobtitle}</p>
        <p className="mt-2 text-gray-700">{aboutme}</p>
      </div>
    </div>
  );
}

export default AboutMe;