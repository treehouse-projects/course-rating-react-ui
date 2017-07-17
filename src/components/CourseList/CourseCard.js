import React from 'react';
import { NavLink } from 'react-router-dom';

const CourseCard = props => (
  <div className="grid-33">
    <NavLink className="course--module course--link" to={`/courses/${props.course._id}`}>
      <h4 className="course--label">Course</h4>
      <h3 className="course--title">{ props.course.title }</h3>
    </NavLink>
  </div>
);

export default CourseCard;
