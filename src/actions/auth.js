import { authActions } from '../actionTypes';

export function checkAuthEmpty(state) {
  return {
    type: authActions.CHECK_AUTH_EMPTY,
    auth: !state.auth
  };
}