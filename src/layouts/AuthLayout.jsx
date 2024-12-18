import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { authToken } = useAuthContext();

  if (authToken?.token && authToken.admin == true) {
    return <Navigate to={"/admin/dashboard"} replace />;
  } else if (authToken?.token) {
    return <Navigate to={"/dashboard/home"} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
