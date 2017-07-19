import { authActions } from "../actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case authActions.USER_AUTHENTICATED:
      return action.authentication;
    case authActions.LOG_OUT_USER:
      return null;
    default:
      return state;
  }
};