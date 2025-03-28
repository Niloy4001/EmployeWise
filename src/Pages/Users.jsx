import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((response) => {
        setUsers(response.data.data);
        setTotalPages(
          [...Array(response.data.total_pages).keys()].map((i) => i + 1)
        );
        console.log(response.data.data);
        console.log(response.data.total_pages);
        // console.log('state',totalPages);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [pageNumber]);

  // handle pagination
  const handlePagination = (event) => {
    setPageNumber(Number(event.target.innerText));
    console.log(Number(event.target.innerText));
  };

  const handlePrevNext = (status) => {
    if (status == "prev") {
      pageNumber > 1 && setPageNumber(pageNumber - 1);
    } else {
      pageNumber < totalPages.length && setPageNumber(pageNumber + 1);
    }
  };

  // handle delete
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      const remainingUsers = users.filter((user) => user.id != id);
      setUsers(remainingUsers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      <Navbar></Navbar>
      <h1 className="text-4xl text-center mb-6">All Users</h1>
      {/* alll users */}
      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="border-2 border-purple-700 rounded-3xl p-4"
            >
              <div className="flex justify-between ">
                {/* avatar */}
                <div>
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                {/* edit and delet icon */}
                <div className="flex gap-2 items-center">
                  <Link to={`/update/${user.id}`} className="cursor-pointer">
                    <FaEdit />
                  </Link>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleDelete(user.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
              <div>
                <h1>
                  Name : {user.first_name} {user.last_name}
                </h1>
                <h1>Email : {user.email}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* pagination button */}
      <div className="flex gap-2 justify-center mt-7">
        <button onClick={() => handlePrevNext("prev")} className="btn">
          <RiArrowLeftDoubleLine />
        </button>
        {totalPages.map((btn) => (
          <button
            key={btn}
            className="btn"
            onClick={(event) => handlePagination(event)}
          >
            {btn}
          </button>
        ))}
        <button onClick={() => handlePrevNext("next")} className="btn">
          <RiArrowRightDoubleLine />
        </button>
      </div>
    </div>
  );
};

export default Users;
