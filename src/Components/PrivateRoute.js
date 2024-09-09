import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { isAuth } = useSelector((state) => state.login);
  return <div>{isAuth ? children : <Navigate to={"/login"} />}</div>;
}
