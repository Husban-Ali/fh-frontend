import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "@/pages/Auth/Login";
import Contact from "@/pages/home/Contact";
import MediaProcurement from "../pages/home/MediaProcurement";
import Franchise from "../pages/home/Franchise";
import Corporate from "../pages/home/Corporate";
import Careers from "../pages/home/Careers";
import Admin from "@/pages/Admin/Admin";
import Dashboard from "@/pages/Admin/Dashboard";
import AdminLayout from "@/layouts/AdminLayout";
import Orders from "@/pages/Admin/Orders";
import Inquiries from "@/pages/Admin/Inquiries";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import Home from "@/pages/Dashboard/Home";
import Pickup from "@/pages/Dashboard/Pickup";
import Branch from "@/pages/Dashboard/Branch";
import Rate from "@/pages/Dashboard/Rate";
import OrderListing from "@/pages/Dashboard/OrderListing";
import OrderDescriptiom from "@/pages/Dashboard/OrderDescriptiom";
import Tracking from "@/pages/Dashboard/Tracking";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/home",
        element: <Home />,
      },
      {
        path: "/dashboard/pickup",
        element: <Pickup />,
      },
      {
        path: "/dashboard/branch",
        element: <Branch />,
      },
      {
        path: "/dashboard/rate-calculator",
        element: <Rate />,
      },
      {
        path: "/dashboard/orders",
        element: <OrderListing />,
      },
      {
        path: "/dashboard/orders/:id",
        element: <OrderDescriptiom />,
      },
      {
        path: "/dashboard/track-order/:trackingNo",
        element: <Tracking />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/home",
        element: <Admin />,
      },

      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/admin/inquiries",
        element: <Inquiries />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/mediaprocurement",
    element: <MediaProcurement />,
  },
  {
    path: "/corporate",
    element: <Corporate />,
  },
  {
    path: "/career",
    element: <Careers />,
  },
  {
    path: "/franchise",
    element: <Franchise />,
  },
]);

export default router;
