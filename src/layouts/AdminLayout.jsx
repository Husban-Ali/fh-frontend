import React from "react";
import { AdminSidebar } from "@/components/dashboard/Admin/admin-sidebar";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";
const AdminLayout = () => {
  const { authToken } = useAuthContext();

  if (!authToken?.token || authToken?.admin == false) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return (
    <main className="flex">
      <AdminSidebar />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
