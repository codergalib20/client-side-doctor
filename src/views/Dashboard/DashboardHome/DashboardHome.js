import React from "react";
import useAuth from "../../../hooks/useAuth";
// import useAuth from "../../../hooks/useAuth";

const DashBoardHome = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-screen  lg:min-h-screen ">
      <div className="pt-8 text-4xl text-center font-bold  ">
        <h2 className="pb-2">Welcome to DashBoard</h2>
        <button className=" rounded-md py-2 px-4 font-normal text-base">
          Your Profile
        </button>
        <div
          style={{
            background: "linear-gradient(to right top, #19D3B1, #0FCFE9)",
          }}
          className="mt-4 text-gray-700 rounded-md py-16  w-96  mx-auto  text-base font-normal"
        >
          <p>Name:{user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className=" flex h-10/12 justify-center">
          <img
            className="h-full rounded-lg w-full lg:w-7/12 lg:-mt-20 -mt-8"
            src="https://i.ibb.co/T09r0Zd/site-stats-concept-illustration-114360-1509-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
