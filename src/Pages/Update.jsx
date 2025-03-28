import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const { data } = useLoaderData();
  const { last_name, id, first_name, email, avatar } = data.data || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fName = e.target.first_name.value;
    const lName = e.target.last_name.value;
    const email = e.target.email.value;

    const info = { first_name: fName, last_name: lName, email, avatar, id };
    console.log(info);

    try {
      axios.put(`https://reqres.in/api/users/${id}`, info);
      toast.success("Updated Sucessfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-lvh justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset" onSubmit={handleSubmit}>
            <label className="fieldset-label">First Name</label>
            <input
              type="text"
              className="input"
              name="first_name"
              defaultValue={first_name}
              placeholder="First Name"
            />
            <label className="fieldset-label">Last Name</label>
            <input
              type="text"
              className="input"
              name="last_name"
              defaultValue={last_name}
              placeholder="Last Name"
            />
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              defaultValue={email}
              placeholder="Email"
            />

            <button className="btn btn-neutral mt-4">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
