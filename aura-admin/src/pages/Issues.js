import NavBar from "../components/ui/NavBar";
import React, { useRef, useState } from "react";
import IssueTabs from "../components/admin/IssueTabs";

const Issues = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#edf5f5",
        overFlow: "hidden",
      }}
    >
      <IssueTabs />
      
      <div style={{ display: "flex", alignItems: "center" }}>
     


      </div>
    </div>
  );
};

export default Issues;
