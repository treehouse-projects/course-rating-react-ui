import React from 'react';
import SetRating from './SetRating';

const ReviewForm = props => (
  <form className="course--reviews--form">
    <h3>Give your review</h3>
    {/*<validation-errors ng-show="vm.hasUserReviewValidationErrors"
  errors="vm.userReviewValidationErrors"></validation-errors>*/}
    <SetRating />
    <fieldset>
      <textarea placeholder="Your review..." />
    </fieldset>
    <button className="button">Post Review</button>
  </form>
);

export default ReviewForm;
