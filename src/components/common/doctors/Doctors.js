import React from "react";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";

const Doctors = () => {
  return (
    <div className="">
      <p className="text-center font-bold text-2xl">Our Doctors</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 md:px-20 lg:px-24 pb-16">
        <div className="px-4">
          <img src={img1} alt="" />
        </div>
        <div className="px-4">
          {" "}
          <img src={img2} alt="" />
        </div>
        <div className="px-4">
          {" "}
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
