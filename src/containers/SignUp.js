import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../components/Title";

const SignUp = props =>
  <div className="grid-33 centered signup">
    <Title>Sign Up</Title>
    <h1>Sign Up</h1>

    {/*<validation-errors ng-show="vm.hasValidationErrors" errors="vm.validationErrors"></validation-errors>*/}

    <form>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button className="button">Sign Up</button>
      <NavLink className="button button-secondary" to="/signin">
        Sign In
      </NavLink>
    </form>
  </div>;

export default SignUp;
