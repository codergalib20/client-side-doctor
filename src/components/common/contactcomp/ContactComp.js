import React from "react";
import "./contactcomp.css";

const ContactComp = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    alert("message successfully sent!");
  };
  return (
    <div
      id="contact"
      className="py-12 bg-[#317daf85] text-center text-2xl font-bold"
    >
      <h2 className="text-gray-700">
        Contact us for your,
        <br /> project <span className="">personally</span>
      </h2>
      <form onSubmit={formSubmit} className=" flex justify-center ">
        <div className="w-10/12 lg:w-6/12 md:8/12">
          <div className="mt-8  flex">
            <input
              required
              className="border w-3/6  m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none bg-gray-50"
              type="text"
              name="firstName"
              placeholder="FirstName"
            />
            <input
              required
              className="border w-3/6 m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none bg-gray-50"
              type="text"
              name="lastName"
              placeholder="LastName"
            />
          </div>
          <div className="flex ">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className=" w-3/6  border m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none bg-gray-50"
            />
            <input
              required
              type="text"
              name="Number"
              placeholder="Phone"
              className=" w-3/6  border m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none bg-gray-50"
            />
          </div>
          <textarea
            name="message"
            required
            rows="10"
            placeholder="Message"
            className="border w-full  m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none flex justify-start bg-gray-50"
          ></textarea>
          <input
            style={{
              background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
            }}
            type="submit"
            value="Send Message"
            className="border-none w-full md:w-auto lg:w-auto cursor-pointer   py-2 mt-4 text-gray-50 px-12 rounded-lg text-base"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactComp;
