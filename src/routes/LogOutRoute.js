import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authActions } from '../actions';



const LogOutRoute = (props) => {
    props.logOut();
    return (<Redirect path="/"/>)
};


const mapDispatchToProps = dispatch => bindActionCreators({
    logOut: () => authActions.logOut()
}, dispatch);

export default connect(null, mapDispatchToProps)(LogOutRoute);