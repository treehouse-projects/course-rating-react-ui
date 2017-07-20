import React from "react";
import { connect } from "react-redux";

const AuthNav = props =>
  <nav>
    <a>
      Welcome {props.user.fullName}!
    </a>
    <a href="/logout">Sign Out</a>
  </nav>;

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(AuthNav);
