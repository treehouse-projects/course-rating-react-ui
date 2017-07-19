import { authActions } from '../actionTypes';

export function logOut() {
  return {
    type: authActions.LOG_OUT_USER,
    authentication: null
  };
}

export function authenticated(authentication) {
  return {
    type: authActions.USER_AUTHENTICATED,
    authentication
  };
}