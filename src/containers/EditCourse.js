import React, { Component } from "react";
import { courseActions } from "../actions";
import { connect } from "react-redux";

class EditCourse extends Component {
  state = {
    steps: [
      {
        title: this.props.course.title,
        description: this.props.course.description
      }
    ]
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
          console.log(step, i);
          if (i === index) {
            return {
              ...this.state.steps[i],
              [stepField]: value
            };
          }
        })
      },
      () => console.log(this.state)
    );
  }
  render() {
    console.log(this.props);
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
                  this.changeHandler("courseTitle", e.target.value);
                }}
                value={this.state.title}
              />
              <p>By </p>
            </div>
            <div className="course--description">
              <textarea
                className="autogrow"
                placeholder="Course description..."
                onChange={e => {
                  this.changeHandler("courseDescription", e.target.value);
                }}
                value={this.state.description}
              />
              <div className="course--steps">
                <h2>Add steps</h2>
                {/* STEPS */}
                <ol>
                  {this.state.steps.map((step, i) => {
                    return (
                      <li key={"step_" + i}>
                        <h3>
                          {" "}<input
                            type="text"
                            placeholder="Step Title..."
                            className="input-title course--steps--input"
                            onChange={e => {
                              this.stepChangeHandler(
                                "title",
                                e.target.value,
                                i
                              );
                            }}
                            value={step.title}
                          />
                        </h3>
                        <textarea
                          placeholder="Step description..."
                          className="autogrow"
                          onChange={e => {
                            this.stepChangeHandler(
                              "description",
                              e.target.value,
                              i
                            );
                          }}
                          value={step.description}
                        />
                        <a
                          className="course--steps--add"
                          onClick={() => this.addStep(i)}
                        >
                          <svg
                            x="0px"
                            y="0px"
                            viewBox="0 0 13 13"
                            className="add"
                          >
                            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 " />
                          </svg>
                          Add step...
                        </a>
                        <a
                          className="course--steps--remove"
                          onClick={() => this.removeStep(i)}
                        >
                          Remove
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </div>
              <a className="button">Submit Changes</a>
              <a className="button">Cancel</a>
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
                      this.changeHandler("hours", e.target.value);
                    }}
                    value={this.state.estimatedTime}
                  />
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <textarea
                    placeholder="List materials..."
                    onChange={e => {
                      this.changeHandler("materials", e.target.value);
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
  onMount: id => dispatch(courseActions.fetchCourse(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);
