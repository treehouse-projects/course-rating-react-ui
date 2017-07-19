import React from 'react';

const MultiLineText = props => (
  <div>
    { props.text.split(/\n\n/g).map((br, i) => <p key={i}>{br}</p>) }
  </div>
);

export default MultiLineText;
