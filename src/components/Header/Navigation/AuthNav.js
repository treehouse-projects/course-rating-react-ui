import React from 'react';

const AuthNav = props => (
  <nav>
    <a href="#">Welcome {props.user.fullName}!</a>
    <a className="signout" href="/">Sign Out</a>
  </nav>
);

export default AuthNav;
