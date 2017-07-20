import { redirectActionTypes } from "../actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case redirectActionTypes.REDIRECT:
      return action.path;
    case redirectActionTypes.CLEAR_REDIRECT:
      return null;
    default:
      return state;
  }
};
