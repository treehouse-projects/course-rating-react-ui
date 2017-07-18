import React from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Navigation from './Navigation';

const Header = props => (
  <div className="header">
    <div className="bounds">
      <h1 className="header--logo">
        <NavLink exact to="/" activeClassName="selected">Courses</NavLink>
        <Breadcrumbs location={props.location.pathname} />
      </h1>
      <Navigation />
    </div>
  </div>
);

export default Header;
