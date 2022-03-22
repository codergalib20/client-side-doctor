import axios from "axios";
import React, { useState } from "react";
import swal from 'sweetalert';
import useAuth from "../../../hooks/useAuth";
const MakeAdmin = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const requester = user.email;
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, requester };
    axios.put("https://fierce-escarpment-92507.herokuapp.com/users/admin", user).then((res) => {
      if (res.data.modifiedCount > 0) {
        const email = document.getElementById("email");
        email.value = "";
        swal("Good job!", "Admin create successfully", "success");
      } else {
        swal("Oops!", "Something is wrong!", "error");
      }
    })
      .catch(err => console.log(err))
  };
  return (
    <div className="h-screen">
      <div className=" pt-16">
        <h2 className="text-center font-bold text-lg lg:text-xl md:text-xl">
          Please Type email to make an admin
        </h2>
        <div>
          <form
            id="formSubmit"
            onSubmit={handleSubmit}
            className="flex justify-center my-8 "
          >
            <input
              className="focus:outline-none w-9/12 lg:w-6/12 py-2 px-4"
              type="email"
              onBlur={handleOnBlur}
              placeholder="Type Email"
              name="email"
              id="email"
            />
            <input
              className="cursor-pointer mx-4 px-5 py-2 bg-yellow-500 text-white rounded-md"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
