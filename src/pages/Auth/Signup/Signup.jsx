import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <form>
        <div className="signup-header">SIGN UP</div>
        <div className="signup-input">
          <label for="user-first">First Name</label>
          <input
            placeholder="John"
            className="input-element"
            type="text"
          ></input>
        </div>
        <div className="signup-input">
          <label for="user-last">Last Name</label>
          <input
            placeholder="Deo"
            className="input-element"
            type="text"
          ></input>
        </div>
        <div className="signup-input">
          <label for="user-email">Enter Email</label>
          <input
            placeholder="abc@gmail.com"
            className="input-element"
            type="text"
          ></input>
        </div>
        <div className="signup-input">
          <label for="user-password">Enter Password</label>
          <input
            placeholder="abcd@12345"
            className="input-element"
            type="password"
          ></input>
        </div>
        <div className="signup-input">
          <label for="user-confirm">Confirm Password</label>
          <input
            placeholder="abcd@12345"
            className="input-element"
            type="password"
          ></input>
        </div>
        <div>
          <button className="signup-btn" type="submit">
            SIGN UP
          </button>
        </div>
        <div>
          Already have an account ? {""}
          <Link to="/signin" className="login-link">
            SIGN IN
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
