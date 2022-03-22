import React from "react";
import Footer from "../../components/common/footer/Footer";
import Navbar from "../../components/common/navbar/Navbar";
import img from "../../assets/images/12.png";
import AboutInfo from "../../components/common/AboutInfo";
import ContactComp from "../../components/common/contactcomp/ContactComp";
import SomeInfo from "../../components/common/someInfo";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="my-16">
        <img className="h-[50vh] md:h-[80vh]" width="100%" src={img} alt="" />
      </div>
      <SomeInfo />
      <div className="my-16">
        <AboutInfo />
      </div>
      <ContactComp />
      <Footer />
    </div>
  );
};

export default About;
