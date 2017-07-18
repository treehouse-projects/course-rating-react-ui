import React from 'react';

const CourseDetail = props => (
  <div>
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
          <a className="button" onClick={props.edit}>Edit Course</a>
        </div>
      </div>
    </div>

    <div className="bounds course--detail">

      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{ props.course.title }</h3>
          <p>By </p>
        </div>
        <div className="course--description">
          <div> description </div>
          {/*<div ng-bind-html="vm.course.description | lineReturnsToParagraphs"></div>*/}
          <ol>
           {/* STEPS */}
            <li>
              <h3></h3>
              {/*<div ng-bind-html="step.description | lineReturnsToParagraphs"></div>*/}
            </li>
          </ol>
        </div>
      </div>

      <div className="grid-25 grid-right">
        <a className="course--review-score">
          <h4 className="review-count">
            Overall Rating
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 13 12" className="arrow-right">
              <polygon points="7.2,0 6.4,0.8 10.9,5.4 0,5.4 0,6.6 10.9,6.6 6.4,11.2 7.2,12 13,6 " />
            </svg>
          </h4>
          {/*<rating value="vm.course.overallRating"></rating>*/}
        </a>
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
              <h4>Estimated Time</h4>
              <h3></h3>
            </li>
            <li className="course--stats--list--item">
              <h4>Materials Needed</h4>
              {/*<div markdown="vm.course.materialsNeeded"></div>*/}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <a name="reviews"></a>

    <div className="course--reviews" id="reviews">
      <div className="bounds">

        <div className="grid-66">

          <h2></h2>

          <ul className="course--reviews--list">
            {/* REVIEWS */}
            <li>
              <div className="course--reviews--commentor">
                <div className="avatar"></div>
                <h4></h4>
                {/*<p>Posted on: {{ review.postedOn | date:'M/d/yy h:mm a' }}</p>
                <rating value="review.rating" is-user-rating="true"></rating>*/}
              </div>
              {/*<div ng-bind-html="review.review | lineReturnsToParagraphs"></div>*/}
              <form>
                <button className="button">Delete Review</button>
              </form>
            </li>
          </ul>

          <form className="course--reviews--form">
            <h3>Give your review</h3>
            {/*<validation-errors ng-show="vm.hasUserReviewValidationErrors"
              errors="vm.userReviewValidationErrors"></validation-errors>
            <rating allow-edit="true" value="vm.userReview.rating"></rating>*/}
            <fieldset>
              <textarea placeholder="Your review..."></textarea>
            </fieldset>
            <button className="button">Post Review</button>
          </form>

        </div>

        <div className="grid-25 grid-right">
          <div className="course--review-score">
            <h4 className="review-count">
              Overall Rating
            </h4>
            {/*<rating value="vm.course.overallRating"></rating>*/}
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default CourseDetail;
