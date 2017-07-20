import fetch from 'isomorphic-fetch'
import { apiRoot } from "../config";

import { coursesActionTypes } from '../actionTypes';

export function requestCourseList() {
  return {
    type: coursesActionTypes.REQUEST_COURSE_LIST
  };
}

export function requestCourseListSuccess(data) {
  return {
    type: coursesActionTypes.REQUEST_COURSE_LIST_SUCCESS,
    courses: data
  };

}

export function requestCourseListFailure(err) {
  return {
    type: coursesActionTypes.REQUEST_COURSE_LIST_FAILURE,
    err: err
  };
}


export function fetchCourseList() {
  return dispatch => {
    dispatch(requestCourseList())
    return fetch(`${apiRoot}/courses`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(({ data }) => dispatch(requestCourseListSuccess(data)))
    .catch(err => dispatch(requestCourseListFailure(err)));
  };
}

