import React from "react";
import { connect } from "react-redux";


const getErrorMessages = errors => Object.keys(errors).map(key => errors[key].message);


const ValidationErrors = props => {
    if(props.errors.validationErrors) {
        return (<div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
            <ul>
                {getErrorMessages(props.errors.validationErrors).map((error, i) => <li key={i}>{error}</li>)}
            </ul>
        </div>
    </div>);
    } else {
        return null;
    }
};

const mapStateToProps = state => ({errors: state.errors})

export default connect(mapStateToProps)(ValidationErrors);