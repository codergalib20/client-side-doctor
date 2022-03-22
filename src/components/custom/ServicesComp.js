import React from "react";
import { Link } from "react-router-dom";

const ServicesComp = () => {
  return (
    <div className="py-8">
      <h2 className="text-center  text-[#0FCFE9] mb-8 text-2xl font-semibold">
        Services we provide
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 md:px-36 lg:px-36 gap-8">
        <div
          className="flex justify-center py-[3.5rem] rounded-lg"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/tablet-pharmacy-online-concept_1284-16210.jpg?w=740")`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-center">
            <h4 className="my-2 text-black font-medium text-lg">
              Find A Pharmacy
            </h4>
            <Link to="/services">
              <button
                className="mx-auto bg-green-600 px-6 py-2 rounded"
                style={{
                  color: "white",
                  background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                }}
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div
          className="flex justify-center py-[3.5rem] rounded-lg"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/world-science-day-arrangement-with-microscope_23-2149112668.jpg?w=900")`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-center">
            <h4 className="my-2 text-black font-medium text-lg">
              Find A Pharmacy
            </h4>
            <Link to="/services">
              <button
                className="mx-auto bg-green-600 px-6 py-2 rounded"
                style={{
                  color: "white",
                  background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                }}
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div
          className="flex justify-center py-[3.5rem] rounded-lg"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/front-view-doctor-with-medical-mask-posing-with-crossed-arms_23-2148445082.jpg?w=900")`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-center">
            <h4 className="my-2 text-black font-medium text-lg">
              Find A Pharmacy
            </h4>
            <Link to="/services">
              <button
                className="mx-auto bg-green-600 px-6 py-2 rounded"
                style={{
                  color: "white",
                  background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                }}
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
