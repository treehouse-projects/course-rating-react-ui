import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Title from "../components/Title";
import { userActions } from "../actions";

const SignIn = props => (
      <div className="grid-33 centered signin">
        <Title>Sign In</Title>
        <h1>Sign In</h1>

        {/*<validation-errors ng-show="vm.hasValidationErrors" errors="vm.validationErrors"></validation-errors>*/}

        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button onClick={e => { e.preventDefault(); props.submitSignIn(); }} className="button">Sign In</button>
          <NavLink className="button button-secondary" to="/signup">
            Sign Up
          </NavLink>
        </form>
      </div>
    );

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators({
  submitSignIn: () =>  userActions.fetchUser("sam@jones.com", "password")
}, dispatch);
 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
