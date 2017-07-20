import React from "react";
import { connect } from "react-redux";

const Authenticated = ({ AuthComponent, NoAuthComponent, auth, children }) => {
    if (auth) {
        if(children) {
            return children;
        }
        else if(AuthComponent) {
            return <AuthComponent />
        } else {
            return null;
        }
    } else {
         if(NoAuthComponent) {
            return <NoAuthComponent />
        } else {
            return null;
        }
    }
}


const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Authenticated);