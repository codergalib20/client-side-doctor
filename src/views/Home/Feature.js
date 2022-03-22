import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const Feature = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("/feature.json")
      .then(res => res.json())
      .then(data => setFeatures(data))
      .catch(err => console.log(err));
  }, [])
  const infoBackground = {
    background: "rgba(255, 255, 255, 0.2)",
    boShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    border: " 2px solid rgba(255, 255, 255, 0.3)",
  }
  return (
    <div>
      <div className="container mx-auto py-7">
        <div className="grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-3">
          {features.map((feature, index) => (
            <div key={index} className=" rounded-xl overflow-hidden hover:bg-orange-300 transition-all duration-300 w-full">
              <div className="w-full">
                <img className="w-full" src={feature?.img} alt={feature?.title} />
              </div>
              <div style={infoBackground} className="position relative -top-16 p-4 flex items-center justify-center flex-col">
                <h3 className="text-center py-2 text-2xl font-bold">{feature?.title}</h3>
                <p className="text-center py-2">{feature?.description?.slice(0, 40)}...</p>
                <Link to={`/categories/${feature?.title?.toLowerCase()}`}>
                  <button className="text-md text-white bg-orange-500 py-2 px-3 border-2 border-yellow-600 rounded-full hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300 ease-linear">View Appointment</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;