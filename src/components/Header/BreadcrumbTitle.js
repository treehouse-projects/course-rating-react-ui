import React from 'react';

import { connect } from "react-redux";

const BreadcrumbTitle = props => {  
  return (
      <span className="selected">{ props.breadcrumb }</span>
  )
};
const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(BreadcrumbTitle);
