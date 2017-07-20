import React, { Component } from 'react';
import { connect } from 'react-redux';
import { errorActions } from '../actions';


const getErrorMessages = errors => Object.keys(errors).map(key => errors[key].message);


class ValidationErrors extends Component {

    componentDidMount() {
        this.props.clearErrors();
    }

    render() {
        if(this.props.errors.validationErrors) {
            const errors = this.props.errors.validationErrors;

            return (
                <div>
                    <h2 className="validation--errors--label">Validation errors</h2>
                    <div className="validation-errors">
                        <ul>
                            {getErrorMessages(errors).map((error, i) => <li key={i}>{error}</li>)}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    } 
};

const mapStateToProps = state => ({errors: state.errors})

const mapDispatchToProps = dispatch => ({ 
    clearErrors: () => dispatch(errorActions.clearValidationErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidationErrors);