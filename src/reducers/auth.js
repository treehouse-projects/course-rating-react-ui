import { authActions } from "../actionTypes";
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

export default (state = getAuthenticationHeader(), action) => {
  switch (action.type) {
    case authActions.USER_AUTHENTICATED:
      setAuthenticationHeader(action.authentication);
      return action.authentication;
    case authActions.LOG_OUT_USER:
      return null;
    default:
      return state;
  }
};
