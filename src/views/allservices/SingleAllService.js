import React from "react";
import { Link } from "react-router-dom";

const SingleAllService = ({ service }) => {
  const {
    name,
    description,
    price,
    _id
  } = service;
  const cardStyles = {
    background: "rgba(202, 148, 148, 0.3)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(202, 148, 148, 0.3)",
    minHeight: '220px'
  }
  return (
    <>
      <div style={cardStyles} className="p-3 text-center flex item-center justify-between flex-col">
        <h4>${price}</h4>
        <p className="font-medium text-xl pb-2 capitalize ">{name}</p>
        <p className="text-sm">{description
          ?.slice(0, 30)}...</p>

        <Link to={`/services/${_id}`}>
          {" "}
          <button className=" text-md text-white bg-orange-500 py-2 px-3 border-2 border-yellow-600 rounded-full hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300 ease-linear">
            See Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default SingleAllService;
