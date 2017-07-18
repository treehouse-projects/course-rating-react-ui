import { authActions } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case authActions.CHECK_AUTH_EMPTY:
      console.log(state);
      console.log(action);
      return !action.auth;
    default:
      return state;
  }
};