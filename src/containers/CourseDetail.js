import React, { Component } from 'react';
import { connect } from 'react-redux';

import { courseActions } from "../actions";

class CourseDetail extends Component {
    
    componentDidMount() {
        this.props.onMount(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <h1>Single Course</h1>
                {   
                    this.props.course.map((course, index) => (
                    <h2 key={index}>
                        {course.description}
                    </h2>
                ))}
            </div>
        );
    }
    
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({ 
    onMount: (id) => dispatch(courseActions.fetchCourse(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);