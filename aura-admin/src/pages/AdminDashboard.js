import React, { useRef, useState } from "react";
import AdminCharts from "../components/admin/AdminCharts";

const AdminDashboard = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        overFlow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <AdminCharts />
      </div>
    </div>
  );
};

export default AdminDashboard;
