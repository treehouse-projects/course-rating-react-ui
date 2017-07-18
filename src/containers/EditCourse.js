import React from 'react';

const EditCourse = props => (
  <div>
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
          <a className="button" href="/#/update/{{ vm.courseId }}">Save Course</a>
        </div>
      </div>
    </div>
    <div className="bounds course--detail">
      <div className="course--header">
        <h4 className="course--label">Course</h4>
        <input type="text" placeholder="Course Title..." className="input-title course--title--input" value={props.course.title} />
        <p>By fullname...</p>
      </div>
    </div>
  </div>
);

export default EditCourse;
