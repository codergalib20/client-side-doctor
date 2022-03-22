import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import ManageAllAppointments from "./ManageAllAppointments/ManageAllAppointments";

const ManageOrder = () => {
  const [allAppointments, setAllAppointments] = useState([]);

  // DELETE
  const handleDeleteUser = (id) => {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ordered Appointment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          axios.delete(`https://fierce-escarpment-92507.herokuapp.com/orderedAppointments/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              swal("Poof! Your appointment file has been deleted!", {
                icon: "success",
              });
              const remainingAppointments = allAppointments.filter(
                (allappointment) => allappointment._id !== id
              );
              setAllAppointments(remainingAppointments);
            }
          });
        } else {
          swal("Appointment is safe!");
        }
      });

  };
  // UPDATE
  const updateTestimonial = (id) => {
    axios.put(`https://fierce-escarpment-92507.herokuapp.com/orderedAppointments/update/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        swal({
          title: "Good Job!",
          text: "Update successfully",
          icon: "success",
        });
        axios
          .get("https://fierce-escarpment-92507.herokuapp.com/orderedAppointments")
          .then((data) => setAllAppointments(data.data));
      }
    });
  };

  useEffect(() => {
    axios.get("https://fierce-escarpment-92507.herokuapp.com/orderedAppointments").then((res) => {
      setAllAppointments(res.data);
    });
  }, []);
  console.log(allAppointments)

  return (
    <div className="m-2 md:m-0">
      <h3 className="pt-6 px-8 text-xl text-center lg:text-left font-bold mb-4">
        Manage All Appointments
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 mx-6 md:mx-0 lg:mx-0 lg:mr-2">
        {allAppointments.map((appointment) => (
          <ManageAllAppointments
            handleDeleteUser={handleDeleteUser}
            key={appointment._id}
            appointment={appointment}
            updateTestimonial={updateTestimonial}
          ></ManageAllAppointments>
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
