import React, { Component } from 'react';
import CourseDetail from './CourseDetail';
import CreateCourse from './CreateCourse';
import EditCourse from './EditCourse';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { courseActions } from "../actions";

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => bindActionCreators({
  onMount: () => courseActions.fetchCourseList()
}, dispatch);

class CourseContainer extends Component {

  state = {
    edit: false
  }

  edit = () => {
    this.setState({ edit: true })
  }

  componentDidMount() {
    this.props.onMount();
  }
  render() {

    let courses = this.props.courses.filter(item => {
      let id = this.props.id;
      return item._id === id;
    });

    if (!this.state.edit) {
      return(
        <div className="bounds">
          {courses.map(course =>
            <CourseDetail course={course} edit={this.edit} />
          )}
        </div>
      );
    } else {
      return(
        <div className="bounds">
          {courses.map(course =>
            <EditCourse course={course} />
          )}
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);
