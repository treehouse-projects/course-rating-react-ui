import React, { Component } from "react";
import Review from "../components/Review";
import MultiLineText from "../components/MultiLineText";
import Rating from "../components/Rating";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import Title from "../components/Title";
import Authenticated from "../components/Authenticated";
import ReviewForm from '../components/ReviewForm';

import { connect } from "react-redux";
import { courseActions } from "../actions";

class CourseDetail extends Component {
  componentDidMount() {
    this.props.onMount(this.props.match.params.id);
  }

  render() {

    return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              <NavLink
                className="button"
                to={`/courses/${this.props.course._id}/edit`}
              >
                Edit Course
              </NavLink>
            </div>
          </div>
        </div>

        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <Title>{this.props.course.title}</Title>
              <h3 className="course--title">{this.props.course.title}</h3>
              <p>By {this.props.course.user.fullName}</p>
            </div>
            <div className="course--description">
              <MultiLineText text={this.props.course.description} />
              <ol>
                {this.props.course.steps.map((step, i) => {
                  return (
                    <li key={i}>
                      <h3>
                        {step.number} {step.title}
                      </h3>
                      <MultiLineText text={step.description} />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="grid-25 grid-right">
            <a className="course--review-score">
              <h4 className="review-count">
                Overall Rating
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 13 12"
                  className="arrow-right"
                >
                  <polygon points="7.2,0 6.4,0.8 10.9,5.4 0,5.4 0,6.6 10.9,6.6 6.4,11.2 7.2,12 13,6 " />
                </svg>
              </h4>
              <Rating rating={this.props.course.overallRating} />
            </a>
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>
                    {this.props.course.estimatedTime}
                  </h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ReactMarkdown source={this.props.course.materialsNeeded} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a name="reviews" />

        <div className="course--reviews" id="reviews">
          <div className="bounds">
            <div className="grid-66">
              <h2>
                {this.props.course.reviews.length} Reviews
              </h2>

              <ul className="course--reviews--list">
                {this.props.course.reviews.map(r => {
                  return (
                    <Review
                      name={r.user.fullName}
                      review={r.review}
                      date={r.postedOn}
                      rating={r.rating}
                      key={r.id}
                    />
                  );
                })}
              </ul>
              {
                (this.props.course.user.fullName !== this.props.user.fullName)
                 ? <Authenticated AuthComponent={ReviewForm} />
                 :  null
              }
            </div>

            <div className="grid-25 grid-right">
              <div className="course--review-score">
                <h4 className="review-count">Overall Rating</h4>
                <Rating rating={this.props.course.overallRating} />
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
