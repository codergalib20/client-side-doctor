import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageAllAppointments from "./ManageAllAppointments/ManageAllAppointments";

const ManageOrder = () => {
  const [allAppointments, setAllAppointments] = useState([]);

  // DELETE
  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:8000/appointments/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        alert("deleted successfully!");
        const remainingAppointments = allAppointments.filter(
          (allappointment) => allappointment._id !== id
        );
        setAllAppointments(remainingAppointments);
      }
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8000/allAppointments").then((res) => {
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
          ></ManageAllAppointments>
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
