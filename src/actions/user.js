import fetch from "isomorphic-fetch";
import { apiRoot } from "../config";
//import basicAuth from "basic-auth";
import { userActions } from "../actionTypes";
import { authenticated } from "./auth";

/*
* GET /api/users
*/

export function requestUser() {
  return {
    type: userActions.REQUEST_USER
  };
}

export function requestUserSuccess(user) {
  return {
    type: userActions.REQUEST_USER_SUCCESS,
    user
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
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
    return fetch(`${apiRoot}/users`, {
      headers: {
        "Authorization": authHeader
      }
    })
      .then(response => response.json())
      .then(({ data }) => {
        const user = data[0];
        const {fullName, _id} = user;
        dispatch(requestUserSuccess({fullName, _id}));
      }).then(() => dispatch(authenticated(authHeader)))
      .catch(err => {
        dispatch(requestUserFailure());
        console.log(err);
      });
  };
}

/*
* POST /api/users
*/

//   TODO: TEST RESPONSE FOR LOCATION HEADER 
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
