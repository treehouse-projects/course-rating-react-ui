import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userActions } from "../actions";

import { Title, SignInForm, ValidationErrors } from "../components";

const SignIn = props =>
  <div className="grid-33 centered signin">
    <Title>Sign In</Title>
    <h1>Sign In</h1>
    <ValidationErrors />
    <SignInForm onSubmit={props.submitSignIn} />
  </div>;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submitSignIn: (email, password) => userActions.fetchUser(email, password)
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(SignIn);
