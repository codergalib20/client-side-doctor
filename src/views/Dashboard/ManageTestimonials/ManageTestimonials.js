import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import ManageSingleTestimonial from "./ManageSingleTestimonial/ManageSingleTestimonial";
const ManageTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // DELETE
  const handleDeleteTestimonial = (id) => {
    axios.delete(`http://localhost:8000/testimonials/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        swal({
          title: "Good Job!",
          text: "This review is deleted successfully",
          icon: "success",
        });
        const remainingTestimonial = testimonials.filter(
          (allappointment) => allappointment._id !== id
        );
        setTestimonials(remainingTestimonial);
      }
    });
  };
  // UPDATE
  const updateTestimonial = (id) => {
    axios.put(`http://localhost:8000/testimonials/update/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        swal({
          title: "Good Job!",
          text: "This review is update successfully",
          icon: "success",
        });
        axios
          .get("http://localhost:8000/testimonials")
          .then((data) => setTestimonials(data.data));
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/testimonials")
      .then((data) => setTestimonials(data.data));
  }, []);

  return (
    <div className="m-1 min-h-screen">
      <h3 className="pt-6 px-4 text-xl font-bold">Manage All Testimonials</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <ManageSingleTestimonial
            handleDeleteTestimonial={handleDeleteTestimonial}
            updateTestimonial={updateTestimonial}
            testimonial={testimonial}
            key={testimonial._id}
          ></ManageSingleTestimonial>
        ))}
      </div>
    </div>
  );
};

export default ManageTestimonials;
