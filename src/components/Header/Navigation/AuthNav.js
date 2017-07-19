import React from "react";
import { connect } from "react-redux";

const AuthNav = props =>
  <nav>
    <a href="#">
      Welcome {props.user.fullName}!
    </a>
    <a href="/">Sign Out</a>
  </nav>;

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(AuthNav);
