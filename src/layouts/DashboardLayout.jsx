import React from "react";
import { NavbarComponent } from "@/components/dashboard/Home/navbar";
import { useAuthContext } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { authToken } = useAuthContext();

  if (!authToken?.token || authToken.admin == true) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return (
    <div>
        <NavbarComponent/>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
