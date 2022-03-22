import React from "react";
import Rating from "react-rating";

const SingleTestomonial = ({ testomonial }) => {
  const { name, img, degisnation, description, rating, status } = testomonial;
  return (
    <>
      {status === "approved" && (
        <div className="py-4 ">
          <div className="flex pl-6 py-8 ">
            <div className="">
              <img className="w-16 h-16 rounded-full" src={img} alt="" />
            </div>
            <div className="my-auto mx-2">
              <p className="font-semibold">{name}</p>
              <p className="text-sm">{degisnation}</p>
              <Rating
                readonly
                className="text-yellow-400  pb-2 "
                initialRating={rating}
                emptySymbol="far fa-star "
                fullSymbol="fas fa-star "
              />
            </div>
          </div>
          <p className="px-6 text-sm text-gray-500 pb-2">{description}</p>
        </div>
      )}
    </>
  );
};

export default SingleTestomonial;
