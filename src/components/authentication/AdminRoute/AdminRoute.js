import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import loader from "../../../assets/icons/loader.svg";

const AdminRoute = ({ children }) => {
  let location = useLocation();
  const { user, loading, admin } = useAuth();
  if (loading) {
    return (
      <div className="w-12 mt-4 mx-auto">
        <img src={loader} alt="" />
      </div>
    );
  }
  if (user?.email && admin) {
    return children;
  } else {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }
};

export default AdminRoute;
