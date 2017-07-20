import { userActionTypes, authActionTypes } from "../actionTypes";
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
    case authActionTypes.LOG_OUT_USER:
      removeUser();
      return null;
    case userActionTypes.REQUEST_USER:
      removeUser();
      return state;
    case userActionTypes.REQUEST_USER_SUCCESS:
      setUser(action.user);
      return action.user;
    case userActionTypes.REQUEST_USER_FAILURE:
      removeUser();
      return state;
    case userActionTypes.CREATE_USER:
      return state;
    case userActionTypes.CREATE_USER_SUCCESS:
      setUser(action.user);
      return action.user;
    case userActionTypes.CREATE_USER_FAILURE:
      return state;
    default:
      return state;
  }
};
