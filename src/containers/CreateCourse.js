import React, { Component } from "react";
// import Step from '../components/Step';
import { connect } from "react-redux";
import { courseActions } from "../actions";

class CreateCourse extends Component {

  componentDidMount() {
    this.props.onMount(this.props.match.params.id);
  }

  state = {
    steps: [{ }]
  }

  addStep(index) {
    // the step numbers are "1" based
    // so increment the index to determine the new step number
    let newStepNumber = index + 1;
    // increment the step number for any steps that come after the new step
    let steps = this.state.steps;
    steps.forEach(step => {
      if (step.stepNumber >= newStepNumber) {
        step.stepNumber++;
      }
    });

    // insert the new step
    steps.splice(index, 0, {
      stepNumber: newStepNumber,
      title: '',
      description: ''
    });
    this.setState({ steps: this.state.steps });
  }

  removeStep(indexToRemove) {
    let steps = this.state.steps;

    // decrement the step numbers
    // for all steps that come after the step that we are removing
    steps.forEach((step, index) => {
      if (index > indexToRemove) {
        step.stepNumber--;
      }
    });

    // remove the step
    steps.splice(indexToRemove, 1);
    this.setState({ steps: this.state.steps });
  }

  render() {
    return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              <a className="button" href="#">Create Course</a>
            </div>
          </div>
        </div>

        <div className="bounds course--detail">

          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <input type="text" placeholder="Course Title..." className="input-title course--title--input" value={ this.props.course.title} />
              <p>By </p>
            </div>
            <div className="course--description">
              <textarea className="autogrow" placeholder="Course description..."></textarea>
              <div className="course--steps">
                <h2>Add steps</h2>
                {/* STEPS */}
                <ol>
                  {this.state.steps.map((step, i) => {
                    return (
                      <li>
                        <h3>
                          { this.props.course.stepNumber } <input type="text" placeholder="Step Title..." className="input-title course--steps--input"/>
                        </h3>
                        <textarea placeholder="Step description..." className="autogrow"></textarea>
                        <a className="course--steps--add" onClick={() => this.addStep(i)}>
                          <svg x="0px" y="0px" viewBox="0 0 13 13" className="add">
                            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "/>
                          </svg>
                          Add step...
                        </a>
                        <a className="course--steps--remove" onClick={() => this.removeStep(i)}>Remove</a>
                      </li>
                    );
                  })}
                </ol>
              </div>
              <a className="button">Save Course</a>

            </div>
          </div>

          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <input type="text" placeholder="Hours" />
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <textarea placeholder="List materials..."></textarea>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourse);
