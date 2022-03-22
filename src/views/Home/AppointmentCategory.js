import React from 'react';
import { useParams } from 'react-router-dom';

const AppointmentCategory = () => {
  const {category} = useParams()
  console.log(category)
  return (
    <div>
      
    </div>
  );
};

export default AppointmentCategory;