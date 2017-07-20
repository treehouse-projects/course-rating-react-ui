import React from "react";

import { Redirect } from "react-router-dom";

export default class RedirectAfterAction extends React.Component {
    componentWillMount() {
        this.props.clearRedirect()
    }
    render() {
        return <Redirect to={this.props.path} />;
    }
}


