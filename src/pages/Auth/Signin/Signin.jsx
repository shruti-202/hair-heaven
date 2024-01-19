import React from "react";
import { Link } from "react-router-dom";
import "../Signup/Signup";

function Signin() {
  return (
    <div className="signin-container">
      <form>
        <div className="signin-header">SIGN IN</div>
        <div className="signin-input">
          <label for="user-email">Enter Email</label>
          <input
            placeholder="abc@gmail.com"
            className="input-element"
            type="text"
          ></input>
        </div>
        <div className="signin-input">
          <label for="user-password">Enter Password</label>
          <input
            placeholder="abcd@12345"
            className="input-element"
            type="password"
          ></input>
        </div>
        <div>
          <button className="signin-btn" type="submit">
            SIGN IN
          </button>
        </div>
        <div>
          <button className="signin-guest-btn" type="submit">
            SIGN IN As GUEST
          </button>
        </div>
        <div>
          Don't have an Account ? {""}
          <Link to="/signup" className="login-link">
            SIGN UP
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
