import React from 'react';

const MultiLineText = props => (
  <div>
    { props.text.split(/\n\n/g).map((text, i) => <p key={i}>{text}</p>) }
  </div>
);

export default MultiLineText;
