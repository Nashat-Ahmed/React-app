import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { isAuth } = useSelector((state) => state.login);
  console.log(isAuth, "isAuth");
  return <div>{isAuth ? <Navigate to={"/dashoard"} /> : children}</div>;
}
