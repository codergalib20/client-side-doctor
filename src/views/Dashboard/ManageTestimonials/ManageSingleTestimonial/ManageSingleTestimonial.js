import React from "react";
import Rating from "react-rating";

const ManageSingleTestimonial = ({
  testimonial,
  handleDeleteTestimonial,
  updateTestimonial,
}) => {
  const { name, img, rating, status, description, degisnation, _id } =
    testimonial;
  return (
    <div className=" m-4 flex justify-center text-center px-6 md:px-2 lg:px-2 shadow-lg  rounded-lg py-4 mx-6 lg:mx-2 md:mx-2 bg-blue-100 bg-opacity-30">
      <div>
        <div className="flex justify-center items-center px-4 my-4">
          <img className=" w-24 h-24 mx-auto rounded-full" src={img} alt="" />
        </div>
        <div className="">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-600 font-semibold">{degisnation}</p>
          <p className="text-gray-600 font-semibold p-4 w-72">{description}</p>
        </div>
        <Rating
          readonly
          className="text-[goldenrod] px-6 pb-2"
          initialRating={rating}
          emptySymbol="far fa-star "
          fullSymbol="fas fa-star "
        />
        <p className="text-gray-600 font-semibold">{status}</p>
        <div className="flex flex-col w-[60%] mx-auto">
          <button
            onClick={() => handleDeleteTestimonial(_id)}
            className="px-6 py-1 rounded-md bg-red-500 text-white mt-4"
          >
            Delete
          </button>
          {status === "pending" && (
            <button
              onClick={() => updateTestimonial(_id)}
              className="px-6 py-1 rounded-md bg-green-500 text-white mt-2"
            >
              update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageSingleTestimonial;
