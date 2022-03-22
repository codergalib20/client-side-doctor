import axios from "axios";
import React, { useEffect, useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestomonial from "./SingleTestimonial/SingleTestimonial";
import "./Testimonials.css";


SwiperCore.use([Pagination]);

const Testomonials = () => {
  const [testomonials, setTestomonials] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/testimonials")
      .then((data) => setTestomonials(data.data));
  }, []);
  console.log(testomonials)
  return (
    <div className="pt-8 pb-24 sm:mx-16 mx-12 lg:mx-24 ">
      <h2 className="text-center pb-8 text-4xl font-bold text-gray-700">
        Testomonials
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {testomonials.map(
          (testomonial) =>
            testomonial?.status === "approved" && (
              <SwiperSlide key={testomonial._id} className="shadow-md  my-2">
                <SingleTestomonial
                  key={testomonial._id}
                  testomonial={testomonial}
                ></SingleTestomonial>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default Testomonials;
