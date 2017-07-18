import { userActions } from "../actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case userActions.REQUEST_USER:
      return state;
    case userActions.REQUEST_USER_SUCCESS:
      return action.user;
    case userActions.REQUEST_USER_FAILURE:
      return state;
    case userActions.CREATE_USER:
      return state;
    case userActions.CREATE_USER_SUCCESS:
      return action.user;
    case userActions.CREATE_USER_FAILURE:
      return state;
    default:
      return state;
  }
};
