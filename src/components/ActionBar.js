import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { courseActions } from '../actions';

const ActionBar = props => (
    <div className="actions--bar">
        <div className="bounds">
        <div className="grid-100">
            {props.match.path.includes("/edit") ? (
                <NavLink
                className="button"
                onClick={() => props.onSubmit(props.course)}
                to={`/courses/${props.course._id}`}
                >Submit Changes</NavLink>
                ):(
                <NavLink
                className="button"
                to={`/courses/${props.course._id}/edit`}
                >Edit Course</NavLink> 
            )}
        </div>
        </div>
    </div>
);

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  onSubmit: course => dispatch(courseActions.sendEditCourse(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ActionBar));



