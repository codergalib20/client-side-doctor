import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import pic from "../../assets/images/3.png";
import pic2 from "../../assets/images/1.png";
import pic3 from "../../assets/images/2.png";

import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="custom-slider flex">
          <img src={pic3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="custom-slider">
          {" "}
          <img src={pic2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="custom-slider">
          {" "}
          <img src={pic} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
