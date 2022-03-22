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
      <p className="text-center text-3xl text-[#0FCFE9] mb-12 mt-16">
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
            className="px-24 py-2 rounded-md  text-white font-semibold"
            style={{
              background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
            }}
          >
            all serivces
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
