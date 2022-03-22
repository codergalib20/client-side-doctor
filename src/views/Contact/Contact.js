import React from "react";
import ContactComp from "../../components/common/contactcomp/ContactComp";
import Footer from "../../components/common/footer/Footer";
import Navbar from "../../components/common/navbar/Navbar";
import img from "../../assets/images/contact.png";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <img width="100%" src={img} alt="" />
      </div>
      <ContactComp />
      <Footer />
    </div>
  );
};

export default Contact;
