import React from "react";
import swal from "sweetalert";
import "./contactcomp.css";

const ContactComp = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    swal("Thanks!", "Our team will replay on your mail", "success")
  };
  return (
    <div
      id="contact"
      className="py-12 bg-yellow-900 text-center text-2xl font-bold mb-8"
    >
      <h2 className="text-gray-50">
        Contact us
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
            type="submit"
            value="Send Message"
            className="mt-4 border-2 border-yellow-900 hover:border-yellow-50 transition-all duration-500 cursor-pointer outline-none bg-yellow-50 text-yellow-900 text-sm font-bold hover:bg-yellow-900 hover:text-yellow-50 py-2 px-5"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactComp;
