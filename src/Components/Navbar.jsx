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
    <div className="bg-[#29004E] shadow-sm">
      <div className="navbar  mb-10 w-[90%] mx-auto">
      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-[#29004E] border-none shadow-none lg:hidden text-white font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-white space-y-2 rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#29004E]">
        <li><Link to={"/"} className="text-white  text-lg">Home</Link></li>
        <li><Link to={"/users"} className="text-white  text-lg">Users</Link></li>
      </ul>
    </div>
    <Link to={"/"} className=" text-xl text-white font-bold">User Manager</Link>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={"/"} className="text-white  text-lg">Home</Link></li>
      <li><Link to={"/users"} className="text-white  text-lg">Users</Link></li>
    </ul>
  </div>
      <div className="navbar-end">
        <button className="btn btn-sm border-none bg-[#DD335A] text-white font-bold" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
