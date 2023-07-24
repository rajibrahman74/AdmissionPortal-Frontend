import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Collages from "../Pages/Collages/Collages";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import CollageDetails from "../Pages/Home/UnearthingColleges/CollageDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/card-datas"),
      },
      {
        path: "collagedetails/:id",
        element: <CollageDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/card-datas/${params.id}`),
      },
      {
        path: "/collages",
        element: <Collages />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
