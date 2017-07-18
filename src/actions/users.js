import fetch from "isomorphic-fetch";
import { apiRoot } from "../config";

import * as userActions from "../actionTypes";

export function requestUser() {
  return {
    type: courseActions.REQUEST_USER
  };
}

export function requestUserSuccess(data) {
  return {
    type: courseActions.REQUEST_USER_SUCCESS,
    courses: data
  };
}
export function requestUserFailure(err) {
  return {
    type: courseActions.REQUEST_USER_FAILURE,
    err: err
  };
}

export function fetchUser() {
  return dispatch => {
    dispatch(requestUser())
    return fetch(`${apiRoot}/users`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ data }) => {
        dispatch(requestUserSuccess(data));
      })
      .catch(err => {
        dispatch(requestUserFailure());
        console.log(err);
      });
  };
}

export function createUser() {
  return {
    type: courseActions.CREATE_USER
  };
}

export function createUserSuccess(data) {
  return {
    type: courseActions.CREATE_USER_SUCCESS,
    courses: data
  };
}
export function createUserFailure(err) {
  return {
    type: courseActions.CREATE_USER_FAILURE,
    err: err
  };
}

export function sendCreateUser() {
  return dispatch => {
    dispatch(createUser())
    return fetch(`${apiRoot}/users`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ data }) => {
        dispatch(createUserSuccess(data));
      })
      .catch(err => {
        dispatch(createUserFailure());
        console.log(err);
      });
  };
}
