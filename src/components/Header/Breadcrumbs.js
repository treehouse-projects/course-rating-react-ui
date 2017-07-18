import React from 'react';

const Breadcrumbs = props => {

  const location = props.location.split('/');

  return(
    <span>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 7 13" className="chevron">
        <polygon points="0.7,13 0,12.3 5.6,6.5 0,0.7 0.7,0 7,6.5  "/>
      </svg>
      <span className="selected">{ location }</span>
    </span>
  )
};

export default Breadcrumbs;
