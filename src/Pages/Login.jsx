import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import {  useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const { state } = useLocation();


    const handleSubmit =async (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const info = {email,password}
        console.log(info);
        try {
          const res =  await axios.post(`https://reqres.in/api/login`,info)
          console.log(res.data.token);
          toast.success("Log In successfull")
          localStorage.setItem("token", res.data.token)
          navigate(state ? `${state}` : "/users");
       
          
        } catch (error) {
            console.log(error);
            console.log(error.response.data.error);
            toast.error(error.response.data.error)
            
        }
        
    }
  return (
    <div className="flex h-lvh justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl font-bold text-[#29004E] text-center mb-6">Log In</h1>
        <div className="card-body">
          <form className="fieldset" onSubmit={handleSubmit}>
            <label className="fieldset-label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" />
            <button className="btn bg-[#DD335A] text-white font-bold mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
