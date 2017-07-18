import React from 'react';
import AuthNav from './AuthNav';
import NoAuthNav from './NoAuthNav';
import {connect} from 'react-redux';
import Authenticated from '../../Authenticated';

const Navigation = (props) => (
  <Authenticated AuthComponent={AuthNav} NoAuthComponent={NoAuthNav} />
);

export default Navigation;
