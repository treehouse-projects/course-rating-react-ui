import fetch from "isomorphic-fetch";
import { apiRoot } from "../config";

import * as courseActions from "../actionTypes";

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
