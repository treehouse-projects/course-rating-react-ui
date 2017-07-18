import fetch from 'isomorphic-fetch'
import { apiRoot } from "../config";

import * as courseActions from '../actionTypes/courses';

<<<<<<< HEAD
const courseState = 
  [
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
  ]
;
=======
export function requestCourseList() {
  return {
    type: courseActions.REQUEST_COURSE_LIST
  };
}
>>>>>>> 225d2e4862fd03ad2bcaba280b07c4207c464ae2

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
    dispatch(requestCourseList())
    return fetch(`${apiRoot}/courses`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ data }) => {
        dispatch(requestCourseListSuccess(data));
      })
      .catch(err => {
        dispatch(requestCourseListFailure());
        console.log(err);
      });
  };
}

