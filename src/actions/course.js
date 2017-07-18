import fetch from "isomorphic-fetch";
import { apiRoot } from "../config";

import { courseActions } from "../actionTypes";

/*
* GET /api/courses/:id
*/

export function requestCourse() {
  return {
    type: courseActions.REQUEST_COURSE
  };
}

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
    dispatch(requestCourse());
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

/*
* POST /api/courses/
*/


export function createCourse() {
  return {
    type: courseActions.CREATE_COURSE
  };
}

export function createCourseSuccess(data) {
  return {
    type: courseActions.CREATE_COURSE_SUCCESS,
    course: data
  };
}

export function createCourseFailure(err) {
  return {
    type: courseActions.CREATE_COURSE_FAILURE,
    err: err
  };
}

export function sendCreateCourse(courseData) {
  return dispatch => {
    dispatch(createCourse());
    return fetch(`${apiRoot}/courses/${id}`, {
      method: "post",
      body: { data: courseData },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ data }) => {
        dispatch(createCourseSuccess(data));
      })
      .catch(err => {
        dispatch(createCourseFailure(err));
      });
  };
}

/*
* PUT /api/courses/:courseId
*/

export function editCourse() {
  return {
    type: courseActions.EDIT_COURSE
  };
}

export function editCourseSuccess(data) {
  return {
    type: courseActions.EDIT_COURSE_SUCCESS,
    course: data
  };
}

export function editCourseFailure(err) {
  return {
    type: courseActions.EDIT_COURSE_FAILURE,
    err: err
  };
}

export function sendEditCourse(id, courseData) {
  return dispatch => {
    dispatch(editCourse());
    return fetch(`${apiRoot}/courses/${id}/courses`, {
      method: "post",
      body: { data: courseData },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ data }) => {
        dispatch(editCourseSuccess(data));
      })
      .catch(err => {
        dispatch(editCourseFailure(err));
      });
  };
}

/*
* POST /api/courses/:courseId/reviews
*/

export function createReview() {
  return {
    type: courseActions.CREATE_REVIEW
  };
}

export function createReviewSuccess(data) {
  return {
    type: courseActions.CREATE_REVIEW_SUCCESS,
    review: data
  };
}

export function createReviewFailure(err) {
  return {
    type: courseActions.CREATE_REVIEW_FAILURE,
    err: err
  };
}

export function sendCreateReview(reviewData) {
  return dispatch => {
    dispatch(createReview());
    return fetch(`${apiRoot}/courses/${id}/reviews`, {
      method: "post",
      body: { data: reviewData },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ data }) => {
        dispatch(createReviewSuccess(data));
      })
      .catch(err => {
        dispatch(createReviewFailure(err));
      });
  };
}