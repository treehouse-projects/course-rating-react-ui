import React, { Component } from "react";
import { courseActions } from "../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import StepInput from "../components/StepInput";

class EditCourse extends Component {
  state = {
    steps: [],
    user: {}
  };
  componentDidMount() {
    this.props.onMount(this.props.match.params.id).then(({ course }) => {
      this.setState(
        {
          ...this.state,
          ...course
        },
        () => console.log(this.state)
      );
    });
  }
  addStep(index) {
    this.setState(
      {
        ...this.state,
        steps: [
          ...this.state.steps.slice(0, index + 1),
          { title: "", description: "" },
          ...this.state.steps.slice(index + 1)
        ]
      },
      () => console.log(this.state)
    );
  }
  removeStep(index) {
    this.setState(
      {
        ...this.state,
        steps: [
          ...this.state.steps.slice(0, index),
          ...this.state.steps.slice(index + 1)
        ]
      },
      () => console.log(this.state)
    );
  }
  changeHandler(formField, value) {
    this.setState(
      {
        ...this.state,
        [formField]: value
      },
      () => console.log(this.state)
    );
  }

  stepChangeHandler(stepField, value, index) {
    this.setState(
      {
        ...this.state,
        steps: this.state.steps.map((step, i) => {
          if (index === i) {
            return {
              ...step,
              [stepField]: value
            };
          }
          return step;
        })
      },
      () => console.log(this.state)
    );
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }
  render() {
    return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              <a className="button" href="#">
                Submit Changes
              </a>
            </div>
          </div>
        </div>

        <div className="bounds course--detail">
          <div>
            <h2 className="validation--errors--label">Validation errors</h2>
            <div className="validation-errors">
              <ul>
                <li className="ng-binding ng-scope">description is required</li>
                <li className="ng-binding ng-scope">title is required</li>
                <li className="ng-binding ng-scope">
                  Step requires a description
                </li>
                <li className="ng-binding ng-scope">Step requires a title</li>
              </ul>
            </div>
          </div>
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <input
                type="text"
                placeholder="Course Title..."
                className="input-title course--title--input"
                onChange={e => {
                  this.changeHandler("title", e.target.value);
                }}
                value={this.state.title}
              />
              <p>By {this.state.user.fullName}</p>
            </div>
            <div className="course--description">
              <textarea
                className="autogrow"
                placeholder="Course description..."
                onChange={e => {
                  this.changeHandler("description", e.target.value);
                }}
                value={this.state.description}
              />
              <div className="course--steps">
                <h2>Add steps</h2>
                {/* STEPS */}
                <ol>
                  {this.state.steps.map((step, i, arr) => {
                    return (
                      <StepInput
                        key={i}
                        id={step._id}
                        title={step.title}
                        description={step.description}
                        addStep={() => this.addStep(i)}
                        removeStep={() => this.removeStep(i)}
                        changeHandler={(stepField, value) =>
                          this.stepChangeHandler(stepField, value, i)}
                      />
                    );
                  })}
                </ol>
              </div>
              <button className="button" onClick={this.onSubmit.bind(this)}>
                Submit Changes
              </button>
              <NavLink
                className="button button-secondary"
                to={`/courses/${this.state.id}`}
              >
                Cancel
              </NavLink>
            </div>
          </div>

          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <input
                    type="text"
                    placeholder="Hours"
                    onChange={e => {
                      this.changeHandler("estimatedTime", e.target.value);
                    }}
                    value={this.state.estimatedTime}
                  />
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <textarea
                    placeholder="List materials..."
                    onChange={e => {
                      this.changeHandler("materialsNeeded", e.target.value);
                    }}
                    value={this.state.materialsNeeded}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  onMount: id => dispatch(courseActions.fetchCourse(id)),
  onSubmit: course => dispatch(courseActions.sendEditCourse(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);
