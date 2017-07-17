import fetch from "isomorphic-fetch";

import * as courseActions from "../actionTypes";

const courseState = [
  {
    _id: "57029ed4795118be119cc43d",
    title: "Build a Basic Bookcase"
  },
  {
    _id: "57029ed4795118be119cc440",
    title: "Learn How to Program"
  },
  {
    _id: "596ce6931cd35bbf39200a89",
    title: "jQuery Basics"
  }
];

export function requestCourseListSuccess(data) {
  return {
    type: courseActions.REQUEST_COURSE_LIST_SUCCESS,
    courses: data
  };
}
export function requestCourseListFailure(err) {
  return {
    type: courseActions.REQUEST_COURSE_LIST_FAILURE,
    err: err
  };
}

export function fetchCourseList() {
  return dispatch => {
    return fetch(`http://localhost:5000/api/courses`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(doc => {
        dispatch(requestCourseListSuccess(doc));
      })
      .catch(err => {
        dispatch(requestCourseListFailure());
        console.log(err);
      });
  };
}
