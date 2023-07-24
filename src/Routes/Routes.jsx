import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Collages from "../Pages/Collages/Collages";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import CollageDetails from "../Pages/Home/UnearthingColleges/CollageDetails";
import CollegeList from "../Pages/Admission/CollegeList";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://admissionportal-backend.vercel.app/card-datas"),
      },
      {
        path: "collagedetails/:id",
        element: <CollageDetails />,
        loader: ({ params }) =>
          fetch(
            `https://admissionportal-backend.vercel.app/card-datas/${params.id}`
          ),
      },
      {
        path: "/collages",
        element: <Collages />,
        loader: () =>
          fetch("https://admissionportal-backend.vercel.app/card-datas"),
      },
      {
        path: "/admission",
        element: <CollegeList />,
        loader: () =>
          fetch("https://admissionportal-backend.vercel.app/card-datas"),
      },
      {
        path: "/admission/:id",
        element: <AdmissionForm />,
      },
      {
        path: "/my-college",
        element: <MyCollege />,
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
