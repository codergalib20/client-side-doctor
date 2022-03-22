import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleAllService from '../allservices/SingleAllService';

const AppointmentCategory = () => {
  const { category } = useParams()
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("https://fierce-escarpment-92507.herokuapp.com/allAppointments").then((res) => {
      setServices(res.data);
    });
  }, []);
  const filterServices = services.filter(service => service?.category?.toLowerCase() === category?.toLowerCase())
  return (
    <div className='container mx-auto px-2 py-16'>
      <h1 className='text-2xl md:text-5xl capitalize text-center pb-5'>{category} All serivces</h1>
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          filterServices?.map((service, index) => (
            <SingleAllService service={service} key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default AppointmentCategory;