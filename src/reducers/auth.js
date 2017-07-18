import { authActions } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case authActions.LOG_OUT_USER:
      return action.authentication;
    default:
      return state;
  }
};