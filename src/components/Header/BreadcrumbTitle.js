import React from "react";

import { connect } from "react-redux";

const BreadcrumbTitle = props => {
  return (
    <span className="selected">
      {props.breadcrumb}
    </span>
  );
};
const mapStateToProps = state => ({ breadcrumb: state.breadcrumb });

export default connect(mapStateToProps)(BreadcrumbTitle);
