import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MySingleAppointment from "./MySingleAppointment/MySingleAppointment";

const MyAppointment = () => {
  const { user } = useAuth();
  const [userAppointments, setUserAppointments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/userAppointments?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserAppointments(data));
  }, [user.email]);

  return (
    <div className="m-1 min-h-screen">
      <h3 className="pt-6 px-4 text-xl font-bold">My Appointments</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {userAppointments.map((userAppointment) => (
          <MySingleAppointment
            userAppointment={userAppointment}
            key={userAppointment._id}
          ></MySingleAppointment>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
