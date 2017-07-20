import React from "react";
import { connect } from "react-redux";

const Authenticated = ({ AuthComponent, NoAuthComponent, auth }) => {
    return auth ? <AuthComponent /> : (NoAuthComponent ? <NoAuthComponent /> : null)
}


const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Authenticated);
