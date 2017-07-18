import { breadCrumbActionTypes } from "../actionTypes";

export default (state = "", action) => {
  switch (action.type) {
    case breadCrumbActionTypes.UPDATE_BREADCRUMB_TITLE:
      return action.title;
    default:
      return state;
  }
};
