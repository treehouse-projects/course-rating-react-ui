import { authActionTypes } from "../actionTypes";
import Cookies from "js-cookie";

function getAuthenticationHeader() {
  const authentication = Cookies.get("authentication");
  if (authentication) {
    return authentication;
  } else {
    return null;
  }
}

function setAuthenticationHeader(authentication) {
  Cookies.set("authentication", authentication);
}

function removeAuthenticationHeader() {
  Cookies.remove("authentication");
}

export default (state = getAuthenticationHeader(), action) => {
  switch (action.type) {
    case authActionTypes.USER_AUTHENTICATED:
      setAuthenticationHeader(action.authentication);
      return action.authentication;
    case authActionTypes.LOG_OUT_USER:
      removeAuthenticationHeader();
      return null;
    default:
      return state;
  }
};
