import React from "react";
import AboutInfo from "../../components/common/AboutInfo";
import ContactComp from "../../components/common/contactcomp/ContactComp";
import Doctors from "../../components/common/doctors/Doctors";
import Footer from "../../components/common/footer/Footer";
import Navbar from "../../components/common/navbar/Navbar";
import Services from "../../components/common/services/Services";
import SomeInfo from "../../components/common/someInfo";
import Testomonials from "../../components/custom/Testimonials/Testimonials";
import Banner from "./Banner";
import Feature from "./Feature";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
       <Feature/>
      <AboutInfo />
      <Services />
      <div className="py-16">
        <p className="text-center font-bold mb-16 text-2xl">
          our testing facility
        </p>
        <SomeInfo />
      </div>
      <Testomonials />
      <Doctors />
      <ContactComp />
      <Footer />
    </div>
  );
};

export default Home;
