import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Authenticated = props => {
    const {AuthComponent, NoAuthComponent} = props;
    return props.auth ? <AuthComponent /> : (NoAuthComponent ? <NoAuthComponent /> : null)
}


const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Authenticated);
