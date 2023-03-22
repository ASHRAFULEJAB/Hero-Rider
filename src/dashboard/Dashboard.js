import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./dashboardHeader";
import Sidebar from "./DashboardLayout";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
