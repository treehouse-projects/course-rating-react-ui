import { authActions } from '../actionTypes';

export function logout() {
  return {
    type: authActions.LOG_OUT_USER,
    authentication: null
  };
}