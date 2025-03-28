import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Users from "../Pages/Users";
import axios from "axios";
import Update from "../Pages/Update";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/users",
    element: <Users></Users>,
  },
  {
    path: `/update/:id`,
    element: <Update></Update>,
    loader: ({params})=> axios.get(`https://reqres.in/api/users/${params.id}`)
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;