import React from "react";
import { connect } from "react-redux";
import { RedirectHome } from '../routes';

const Authenticated = ({ AuthComponent, NoAuthComponent, auth }) => {
    return auth ? (
            AuthComponent ? <AuthComponent /> : <RedirectHome path="/" />
        ) : (
            NoAuthComponent ? <NoAuthComponent /> : <RedirectHome path="/" />
        );
}


const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Authenticated);
