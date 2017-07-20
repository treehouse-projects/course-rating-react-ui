import React from "react";

const StepInput = props =>
  <li>
    <h3>
      {" "}<input
        type="text"
        placeholder="Step Title..."
        className="input-title course--steps--input"
        onChange={e => {
          props.changeHandler("title", e.target.value, props.id);
        }}
        value={props.title}
      />
    </h3>
    <textarea
      placeholder="Step description..."
      className="autogrow"
      onChange={e => {
        props.changeHandler("description", e.target.value, props.id);
      }}
      value={props.description}
    />
    <a className="course--steps--add" onClick={props.addStep}>
      <svg x="0px" y="0px" viewBox="0 0 13 13" className="add">
        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 " />
      </svg>
      Add step...
    </a>
    <a className="course--steps--remove" onClick={props.removeStep}>
      Remove
    </a>
  </li>;

export default StepInput;
