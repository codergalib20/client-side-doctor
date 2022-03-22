import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { user, logOut } = useAuth();

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar ">
      <div className="logo">
        <Link to="/" className="text-black font-bold ">
          DOCTORS APP
        </Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link onClick={() => setClick(!click)} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => setClick(!click)} to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => setClick(!click)} to="/services">
            Book Appointments
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => setClick(!click)} to="/contact">
            Contact
          </Link>
        </li>
        {user?.email && (
          <li className="nav-item">
            <Link onClick={() => setClick(!click)} to="/dashboard">
              dashboard
            </Link>
          </li>
        )}
        {!user?.email && (
          <li className="nav-item">
            <Link onClick={() => setClick(!click)} to="/login">
              login
            </Link>
          </li>
        )}
        {user?.email && (
          <li className="nav-item">
            <Link onClick={logOut} to="/login">
              LogOut
            </Link>
          </li>
        )}
      </ul>
      <div className="hamburger cursor-pointer" onClick={handleClick}>
        {click ? (
          <FaTimes className="z-10" size={30} />
        ) : (
          <FaBars className="z-10" size={30} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
