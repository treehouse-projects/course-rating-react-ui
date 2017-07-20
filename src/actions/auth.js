import { authActionTypes } from '../actionTypes';

export function logOut() {
  return {
    type: authActionTypes.LOG_OUT_USER,
    authentication: null
  };
}

export function authenticated(authentication) {
  return {
    type: authActionTypes.USER_AUTHENTICATED,
    authentication
  };
}