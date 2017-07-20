import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

const ActionBar = props => (
    <div className="actions--bar">
        <div className="bounds">
        <div className="grid-100">
            {props.match.path.includes("/edit") ? (
                <NavLink
                className="button"
                to={`/courses/${props.course._id}/edit`}
                >Edit Course</NavLink>
                ):(
                null
            )}
        </div>
        </div>
    </div>
);

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(withRouter(ActionBar));
