import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Redux/slice";

function LogIn() {
  const [apiData, setApiData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios.get("http://localhost:3030/users").then((res) => {
      setApiData(res.data);
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    const user = apiData?.find(
      (user) => user?.email === email && user?.password === password
    );
    if (user) {
      dispatch(
        login({
          email,
          password,
        })
      );
      localStorage.setItem("user", user.name);
      navigate("/dashboard");
    } else {
      alert("user not found please signup or check your credentials");
    }
  }

  return (
    <div>
      <div className="login-bg">
        <img src="" alt="" />
        <form className="login-form">
          <div className="login-form-child">
            <h1>LogIn</h1>
            <div className="form-group">
              <label for="exampleInputEmail1">Email Id</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <button
              disabled={email === "" || password === ""}
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Submit
            </button>
            <div className="login-bottom">
              <p className="bottom-left">Create an account</p>{" "}
              <Link to={"/signup"} className="bottom-right">
                Signup
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
