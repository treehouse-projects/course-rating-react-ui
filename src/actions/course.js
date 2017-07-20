import fetch from "isomorphic-fetch";
import { apiRoot } from "../config";
import { checkForErrors, dispatchValidationError } from "./util";
import { courseActionTypes } from "../actionTypes";
import { redirectActions } from '../actions'
/*
* GET /api/courses/:id
*/

export function requestCourse() {
  return {
    type: courseActionTypes.REQUEST_COURSE
  };
}

export function requestCourseSuccess(data) {
  return {
    type: courseActionTypes.REQUEST_COURSE_SUCCESS,
    course: data
  };
}

export function requestCourseFailure(err) {
  return {
    type: courseActionTypes.REQUEST_COURSE_FAILURE,
    err: err
  };
}

export function fetchCourse(id) {
  return dispatch => {
    dispatch(requestCourse());
    return fetch(`${apiRoot}/courses/${id}`, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(({ data }) => dispatch(requestCourseSuccess(data[0])))
      .catch(err => dispatch(requestCourseFailure(err)));
  };
}

/*
* POST /api/courses/
*/

export function createCourse() {
  return {
    type: courseActionTypes.CREATE_COURSE
  };
}

export function createCourseSuccess(data) {
  return {
    type: courseActionTypes.CREATE_COURSE_SUCCESS,
    course: data
  };
}

export function createCourseFailure(err) {
  return {
    type: courseActionTypes.CREATE_COURSE_FAILURE,
    err: err
  };
}

export function sendCreateCourse(course, authHeader) {
  return dispatch => {
    dispatch(createCourse());
    return fetch(`${apiRoot}/courses`, {
      method: "post",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader
      }
    })
      .then(checkForErrors)
      .then(() => dispatch(redirectActions.redirectTo(`/`)))
      .catch(dispatchValidationError(dispatch));
  };
}

/*
* PUT /api/courses/:courseId
*/

export function editCourse() {
  return {
    type: courseActionTypes.EDIT_COURSE
  };
}

export function editCourseSuccess(data) {
  return {
    type: courseActionTypes.EDIT_COURSE_SUCCESS,
    course: data
  };
}

export function editCourseFailure(err) {
  return {
    type: courseActionTypes.EDIT_COURSE_FAILURE,
    err: err
  };
}

export function sendEditCourse(course, authHeader) {
  return dispatch => {
    dispatch(editCourse());
    return fetch(`${apiRoot}/courses/${course._id}`, {
      method: "put",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader
      }
    })
      .then(checkForErrors)
      .then(() => dispatch(redirectActions.redirectTo(`/courses/${course._id}`)))
      .catch(dispatchValidationError(dispatch));
  };
}

/*
* POST /api/courses/:courseId/reviews
*/

export function createReview() {
  return {
    type: courseActionTypes.CREATE_REVIEW
  };
}

export function createReviewSuccess(data) {
  return {
    type: courseActionTypes.CREATE_REVIEW_SUCCESS,
    review: data
  };
}

export function createReviewFailure(err) {
  return {
    type: courseActionTypes.CREATE_REVIEW_FAILURE,
    err: err
  };
}

export function sendCreateReview(courseId, review, authHeader) {
  return dispatch => {
    dispatch(createReview());
    return fetch(`${apiRoot}/courses/${courseId}/reviews`, {
      method: "post",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader
      }
    })
      .then(checkForErrors)
      .then(() => dispatch(redirectActions.redirectTo(`/courses/${courseId}`)))
      .catch(dispatchValidationError(dispatch));
  };
}
