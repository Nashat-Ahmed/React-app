import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const userName = localStorage.getItem("user");
  const navigate = useNavigate();
  const email = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).login
  ).user.email;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Welcome, {userName}!!</h1>
      <h5>{email}</h5>
      <button
        className="btn btn-warning"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Back to Menu
      </button>
    </div>
  );
}

export default UserDetails;
