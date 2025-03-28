import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const { pathname } = useLocation();

  if (!token) {
    return <Navigate to={"/login"} state={pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
