import React, { Component } from "react";
import { connect } from "react-redux";

import { courseActions } from "../../actions";

import CourseCard from "./CourseCard";

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(courseActions.fetchCourseList())
});

class CourseList extends Component {
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return (
      <div className="bounds">
        {this.props.courses.map(course =>
          <CourseCard key={course._id} course={course} />
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
