import fetch from "isomorphic-fetch";
import { apiRoot } from "../config";
import basicAuth from "basic-auth";
import * as userActions from "../actionTypes";

/*
* GET /api/users
*/

export function requestUser() {
  return {
    type: userActions.REQUEST_USER
  };
}

export function requestUserSuccess(data) {
  return {
    type: userActions.REQUEST_USER_SUCCESS,
    user: data
  };
}
export function requestUserFailure(err) {
  return {
    type: userActions.REQUEST_USER_FAILURE,
    err: err
  };
}

/*    TODO: AUTHORIZE USER LOGIC    */

export function fetchUser(username, password) {
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

/*
* POST /api/users
*/

export function createUser() {
  return {
    type: userActions.CREATE_USER
  };
}

export function createUserSuccess(data) {
  return {
    type: userActions.CREATE_USER_SUCCESS,
    user: data
  };
}
export function createUserFailure(err) {
  return {
    type: userActions.CREATE_USER_FAILURE,
    err: err
  };
}

export function sendCreateUser(userData) {
  return dispatch => {
    dispatch(createUser())
    return fetch(`${apiRoot}/users`, {
      method: 'post',
      body: JSON.stringify(userData),
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
