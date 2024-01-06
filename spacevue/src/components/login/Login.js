import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./login.css";
import Dashboard from "../dashboard/Dashboard";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    if (email === "test@space.com" && password === "Space123") {
      setIsLoggedIn(true);
    } else {
      alert(
        "Please enter correct test@space.com as email and Space12 as  password"
      );
    }
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }
  return (
    <div className="wrap d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3 p-3 ">Login form</h2>
        <Form
          className="needs-validation p-2 m-2"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div class="invalid-feedback">Please Enter Email Address</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" form-label>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div class="invalid-feedback">Please Enter Password</div>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            Log in
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
