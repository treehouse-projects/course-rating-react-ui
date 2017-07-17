import React from "react";
import { connect } from "react-redux";
import listCourses from "../../actions";
import CourseCard from './CourseCard';

const mapStateToProps = state => ({ ...state });

const CourseList = props => (
  <div className="bounds">
    {props.listCourses.map(course =>
      <CourseCard key={course._id} course={course} />
    )}
  </div>
);

export default connect(mapStateToProps)(CourseList);
