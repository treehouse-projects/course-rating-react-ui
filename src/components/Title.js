import React from "react";
import { breadcrumbActions } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Title extends React.Component {
  componentWillMount() {
    this.props.setTitle(this.props.children);
  }
  componentWillUnmount() {
    this.props.setTitle("");
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setTitle: title => breadcrumbActions.updateTitle(title)
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Title);
