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
                onClick={() => {console.log(props.auth); return props.onSubmit(props.course, props.auth);}}
                to={`/courses/${props.course._id}/edit`}
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
  onSubmit: (course, auth) => dispatch(courseActions.sendEditCourse(course, auth))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ActionBar));
