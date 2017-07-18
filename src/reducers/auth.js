import { authActions } from "../actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case authActions.LOG_OUT_USER:
      return null;
    default:
      return state;
  }
};