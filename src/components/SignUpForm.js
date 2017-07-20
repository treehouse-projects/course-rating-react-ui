import React from "react";
import { NavLink } from "react-router-dom";

class SignUpForm extends React.Component {
  state = {
    fullName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    disabled: false
  };
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.setState({ disabled: true });
          const {
            fullName,
            emailAddress,
            password,
            confirmPassword
          } = this.state;
          const userData = {
            fullName,
            emailAddress,
            password,
            confirmPassword
          };
          this.props.onSubmit(userData);
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={this.state.fullName}
          onChange={e => this.setState({ fullName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={this.state.emailAddress}
          onChange={e => this.setState({ emailAddress: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={this.state.confirmPassword}
          onChange={e => this.setState({ confirmPassword: e.target.value })}
        />
        <button className="button">Sign Up</button>
        <NavLink className="button button-secondary" to="/signin">
          Sign In
        </NavLink>
      </form>
    );
  }
}

export default SignUpForm;
