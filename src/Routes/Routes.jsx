import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Collages from "../Pages/Collages/Collages";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("data.json")
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
