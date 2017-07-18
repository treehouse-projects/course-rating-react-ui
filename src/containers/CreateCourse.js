import React from 'react';

const CreateCourse = props => (
  <div>
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
          <a className="button" href="#">Create Course</a>
        </div>
      </div>
    </div>

    <div className="bounds course--detail">

      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course</h4>
          <input type="text" placeholder="Course Title..." className="input-title course--title--input" value={ props.course.title} />
          <p>By { props.course.user.fullname } </p>
        </div>
        <div className="course--description">
          <textarea className="autogrow" placeholder="Course description..."></textarea>
          <div className="course--steps">
            <h2>Add steps</h2>
            <ol>

              <li>
                <h3>
                  { props.course.stepNumber } <input type="text" placeholder="Step Title..." className="input-title course--steps--input" value=" "/>
                </h3>
                <textarea placeholder="Step description..." className="autogrow"></textarea>
                <a className="course--steps--add" onClick={() => this.addStep()}>
                  <svg x="0px" y="0px" viewBox="0 0 13 13" className="add">
                    <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "/>
                  </svg>
                  Add step...
                </a>
                <a className="course--steps--remove" onClick={() => this.removeStep()}>Remove</a>
              </li>

            </ol>
          </div>
          <a className="button">Save Course</a>

        </div>
      </div>

      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
              <h4>Estimated Time</h4>
              <input type="text" placeholder="Hours" />
            </li>
            <li className="course--stats--list--item">
              <h4>Materials Needed</h4>
              <textarea placeholder="List materials..."></textarea>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>
);

export default CreateCourse;
