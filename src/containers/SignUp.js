import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userActions } from "../actions";
import Title from "../components/Title";
import SignUpForm from "../components/SignUpForm";
import ValidationErrors from "../components/ValidationErrors";

const SignUp = props =>
  <div className="grid-33 centered signup">
    <Title>Sign Up</Title>
    <h1>Sign Up</h1>
    <ValidationErrors />

    <SignUpForm onSubmit={props.submitSignUp} />
  </div>;

const mapDispatchToProps = dispatch => bindActionCreators({
  submitSignUp: userData =>  userActions.sendCreateUser(userData)
}, dispatch);
 
export default connect(null, mapDispatchToProps)(SignUp);
