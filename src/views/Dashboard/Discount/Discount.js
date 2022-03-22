import axios from "axios";
import React, { useEffect, useState } from "react";

const Discount = () => {
  const [discount, setDiscount] = useState([]);
  useEffect(() => {
    axios.get("https://fierce-escarpment-92507.herokuapp.com/discount").then((res) => {
      setDiscount(res.data);
    });
  }, []);
  const handleDelete = (id) => {
    axios.delete(`https://fierce-escarpment-92507.herokuapp.com/discount/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        alert("deleted successfully!");
        const remainingDiscount = discount.filter((disc) => disc._id !== id);
        setDiscount(remainingDiscount);
      }
    });
  };
  return (
    <div className="mt-4 lg:mt-20 ml-6 text-center h-screen md:h-[83.5vh] lg:h-fit">
      {discount.map((dis) => (
        <div
          key={dis._id}
          className="grid grid-cols-31 md:grid-cols-2 lg:grid-cols-3 gap-2 px-12 md:px-2 lg:px-0"
        >
          <div className="bg-blue-100 py-6 rounded-lg">
            <p>Total for Discount </p>
            <p className="font-semibold mt-2 text-lg">{dis.total}</p>
            <button
              onClick={() => handleDelete(dis._id)}
              className="bg-red-500 text-white px-6 py-1 mt-2 rounded-md"
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discount;
