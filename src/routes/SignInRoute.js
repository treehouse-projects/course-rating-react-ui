import React from 'react';

import { Route } from 'react-router-dom';

import SignIn from '../containers/SignIn'

const SignInRoute = (props) => (
  <Route exact path='/signin' component={SignIn}/>
);

export default SignInRoute;