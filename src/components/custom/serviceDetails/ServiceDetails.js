import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import swal from 'sweetalert';
import img from "../../../assets/images/medial.png";
import useAuth from "../../../hooks/useAuth";
import AboutInfo from "../../common/AboutInfo";
import ContactComp from "../../common/contactcomp/ContactComp";
import Footer from "../../common/footer/Footer";
import Navbar from "../../common/navbar/Navbar";
const ServiceDetails = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const [servicesDetails, setServicesDetails] = useState({});
  const { serviceId } = useParams();
  const {
    name,
    price,
    category,
    code,
    description
  } = servicesDetails;
  console.log(serviceId);

  const onSubmit = (data) => {
    const OrderPrice = price;
    data.price = OrderPrice;
    data.serviceName = name;
    data.productCode = code;
    data.code = code;
    data.category = category;
    data.status = "pending For Booking"
    // sending appointments to the database

    axios.post("https://fierce-escarpment-92507.herokuapp.com/orderedAppointments", data).then((res) => {
      if (res.data.insertedId) {
        swal({
          title: "Good job!",
          text: "successfully appointment booked!",
          icon: "success",
        });
      }
    });
    reset();
  };

  useEffect(() => {
    axios.get(`https://fierce-escarpment-92507.herokuapp.com/appointment/${serviceId}`).then((res) => {
      setServicesDetails(res.data);
    });
  }, [serviceId]);
  return (
    <div>
      <Navbar />
      <div
        className="items-center flex"
        style={{
          height: "60vh",
          background: "rgba(50, 50, 50, 0.30)",
          backgroundImage: `url(${img})`,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="">
          <p className="text-4xl font-bold pl-6 text-white">
            Want to know more?
          </p>
          <p className="text-lg pl-6 font-bold text-white">
            this service has really some great features
          </p>
        </div>
      </div>
      <div className="text-center font-semibold text-[#e83a3b]">
        <p className="py-6">If you book any services first take the description</p>
        <div className="text-justify px-3 py-6"> 
           <h3 className="">{name}</h3>
           <p className="text-md font-medium">{description}</p>
        </div>
        <div className="flex justify-center w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[100%] md:w-[80%] lg:w-[60%] mx-4 lg:mx-12"
          >
            <input
              required
              {...register("name")}
              type="text"
              defaultValue={user.displayName}
              placeholder="name"
              className="border p-2 focus:outline-none focus:border-pink-400 w-full text-base"
            />
            <br />
            <input
              required
              {...register("email")}
              type="email"
              defaultValue={user.email}
              placeholder="Email"
              className="border mt-2 p-2 focus:outline-none focus:border-pink-400 w-full text-base"
            />
            <br />
            <input
              required
              {...register("phone")}
              type="text"
              placeholder="Phone"
              className="border mt-2 p-2 focus:outline-none focus:border-pink-400 w-full text-base"
            />
            <br />
            <p className=" mt-2 p-2 border w-full text-base text-left">
              Price with discount (if applicable) BDT {Number(price)}
            </p>
            <textarea
              required
              {...register("address")}
              type="text"
              placeholder="Address"
              className="border  mt-2 justify-start px-2 h-28 focus:outline-none focus:border-pink-400 w-full text-base"
            />
            <div className="">
              <input
                style={{
                  background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                }}
                type="submit"
                value="Book Appointment Now"
                className="cursor-pointer w-full mt-3 lg:mt-0 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2   sm:w-auto sm:text-sm"
              />
            </div>
          </form>
        </div>
      </div>
      <p className="text-center text-2xl pt-24 font-semibold text-[#0FCFE9]">
        Why choose us
      </p>
      <AboutInfo />
      <ContactComp />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
