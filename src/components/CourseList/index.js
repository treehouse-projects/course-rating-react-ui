import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { coursesActions } from "../../actions";

import CourseCard from "./CourseCard";
import NewCourseCard from "./NewCourseCard";
import Authenticated from "../Authenticated"

const mapStateToProps = state => ({ ...state });


const mapDispatchToProps = dispatch => bindActionCreators({
  onMount: () => coursesActions.fetchCourseList()
}, dispatch);

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
        <Authenticated AuthComponent={NewCourseCard} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
