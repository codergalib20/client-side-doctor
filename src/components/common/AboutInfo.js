import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/about.png";

const AboutInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-12">
      <div className="px-12">
        <img width="80%" className="mx-auto" src={img} alt="" />
      </div>
      <div className="text-center md:text-center lg:text-left">
        <h2 className="text-4xl font-medium leading-normal">
          Exceptional Dental <br /> Care, on Your Terms
        </h2>
        <p className="text-gray-400 text-xl pr-4 md:pr-8 px-4 md:px-8 lg:px-0  lg:pr-28 mt-4 mb-4  leading-normal">
          {" "}
          The need for speed is a major reason why the government chose to work
          with retail clinics that are more accessible than most primary care
          offices. However, the American Medical Association (AMA), the National
          Community Pharmacists Association (NCPA), and the American Pharmacists
          Association (APhA) have criticized the administration's approach.
        </p>
        <Link to="/services">
          <button
            className=" border-2 border-yellow-900 hover:border-yellow-50 transition-all duration-500 cursor-pointer outline-none bg-yellow-50 text-yellow-900 text-sm font-bold hover:bg-yellow-900 hover:text-yellow-50 py-2 px-5"
          >
            LEARN MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutInfo;
