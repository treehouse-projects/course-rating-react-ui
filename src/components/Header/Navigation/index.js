import React from 'react';
import AuthNav from './AuthNav';
import NoAuthNav from './NoAuthNav';

const Navigation = props => (
  props.isAuthenticated ? <AuthNav /> : <NoAuthNav />
);

export default Navigation;
