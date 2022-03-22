import React from "react";

const MyOrder = ({ userAppointment }) => {
  const { serviceImg, price, serviceName } = userAppointment;
  return (
    <div className=" m-4 flex justify-center text-center px-6 md:px-2 lg:px-2 shadow-lg  rounded-lg py-4 mx-6 lg:mx-2 md:mx-2 bg-pink-100 bg-opacity-30">
      <div>
        <div className="flex justify-center items-center px-4 my-4">
          <div className="bg-blue-300 rounded-full flex justify-center items-center">
            <img className=" w-24 h-24 rounded-full" src={serviceImg} alt="" />
          </div>
        </div>
        <h2 className="text-lg font-bold">{serviceName}</h2>
        <p className="text-gray-600 font-semibold mt-2">BDT {price}</p>
      </div>
    </div>
  );
};

export default MyOrder;
