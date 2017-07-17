import React from "react";
import { connect } from "react-redux";
import listCourses from "../actions/courses";

const mapStateToProps = state => ({ ...state });

const CourseList = props =>
  <ul>
    {props.courses.map(course =>
      <li key={course._id}>
        {course.title}
      </li>
    )}
  </ul>;

export default connect(mapStateToProps)(CourseList);
