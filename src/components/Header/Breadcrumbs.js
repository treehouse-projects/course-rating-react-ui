import React from 'react';

import BreadcrumbTitle from './BreadcrumbTitle'

const Breadcrumbs = props => {
  return(
    <span>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 7 13" className="chevron">
        <polygon points="0.7,13 0,12.3 5.6,6.5 0,0.7 0.7,0 7,6.5  "/>
      </svg>
      <BreadcrumbTitle />
    </span>
  )
};

export default Breadcrumbs;
