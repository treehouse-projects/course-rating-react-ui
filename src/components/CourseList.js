import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../actions/courses";

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(courseActions.fetchCourseList())
});

class CourseList extends Component {
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return <ul>
      {this.props.courses.map(course =>
        <li key={course._id}>
          {course.title}
        </li>
      )}
    </ul>;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
