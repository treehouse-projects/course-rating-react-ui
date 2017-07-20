import React from 'react';
import moment from 'moment';
import MultiLineText from './MultiLineText';
import Rating from './Rating';

const Review = props => (
  <li>
    <div className="course--reviews--commentor">
      <div className="avatar"></div>
      <h4> {props.name} </h4>
      <p>Posted on: { moment(props.date).format('M/D/YY h:mma') }</p>
      <Rating rating={props.rating} />
    </div>
    <MultiLineText text={props.review} />
    <a className="button delete" onClick={props.removeReview}>Delete Review</a>
  </li>
);

export default Review;
