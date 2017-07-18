import React from "react";
import { NavLink } from "react-router-dom";
import { breadcrumbActions } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SignIn extends React.Component {
  componentWillMount() {
    this.props.setTitle("Sign In");
  }
  render() {
    return (
      <div className="grid-33 centered signin">
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
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setTitle: title => breadcrumbActions.updateTitle(title)
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
