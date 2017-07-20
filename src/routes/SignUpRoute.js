import React from 'react';

import { Route } from 'react-router-dom';

import SignUp from '../containers/SignUp'

const SignUpRoute = (props) => (
  <Route exact path='/signup' component={SignUp}/>
);

export default SignUpRoute;