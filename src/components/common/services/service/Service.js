import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const {
    serviceName,
    servicesShortDescription,
    servicePrice,
    serviceImg,
    _id,
  } = service;
  return (
    <div className="flex justify-center text-center  shadow-sm hover:shadow-lg rounded-lg pb-4 mx-2 border">
      <div className="font-sans pb-4">
        <div className="flex justify-center ">
          <img className="h-48 w-full" src={serviceImg} alt="" />
        </div>
        <h2 className="text-lg font-bold uppercase pt-4">{serviceName}</h2>
        <p className="text-[#0FCFE9]  font-semibold pt-2">
          BDT: {servicePrice}
        </p>
        <p className="text-gray-600 pt-2 px-4">{servicesShortDescription}</p>
        <Link to={`services/${_id}`}>
          <button
            className="px-12 py-2 rounded-md text-white font-semibold mt-4"
            style={{
              background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
            }}
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
