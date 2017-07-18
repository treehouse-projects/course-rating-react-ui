import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../components/Title";

const SignIn = props => (
      <div className="grid-33 centered signin">
        <Title>Sign In</Title>
        <h1>Sign In</h1>

        {/*<validation-errors ng-show="vm.hasValidationErrors" errors="vm.validationErrors"></validation-errors>*/}

        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button className="button">Sign In</button>
          <NavLink className="button button-secondary" to="/signup">
            Sign Up
          </NavLink>
        </form>
      </div>
    );
 
export default SignIn
