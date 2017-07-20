import React from "react";
import { NavLink } from "react-router-dom";

class SignInForm extends React.Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.setState({ disabled: true });
          this.props.onSubmit(this.state.email, this.state.password);
        }}
      >
        <input
          type="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button className="button">
          Sign In
        </button>
        <NavLink className="button button-secondary" to="/signup">
          Sign Up
        </NavLink>
      </form>
    );
  }
}

export default SignInForm;
