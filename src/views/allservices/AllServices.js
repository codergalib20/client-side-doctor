import axios from "axios";
import React, { useEffect, useState } from "react";
import ContactComp from "../../components/common/contactcomp/ContactComp";
import Footer from "../../components/common/footer/Footer";
import Navbar from "../../components/common/navbar/Navbar";
import SingleAllService from "./SingleAllService";

const AllServices = () => {
  const [allservices, setAllservices] = useState([]);
  useEffect(() => {
    axios.get("https://fierce-escarpment-92507.herokuapp.com/allAppointments").then((res) => {
      setAllservices(res.data);
    });
  }, []);
  console.log(allservices)
  return (
    <div>
      <Navbar />
      <div className="py-8">
        <div className="container mx-auto">
          <div className="grid xs:grid-cols-x sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {
              allservices.map((service, index) => (
                <SingleAllService category={service.category} key={index} service={service} />
              ))
            }
          </div>
        </div>
      </div>
      <ContactComp />
      <Footer />
    </div>
  );
};

export default AllServices;
