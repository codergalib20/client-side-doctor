import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("https://fierce-escarpment-92507.herokuapp.com/services").then((data) => {
      setServices(data.data);
    });
  }, []);
  console.log(services)
  return (
    <div className="my-12">
      <p className="text-center text-3xl text-yellow-900 mb-12 mt-16">
        sevices that we provide
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 md:px-16 lg:px-24 gap-y-4">
        {services.slice(0, 6).map((service, i) => (
          <Service service={service} key={i}></Service>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/services">
          <button
            className="px-24  border-2 border-yellow-900 hover:border-yellow-50 transition-all duration-500 cursor-pointer outline-none bg-yellow-50 text-yellow-900 text-sm font-bold hover:bg-yellow-900 hover:text-yellow-50 py-2"
          >
            all serivces
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
