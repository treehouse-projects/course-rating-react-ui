import fetch from 'isomorphic-fetch'
import { apiRoot } from "../config";

import { courseActions } from '../actionTypes';


export function requestCourseSuccess(data) {
  return {
    type: courseActions.REQUEST_COURSE_SUCCESS,
    course: data
  };
}

export function requestCourseFailure(err) {
  return {
    type: courseActions.REQUEST_COURSE_FAILURE,
    err: err
  };
}

export function fetchCourse(id) {
  return dispatch => {
    return fetch(`${apiRoot}/courses/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ data }) => {
        dispatch(requestCourseSuccess(data));
      })
      .catch(err => {
        dispatch(requestCourseFailure(err));
      });
  };
}
