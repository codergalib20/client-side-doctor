import React from "react";

const MyOrder = ({ userAppointment }) => {
  const { address, email, name, phone,code } = userAppointment;
  return (
    <div className=" m-4 flex justify-center text-center px-6 md:px-2 lg:px-2 shadow-lg  rounded-lg py-4 mx-6 lg:mx-2 md:mx-2 bg-pink-100 bg-opacity-30">
      <div>
        <h2 className="text-lg font-bold">{address}</h2>
        <h2 className="text-lg font-bold">{email}</h2>
        <h2 className="text-lg font-bold">{code}</h2>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600 font-semibold mt-2">{phone}</p>
      </div>
    </div>
  );
};

export default MyOrder;
