import React from 'react';
import { NavLink } from 'react-router-dom';

const NoAuthNav = props => (
  <nav>
    <NavLink to="/signup">Sign Up</NavLink>
    <NavLink to="/signin">Sign In</NavLink>
  </nav>
);

export default NoAuthNav;
