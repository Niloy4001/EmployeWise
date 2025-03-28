import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Log Out successfull")
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm mb-10">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl">User Manager</Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <button className="btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
