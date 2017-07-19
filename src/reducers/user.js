import { userActions, authActions } from "../actionTypes";
import Cookies from "js-cookie";

function getUser() {
  const user = Cookies.get("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
}

function setUser(user) {
  Cookies.set("user", JSON.stringify(user));
}

function removeUser() {
  Cookies.remove("user");
}

export default (state = getUser(), action) => {
  switch (action.type) {
    case authActions.LOG_OUT_USER:
      removeUser();
      return null;
    case userActions.REQUEST_USER:
      removeUser();
      return state;
    case userActions.REQUEST_USER_SUCCESS:
      setUser(action.user);
      return action.user;
    case userActions.REQUEST_USER_FAILURE:
      removeUser();
      return state;
    case userActions.CREATE_USER:
      return state;
    case userActions.CREATE_USER_SUCCESS:
      setUser(action.user);
      return action.user;
    case userActions.CREATE_USER_FAILURE:
      return state;
    default:
      return state;
  }
};
