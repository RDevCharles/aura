import NavBar from "../components/NavBar";
import React, { useRef, useState } from "react";


const AdminDashboard = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#edf5f5",
        overFlow: "hidden",
      }}
    >
      <NavBar username={props.user.name} />

      <div
        style={{
          color: "white",
          marginTop: "2rem",
          backgroundColor: "gold",
          width: "6rem",
          height: "2rem",
          borderRadius: ".3rem",
          top: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "2rem", marginRight: ".5rem" }}
          src={require("../assets/images/coins.png")}
        />
        <p style={{ color: "black", fontWeight: "bold" }}>
          {props.user.tokens}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}></div>
    </div>
  );
};

export default AdminDashboard;
