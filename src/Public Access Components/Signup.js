import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let loginData = {
    name: name,
    email: email,
    password: password,
  };

  async function onSubmit() {
    await axios.post("http://localhost:3030/users", loginData).then((res) => {
      console.log(res);
    });
    navigate("/login");
  }
  return (
    <div>
      <div className="login-bg">
        <img src="" alt="" />
        <form className="signup-form">
          <div className="login-form-child">
            <h1>SignUp</h1>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form  -group">
              <label for="exampleInputEmail1">Email Id</label>
              <input
                type="email"
                className="form-control"
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
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <button
              disabled={name === "" || email === "" || password === ""}
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Submit
            </button>
            <div className="login-bottom">
              <p className="bottom-left">Already have an account</p>{" "}
              <Link to={"/login"} className="bottom-right">
                LogIn
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
