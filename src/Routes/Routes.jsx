import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Community from "../Pages/Community/Community";
import Blogs from "../Pages/Blogs/Blogs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Packages from "../Components/Packages/Packages";
import PackageDetais from "../Components/Packages/PackageDetais";
import MyWishlist from "../Pages/Dashboard/Tourist/MyWishlist";
import MyBookings from "../Pages/Dashboard/Tourist/MyBookings";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import MyAssignedTours from "../Pages/Dashboard/tourGuide/MyAssignedTours";
import MyProfile from "../Pages/Dashboard/myProfile/MyProfile";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "community",
          element: <Community></Community>
        },
        {
          path: "blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "aboutUs",
          element: <AboutUs></AboutUs>
        },
        {
          path: "contactUs",
          element: <ContactUs></ContactUs>
        },
        {
          path: "package",
          element: <Packages></Packages>
        },
        {
          path: "package/:id",
          element: <PackageDetais></PackageDetais>,
          loader: ({params}) => fetch(`https://top-ten-travel-server.vercel.app/package/${params.id}`)
        }
      ]
    },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <MyProfile></MyProfile>            
          },
           // admin route
          {
            path: "addPackage",
            element: <AddPackage></AddPackage>
          },
          {
            path: "manageUsers",
            element: <ManageUsers></ManageUsers>
          },

          // tour guide route
          {
            path: "assignedTour",
            element: <MyAssignedTours></MyAssignedTours>
          },
          // tourist route
          {
            path: 'bookings',
            element: <MyBookings></MyBookings>
          },
          {
            path: 'wishlist',
            element: <MyWishlist></MyWishlist>
          }
        ]
      }
  ]);