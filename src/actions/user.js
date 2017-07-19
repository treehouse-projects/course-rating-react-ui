import fetch from "isomorphic-fetch";
import { apiRoot } from "../config";
import { userActions } from "../actionTypes";
import { authenticated } from "./auth";

const unwrapUser = ({ data }) => data[0];
const createAuthHeader = (username, password) => `Basic ${btoa(`${username}:${password}`)}`;

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

export function fetchUser(username, password) {
  return dispatch => {
    dispatch(requestUser());
    const authHeader = createAuthHeader(username, password);
    return fetch(`${apiRoot}/users`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader
      }
      })
      .then(response => response.json())
      .then(unwrapUser)
      .then(user => {
        const { fullName, _id } = user;
        dispatch(requestUserSuccess({ fullName, _id }));
      })
      .then(() => dispatch(authenticated(authHeader)))
      .catch(err => {
        dispatch(requestUserFailure(err));
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

export function createUserFailure(err) {
  return {
    type: userActions.CREATE_USER_FAILURE,
    err: err
  };
}
export function sendCreateUser(userData) {
  return dispatch => {
    dispatch(createUser());
    console.log(userData);
    return fetch(`${apiRoot}/users`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      mode:'cors',
      body: JSON.stringify(userData)
    })
      .then(() => fetchUser(userData.emailAddress, userData.password)(dispatch))
      .catch(err => {
        dispatch(createUserFailure());
        console.log(err);
      });
  };
}
