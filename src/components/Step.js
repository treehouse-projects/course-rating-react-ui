import React from 'react';

const Step = props => (
  <li>
    <h3>
      { props.stepNumber } <input type="text" placeholder="Step Title..." className="input-title course--steps--input"/>
    </h3>
    <textarea placeholder="Step description..." className="autogrow"></textarea>
    <a className="course--steps--add">
      <svg x="0px" y="0px" viewBox="0 0 13 13" className="add">
        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "/>
      </svg>
      Add step...
    </a>
    <a className="course--steps--remove">Remove</a>
  </li>
);

export default Step;
