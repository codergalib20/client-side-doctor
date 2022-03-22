import React from "react";

const ManageAllOrderes = ({ appointment, handleDeleteUser,updateTestimonial }) => {
  const { name, email, price, serviceName, _id, status } = appointment;
  return (
    <div className="px-2 rounded-md py-4 m-2 md:m-1 lg:m-2 bg-blue-200  ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex  items-center justify-start  px-2 my-2 mr-4 md:mr-0">
          <div className="ml-4">
            <h2 className="text-base font-bold">{serviceName}</h2>
            <p className=" font-semibold">${price}</p>
          </div>
        </div>
        <div className="flex flex-col ml-4 justify-center items-center lg:items-start md:items-start my-2 lg:my-0 md:my-0">
          <div className="bg-[#1090a7] text-sm  text-gray-200 py-2 px-3 rounded-full mb-2">
            <p>ordered from</p>
          </div>
          <div className=" text-gray-700 text-center lg:text-left md:text-left text-sm w-full">
            {" "}
            <p>Order From: {name}</p>
            <p>User Email: {email}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center mx-4 my-2">
          <button
            onClick={() => handleDeleteUser(_id)}
            className="bg-red-500 text-white my-1 w-full md:w-2/4 lg:w-2/4 ml-auto rounded-md py-2 text-sm px-4"
          >
            Delete
          </button>
          <button
            onClick={() => updateTestimonial(_id)}
            className="bg-red-500 text-white my-1 w-full md:w-2/4 lg:w-2/4 ml-auto rounded-md py-2 text-sm px-4"
          >
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrderes;
