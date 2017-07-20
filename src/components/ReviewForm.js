import React from "react";
import SetRating from "./SetRating";
import { courseActions } from "../actions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ValidationErrors } from "../components";

class ReviewForm extends React.Component {
  state = {
    rating: 0,
    review: ""
  };
  render() {
    return (
      <form className="course--reviews--form">
        <ValidationErrors />
        <h3>Give your review</h3>
        {/*<validation-errors ng-show="vm.hasUserReviewValidationErrors"
  errors="vm.userReviewValidationErrors"></validation-errors>*/}
        <SetRating
          rating={this.state.rating}
          onRatingChange={this.onRatingChange.bind(this)}
        />
        <fieldset>
          <textarea
            placeholder="Your review..."
            onChange={event => this.setState({ review: event.target.value })}
            value={this.state.review}
          />
        </fieldset>
        <button className="button" onClick={this.onSubmit.bind(this)}>
          Post Review
        </button>
      </form>
    );
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.sendCreateReview(this.props.courseId, this.state, this.props.auth);
  }
  onRatingChange(rating) {
    this.setState({ rating });
  }
}

const mapStateToProps = state => ({ courseId: state.course._id, auth: state.auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendCreateReview: (courseId, review, auth) =>
        courseActions.sendCreateReview(courseId, review, auth)
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
